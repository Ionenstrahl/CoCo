// ABOUTME: Main JavaScript for CoCo food comparison tool with Chart.js visualizations
// ABOUTME: Handles food selection, CO2 calculations, chart rendering, and modal interactions

let selectedFoods = [];
let comparisonMode = 'weight';
let chart = null;

const modeDescriptions = {
    weight: 'Comparing CO2 emissions per 100 grams of food',
    calories: 'Comparing CO2 emissions per 100 kilocalories',
    protein: 'Comparing CO2 emissions per 10 grams of protein'
};

function initializeApp() {
    renderFoodLists();
    setupEventListeners();
    updateView();
}

function renderFoodLists() {
    const categories = {
        animal: document.getElementById('animalFoods'),
        plant_protein: document.getElementById('plantProteinFoods'),
        grain: document.getElementById('grainFoods'),
        vegetable: document.getElementById('vegetableFoods')
    };

    foods.forEach(food => {
        const container = categories[food.category];
        if (!container) return;

        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `food-${food.id}`;
        checkbox.value = food.id;
        checkbox.addEventListener('change', handleFoodSelection);

        const label = document.createElement('label');
        label.htmlFor = `food-${food.id}`;
        label.textContent = food.name;

        const infoButton = document.createElement('button');
        infoButton.className = 'info-icon';
        infoButton.innerHTML = 'ℹ️';
        infoButton.title = 'View source';
        infoButton.addEventListener('click', () => showSourceModal(food));

        foodItem.appendChild(checkbox);
        foodItem.appendChild(label);
        foodItem.appendChild(infoButton);

        container.appendChild(foodItem);
    });
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', handleModeChange);
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

function handleFoodSelection(e) {
    const foodId = e.target.value;

    if (e.target.checked) {
        const food = foods.find(f => f.id === foodId);
        if (food) selectedFoods.push(food);
    } else {
        selectedFoods = selectedFoods.filter(f => f.id !== foodId);
    }

    updateView();
}

function handleModeChange(e) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    e.target.classList.add('active');
    comparisonMode = e.target.dataset.mode;

    document.getElementById('modeDescription').textContent = modeDescriptions[comparisonMode];

    updateView();
}

function updateView() {
    if (selectedFoods.length >= 2) {
        document.getElementById('emptyState').classList.add('hidden');
        document.querySelector('.chart-container').classList.add('active');
        renderChart();
        renderTable();
    } else {
        document.getElementById('emptyState').classList.remove('hidden');
        document.querySelector('.chart-container').classList.remove('active');
        clearTable();
    }
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

function renderChart() {
    const ctx = document.getElementById('co2Chart');

    const chartData = selectedFoods
        .map(food => ({
            food,
            co2: calculateCO2(food, comparisonMode)
        }))
        .filter(item => item.co2 !== null)
        .sort((a, b) => b.co2 - a.co2);

    const labels = chartData.map(item => item.food.name);
    const data = chartData.map(item => item.co2);
    const colors = data.map(value => getColorForCO2(value));

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: getModeLabel(),
                data: data,
                backgroundColor: colors,
                borderColor: colors.map(c => darkenColor(c)),
                borderWidth: 2
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.x.toFixed(3)} kg CO2`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CO2 Emissions (kg)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    const tableData = selectedFoods
        .map(food => ({
            food,
            co2: calculateCO2(food, comparisonMode)
        }))
        .filter(item => item.co2 !== null)
        .sort((a, b) => a.co2 - b.co2);

    const lowestCO2 = tableData.length > 0 ? tableData[0].co2 : null;

    tableData.forEach(item => {
        const row = document.createElement('tr');
        if (item.co2 === lowestCO2) {
            row.classList.add('lowest-co2');
        }

        const nameCell = document.createElement('td');
        nameCell.textContent = item.food.name;
        if (item.co2 === lowestCO2) {
            nameCell.textContent += ' 🌟';
        }

        const co2Cell = document.createElement('td');
        co2Cell.textContent = item.co2.toFixed(3);

        const caloriesCell = document.createElement('td');
        caloriesCell.textContent = item.food.caloriesPer100g;

        const proteinCell = document.createElement('td');
        proteinCell.textContent = item.food.proteinPer100g.toFixed(1);

        const sourceCell = document.createElement('td');
        const sourceLink = document.createElement('a');
        sourceLink.href = '#';
        sourceLink.className = 'source-link';
        sourceLink.textContent = 'View';
        sourceLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSourceModal(item.food);
        });
        sourceCell.appendChild(sourceLink);

        row.appendChild(nameCell);
        row.appendChild(co2Cell);
        row.appendChild(caloriesCell);
        row.appendChild(proteinCell);
        row.appendChild(sourceCell);

        tbody.appendChild(row);
    });
}

function clearTable() {
    document.getElementById('tableBody').innerHTML = '';
}

function getModeLabel() {
    switch (comparisonMode) {
        case 'weight':
            return 'CO2 per 100g';
        case 'calories':
            return 'CO2 per 100 kcal';
        case 'protein':
            return 'CO2 per 10g protein';
        default:
            return 'CO2';
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

function darkenColor(hex) {
    const rgb = parseInt(hex.slice(1), 16);
    const r = Math.max(0, (rgb >> 16) - 30);
    const g = Math.max(0, ((rgb >> 8) & 0x00ff) - 30);
    const b = Math.max(0, (rgb & 0x0000ff) - 30);
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
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
