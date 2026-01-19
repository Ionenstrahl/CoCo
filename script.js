// ABOUTME: Main JavaScript for CoCo food comparison tool with bar chart visualization
// ABOUTME: Displays all foods sorted by CO2 footprint as horizontal bars

let comparisonMode = 'weight';
let activeCategories = new Set(['animal', 'plant_protein', 'grain', 'vegetable']);

const categoryNames = {
    animal: 'Animal Products',
    plant_protein: 'Plant Proteins',
    grain: 'Grains',
    vegetable: 'Vegetables'
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
    setupEventListeners();
    renderAllFoods();
    console.log('App initialized successfully');
}

function calculateAttribution() {
    const tokens = 1144;
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


function renderAllFoods() {
    if (typeof foods === 'undefined' || !foods || foods.length === 0) {
        console.error('Foods array is not defined or empty');
        return;
    }

    const foodsWithCO2 = foods
        .map(food => ({
            ...food,
            co2Value: calculateCO2(food, comparisonMode)
        }))
        .filter(food => food.co2Value !== null && activeCategories.has(food.category));

    if (foodsWithCO2.length === 0) {
        const container = document.getElementById('foodsList');
        container.innerHTML = '<div class="no-foods-message">No foods selected. Please select at least one category.</div>';
        return;
    }

    foodsWithCO2.sort((a, b) => a.co2Value - b.co2Value);

    const maxCO2 = Math.max(...foodsWithCO2.map(f => f.co2Value));

    const container = document.getElementById('foodsList');
    container.innerHTML = '';

    foodsWithCO2.forEach((food) => {
        const foodItem = createFoodItem(food, maxCO2);
        container.appendChild(foodItem);
    });
}

function createFoodItem(food, maxCO2) {
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';

    const barWidth = (food.co2Value / maxCO2) * 100;
    const barColor = getColorForCO2(food.co2Value);

    const foodBar = document.createElement('div');
    foodBar.className = 'food-bar';
    foodBar.style.width = `${barWidth}%`;
    foodBar.style.backgroundColor = barColor;

    const foodInfo = document.createElement('div');
    foodInfo.className = 'food-info';

    const foodImage = document.createElement('div');
    foodImage.className = 'food-image placeholder';
    foodImage.textContent = foodEmojis[food.id] || '🍽️';
    foodImage.title = food.name;

    const foodDetails = document.createElement('div');
    foodDetails.className = 'food-details';

    const foodName = document.createElement('div');
    foodName.className = 'food-name';
    foodName.textContent = food.name;

    const co2Value = document.createElement('div');
    co2Value.className = 'food-co2-value';
    co2Value.textContent = `${food.co2Value.toFixed(3)} kg CO2`;
    co2Value.addEventListener('click', () => showSourceModal(food));

    foodDetails.appendChild(foodName);
    foodDetails.appendChild(co2Value);

    foodInfo.appendChild(foodImage);
    foodInfo.appendChild(foodDetails);

    foodItem.appendChild(foodBar);
    foodItem.appendChild(foodInfo);

    return foodItem;
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', handleModeChange);
    });

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryToggle);
    });

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

function handleModeChange(e) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    e.target.classList.add('active');
    comparisonMode = e.target.dataset.mode;

    renderAllFoods();
}

function handleCategoryToggle(e) {
    const category = e.target.dataset.category;

    if (activeCategories.has(category)) {
        activeCategories.delete(category);
        e.target.classList.remove('active');
    } else {
        activeCategories.add(category);
        e.target.classList.add('active');
    }

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
