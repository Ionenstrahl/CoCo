// ABOUTME: Main JavaScript for CoCo food comparison tool with carousel visualization
// ABOUTME: Displays all foods sorted by CO2 footprint in an interactive carousel

let comparisonMode = 'weight';
let carouselPosition = 0;
let itemsPerView = 3;
let totalItems = 0;

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchStartTime = 0;

const modeDescriptions = {
    weight: 'Comparing CO2 emissions per 100 grams of food',
    calories: 'Comparing CO2 emissions per 100 kilocalories',
    protein: 'Comparing CO2 emissions per 10 grams of protein'
};

const foodEmojis = {
    beef: '🥩', lamb: '🐑', pork: '🐷', chicken: '🍗',
    salmon_farmed: '🐟', tuna: '🐟', whitefish: '🐟',
    cheese: '🧀', milk: '🥛', eggs: '🥚', yogurt: '🥛',
    tofu: '🧈', lentils: '🫘', chickpeas: '🫘', black_beans: '🫘',
    peanuts: '🥜', almonds: '🌰', avocado: '🥑',
    rice: '🍚', wheat_bread: '🍞', oats: '🌾',
    potatoes: '🥔', tomatoes: '🍅', broccoli: '🥦', carrots: '🥕'
};



function initializeApp() {
    console.log('Initializing app...');
    calculateAttribution();
    calculateItemsPerView();
    setupEventListeners();
    renderAllFoods();
    window.addEventListener('resize', () => {
        calculateItemsPerView();
        updateCarouselPosition();
    });
    console.log('App initialized successfully');
}

function calculateAttribution() {
    const tokens = 201;
    const costPerToken = 0.015;
    const co2PerToken = 0.0045;

    const tokensEl = document.getElementById('tokens');
    const costEl = document.getElementById('cost');
    const co2El = document.getElementById('co2');

    if (tokensEl && costEl && co2El) {
        tokensEl.textContent = tokens;
        costEl.textContent = (tokens * costPerToken).toFixed(2);
        co2El.textContent = (tokens * co2PerToken).toFixed(2);
    } else {
        console.error('Attribution elements not found');
    }
}


function calculateItemsPerView() {
    const width = window.innerWidth;
    if (width < 480) {
        itemsPerView = 3;
    } else if (width < 768) {
        itemsPerView = 4;
    } else if (width < 1024) {
        itemsPerView = 4;
    } else {
        itemsPerView = 5;
    }
}

function renderAllFoods() {
    if (typeof foods === 'undefined' || !foods || foods.length === 0) {
        console.error('Foods array is not defined or empty');
        return;
    }

    const foodsWithCO2 = foods.map(food => ({
        ...food,
        co2Value: calculateCO2(food, comparisonMode)
    })).filter(food => food.co2Value !== null);

    foodsWithCO2.sort((a, b) => a.co2Value - b.co2Value);

    totalItems = foodsWithCO2.length;
    carouselPosition = 0;

    const container = document.getElementById('foodsList');
    container.innerHTML = '';

    foodsWithCO2.forEach((food) => {
        const foodItem = createFoodItem(food);
        container.appendChild(foodItem);
    });

    // Use setTimeout to ensure DOM has rendered before calculating positions
    setTimeout(() => {
        updateCarouselPosition();
    }, 0);
}

function createFoodItem(food) {
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';

    const foodImage = document.createElement('div');
    foodImage.className = 'food-image placeholder';
    foodImage.textContent = foodEmojis[food.id] || '🍽️';
    foodImage.title = food.name;

    const co2Dot = createCO2IndicatorByArea(food.co2Value);

    const foodName = document.createElement('div');
    foodName.className = 'food-name';
    foodName.textContent = food.name;

    const co2Value = document.createElement('div');
    co2Value.className = 'food-co2-value';
    co2Value.textContent = `${food.co2Value.toFixed(3)} kg CO2`;
    co2Value.addEventListener('click', () => showSourceModal(food));

    foodItem.appendChild(foodImage);
    foodItem.appendChild(co2Dot);
    foodItem.appendChild(foodName);
    foodItem.appendChild(co2Value);

    return foodItem;
}

function createCO2IndicatorByArea(co2Value) {
    const dot = document.createElement('div');
    dot.className = 'co2-indicator';

    const minArea = Math.PI * 6 * 6;
    const maxArea = Math.PI * 30 * 30;

    const maxCO2 = 3.0;
    const normalizedCO2 = Math.min(co2Value, maxCO2) / maxCO2;
    const area = minArea + (normalizedCO2 * (maxArea - minArea));

    const radius = Math.sqrt(area / Math.PI);
    const size = radius * 2;

    const color = getColorForCO2(co2Value);

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.backgroundColor = color;
    dot.title = `${co2Value.toFixed(3)} kg CO2`;

    return dot;
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', handleModeChange);
    });

    document.getElementById('carouselPrev').addEventListener('click', () => navigateCarousel(-1));
    document.getElementById('carouselNext').addEventListener('click', () => navigateCarousel(1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navigateCarousel(-1);
        if (e.key === 'ArrowRight') navigateCarousel(1);
    });

    const carouselWrapper = document.querySelector('.carousel-wrapper');
    carouselWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    carouselWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    carouselWrapper.addEventListener('touchend', handleTouchEnd, { passive: false });

    document.getElementById('viewSourcesLink').addEventListener('click', (e) => {
        e.preventDefault();
        showAllSourcesModal();
    });

    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModals);
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModals();
        }
    });
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
}

function handleTouchMove(e) {
    if (!touchStartX) return;

    touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;

    const deltaX = Math.abs(touchEndX - touchStartX);
    const deltaY = Math.abs(touchEndY - touchStartY);

    if (deltaX > deltaY && deltaX > 10) {
        e.preventDefault();
    }
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].clientX;

    if (!touchStartX) return;

    const swipeDistance = touchStartX - touchEndX;
    const swipeTime = Date.now() - touchStartTime;
    const minSwipeDistance = 50;
    const maxSwipeTime = 500;

    if (Math.abs(swipeDistance) > minSwipeDistance && swipeTime < maxSwipeTime) {
        if (swipeDistance > 0) {
            navigateCarousel(1);
        } else {
            navigateCarousel(-1);
        }
    }

    touchStartX = 0;
    touchEndX = 0;
    touchStartY = 0;
    touchStartTime = 0;
}

function navigateCarousel(direction) {
    const maxPosition = totalItems - itemsPerView;
    carouselPosition = Math.max(0, Math.min(carouselPosition + direction, maxPosition));
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const container = document.getElementById('foodsList');
    if (!container) return;

    const items = container.children;
    if (items.length === 0) return;

    const itemWidth = items[0].offsetWidth;
    const gap = 16;
    const offset = -(carouselPosition * (itemWidth + gap));

    container.style.transform = `translateX(${offset}px)`;

    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!prevBtn || !nextBtn) return;

    prevBtn.disabled = carouselPosition === 0;
    nextBtn.disabled = carouselPosition >= totalItems - itemsPerView;
}

function handleModeChange(e) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    e.target.classList.add('active');
    comparisonMode = e.target.dataset.mode;

    document.getElementById('modeDescription').textContent = modeDescriptions[comparisonMode];

    renderAllFoods();
}

function calculateCO2(food, mode) {
    const { co2PerKg, caloriesPer100g, proteinPer100g } = food;

    switch (mode) {
        case 'weight':
            return co2PerKg / 10;

        case 'calories':
            const kgFor100kcal = 100 / caloriesPer100g;
            return co2PerKg * kgFor100kcal;

        case 'protein':
            if (proteinPer100g === 0) return null;
            const kgFor10gProtein = 10 / proteinPer100g;
            return co2PerKg * kgFor10gProtein;

        default:
            return co2PerKg / 10;
    }
}

function getColorForCO2(value) {
    if (value < 0.5) return '#4caf50';
    if (value < 1.5) return '#8bc34a';
    if (value < 3.0) return '#cddc39';
    if (value < 5.0) return '#ffeb3b';
    if (value < 10.0) return '#ff9800';
    return '#f44336';
}

function showSourceModal(food) {
    const modal = document.getElementById('sourceModal');
    const details = document.getElementById('sourceDetails');

    const source = food.source;

    details.innerHTML = `
        <div class="source-details">
            <h3>${food.name}</h3>
            <p><strong>Study:</strong> ${source.title}</p>
            <p><strong>Authors:</strong> ${source.authors}</p>
            <p><strong>Publication:</strong> ${source.journal}, ${source.year}</p>
            <p><strong>Link:</strong> <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.url}</a></p>
            <p style="margin-top: 16px;"><strong>CO2 Emissions:</strong> ${food.co2PerKg} kg CO2e per kg</p>
            <p><strong>Nutritional Info (per 100g):</strong></p>
            <ul style="margin-left: 20px;">
                <li>Calories: ${food.caloriesPer100g} kcal</li>
                <li>Protein: ${food.proteinPer100g}g</li>
                <li>Fat: ${food.fatPer100g}g</li>
            </ul>
        </div>
    `;

    modal.classList.add('active');
}

function showAllSourcesModal() {
    const modal = document.getElementById('allSourcesModal');
    const details = document.getElementById('allSourcesDetails');

    const uniqueSources = new Map();
    foods.forEach(food => {
        const key = `${food.source.title}-${food.source.year}`;
        if (!uniqueSources.has(key)) {
            uniqueSources.set(key, food.source);
        }
    });

    let html = '';
    uniqueSources.forEach((source, key) => {
        html += `
            <div class="source-item">
                <h3>${source.title}</h3>
                <p><strong>Authors:</strong> ${source.authors}</p>
                <p><strong>Publication:</strong> ${source.journal}, ${source.year}</p>
                <p><strong>Link:</strong> <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.url}</a></p>
            </div>
        `;
    });

    details.innerHTML = html;
    modal.classList.add('active');
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

window.addEventListener('DOMContentLoaded', initializeApp);
