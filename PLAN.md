# CoCo (CO2 Comparer) - Implementation Plan

## Overview
Vue 3 + Vite static web app for tracking daily CO2 consumption across multiple categories (food, AI, transport, energy, other) with localStorage persistence. Includes scientific source links, country consumption comparisons, and food comparison tools.

## Project Structure

```
CO2-Comparer/
├── .gitignore
├── claude.md
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── favicon.ico
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── style.css
│   ├── components/
│   │   ├── ActivityForm.vue
│   │   ├── ActivityList.vue
│   │   ├── CategoryCard.vue
│   │   ├── CO2Display.vue
│   │   ├── DevelopmentCost.vue
│   │   ├── FilterControls.vue
│   │   ├── VisualizationChart.vue
│   │   ├── CountryComparison.vue       # NEW: Compare personal vs countries
│   │   ├── FoodComparison.vue          # NEW: Compare foods by calories/protein/weight
│   │   └── SourcesModal.vue            # NEW: Display scientific sources
│   ├── composables/
│   │   ├── useActivities.js
│   │   ├── useCalculations.js
│   │   ├── useStorage.js
│   │   ├── useFilters.js
│   │   ├── useComparisons.js           # NEW: Country comparison logic
│   │   └── useFoodComparison.js        # NEW: Food comparison logic
│   ├── constants/
│   │   ├── co2Factors.js               # CO2 factors with source links
│   │   ├── countryData.js              # NEW: Country consumption averages
│   │   └── nutritionData.js            # NEW: Food nutrition data
│   └── utils/
│       ├── dateHelpers.js
│       └── chartHelpers.js
└── dist/                                # Build output
```

## Dependencies

```json
{
  "dependencies": {
    "vue": "^3.4.21",
    "chart.js": "^4.4.1",
    "vue-chartjs": "^5.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.4",
    "vite": "^5.1.5"
  }
}
```

Using Chart.js for polished visualizations (country comparisons, food comparisons, trend charts).

## Core Features

### 1. Activity Tracking
- Add/edit/delete activities across 5 categories
- Each activity calculates CO2 automatically
- Filter by date range and category
- Display total CO2 with visual indicators
- localStorage persistence

### 2. Scientific Sources
- Each CO2 factor includes source links (academic papers, EPA, DEFRA, etc.)
- Clickable info icon next to calculations
- Modal popup showing source details and methodology
- Sources stored in co2Factors.js with metadata

### 3. Country Comparison
- Compare personal CO2 to average consumption in:
  - Worldwide average
  - Germany
  - China
  - USA
- Show daily/weekly/monthly comparisons
- Visual bar chart showing personal vs country averages
- Percentage above/below average

### 4. Food Comparison Tool
- Compare multiple foods side-by-side
- Three comparison modes:
  - Per 100g (weight basis)
  - Per 100 kcal (calorie basis)
  - Per 10g protein (protein basis)
- Display CO2 emissions for each comparison mode
- Visual bar chart showing relative emissions
- Helps users make informed food choices

### 5. Development Cost Tracking
- Track tokens used to build this website
- Calculate CO2 from AI usage
- Display prominently in app

### 6. Visualizations
- Daily/weekly/monthly CO2 trends (line/bar chart)
- Category breakdown (pie/doughnut chart)
- Country comparison charts (horizontal bar chart)
- Food comparison charts (grouped bar chart for 3 modes)
- Using Chart.js via vue-chartjs for consistent, polished visualizations

## Data Models

### Activity Storage (localStorage: 'coco_activities')
```javascript
{
  activities: [
    {
      id: string,
      category: "food" | "ai" | "transport" | "energy" | "other",
      type: string,
      quantity: number,
      unit: string,
      co2kg: number,
      date: "YYYY-MM-DD",
      timestamp: number,
      notes: string
    }
  ]
}
```

### CO2 Factors with Sources
```javascript
{
  food: {
    beef: {
      co2PerUnit: 27.0,
      unit: "kg",
      sources: [
        {
          title: "Environmental impacts of food production",
          authors: "Poore, J., & Nemecek, T.",
          journal: "Science",
          year: 2018,
          url: "https://doi.org/10.1126/science.aaq0216"
        }
      ],
      nutrition: { calories: 250, protein: 26, fat: 15 } // per 100g
    },
    // ... more foods
  },
  // ... other categories
}
```

### Country Data (localStorage: 'coco_country_data')
```javascript
{
  worldwide: { dailyCO2kg: 12.1, source: "Global Carbon Project 2023" },
  germany: { dailyCO2kg: 20.5, source: "EPA 2023" },
  china: { dailyCO2kg: 21.2, source: "IEA 2023" },
  usa: { dailyCO2kg: 42.1, source: "EPA 2023" }
}
```

### Nutrition Data
```javascript
{
  beef: { caloriesPer100g: 250, proteinPer100g: 26, fatPer100g: 15 },
  chicken: { caloriesPer100g: 165, proteinPer100g: 31, fatPer100g: 3.6 },
  // ... more foods
}
```

## CO2 Calculation Methodology

### Food (per kg)
- Beef: 27.0 kg CO2e (Poore & Nemecek, Science 2018)
- Chicken: 6.9 kg CO2e
- Pork: 12.1 kg CO2e
- Cheese: 13.5 kg CO2e
- Vegetables: 0.5 kg CO2e (average)

### AI Usage
- GPT-4 query: 1.3g CO2 (~0.0013 kWh × 475g/kWh)
- Claude Sonnet: 1.1g CO2
- Claude Opus: 2.4g CO2
- Image generation: 50g CO2

### Transport (per km)
- Car petrol: 192g CO2
- Car electric: 53g CO2
- Train: 41g CO2
- Plane short-haul: 255g CO2

### Energy
- Electricity: 475g CO2/kWh (US grid avg)
- Natural gas: 185g CO2/kWh

### Development CO2
- Claude Sonnet tokens: ~0.000015 kWh per 1000 tokens
- Formula: tokens × 0.000015 / 1000 × 475 = kg CO2

## Component Architecture

### Main Layout (App.vue)
```
Header
├── CO2Display (total with color indicator)
├── FilterControls (date range, category)
├── [Tabs: Track | Compare Countries | Compare Foods]
│
├── Track Tab:
│   ├── CategoryCard × 5
│   ├── ActivityForm
│   ├── ActivityList
│   └── VisualizationChart
│
├── Compare Countries Tab:
│   ├── CountryComparison
│   └── Comparison Chart
│
└── Compare Foods Tab:
    ├── FoodComparison (selector + mode switcher)
    └── Comparison Bar Chart

Footer
└── DevelopmentCost
```

### New Components

**CountryComparison.vue**
- Select time period (day/week/month)
- Display personal CO2 vs 4 country averages
- Bar chart visualization
- Show percentage difference
- Source links for country data

**FoodComparison.vue**
- Multi-select food items (checkboxes)
- Toggle comparison mode: per 100g | per 100kcal | per 10g protein
- Display table with CO2 values
- Bar chart showing relative emissions
- Nutrition info for context
- Source links for each food

**SourcesModal.vue**
- Reusable modal component
- Display source details (title, authors, journal, year, URL)
- Link out to original sources
- Can be triggered from info icons throughout app

## Implementation Steps

### Phase 1: Basic Setup
1. Initialize Vite + Vue 3 project
2. Create folder structure
3. Set up vite.config.js
4. Create .gitignore
5. Install dependencies

### Phase 2: Core Data
6. Create co2Factors.js with all factors and sources
7. Create countryData.js with country averages
8. Create nutritionData.js with food nutrition info
9. Build useStorage.js composable
10. Build useCalculations.js composable

### Phase 3: Basic Tracking
11. Create ActivityForm.vue
12. Create ActivityList.vue
13. Create CO2Display.vue
14. Create CategoryCard.vue
15. Wire up useActivities.js
16. Basic App.vue layout

### Phase 4: Sources
17. Create SourcesModal.vue
18. Add info icons throughout UI
19. Link to sources in co2Factors.js
20. Test modal interactions

### Phase 5: Country Comparison
21. Create CountryComparison.vue
22. Build useComparisons.js composable
23. Create comparison chart visualization
24. Add tab navigation to App.vue
25. Display percentage differences

### Phase 6: Food Comparison
26. Create FoodComparison.vue
27. Build useFoodComparison.js composable
28. Add nutrition data integration
29. Create comparison mode switcher
30. Build comparison bar chart
31. Add to tab navigation

### Phase 7: Visualizations & Polish
32. Create VisualizationChart.vue
33. Build FilterControls.vue
34. Add DevelopmentCost.vue
35. Style with responsive CSS
36. Add color coding for CO2 levels
37. Category icons

### Phase 8: Testing & Deployment
38. Manual testing checklist
39. Verify calculations
40. Test localStorage persistence
41. Cross-browser testing
42. Build for production
43. Deploy to GitHub Pages/Netlify

## Critical Files

1. **src/constants/co2Factors.js** - All CO2 factors with sources
2. **src/constants/countryData.js** - Country consumption averages
3. **src/constants/nutritionData.js** - Food nutrition info
4. **src/composables/useActivities.js** - Activity CRUD
5. **src/composables/useCalculations.js** - CO2 calculations
6. **src/components/CountryComparison.vue** - Country comparison UI
7. **src/components/FoodComparison.vue** - Food comparison UI
8. **src/App.vue** - Main app layout with tabs

## Verification

### Manual Testing
- [ ] Add activity in each category
- [ ] Click info icon and see sources modal
- [ ] View country comparison with personal data
- [ ] Compare 3+ foods in each mode (weight, calories, protein)
- [ ] Filter by date and category
- [ ] Edit/delete activities
- [ ] Update development cost
- [ ] Export/import data
- [ ] Reload page - data persists
- [ ] Test on mobile/tablet/desktop

### Calculation Verification
- [ ] Verify beef 1kg = 27kg CO2
- [ ] Verify car 10km = 1.92kg CO2
- [ ] Verify country averages match sources
- [ ] Verify food comparisons scale correctly for calories/protein

## Build Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser'
  }
})
```

## Deployment

1. Run `npm run build`
2. Test with `npm run preview`
3. Deploy dist/ to GitHub Pages, Netlify, or Vercel
4. No backend required - fully static

## Decisions Made

1. **Visualization**: Chart.js library for polished charts
2. **Development cost**: Single cumulative total
3. **Food database**: Predefined foods only (curated with verified data)
4. **Features**: Focus on tracking and comparisons (no goal-setting for MVP)

## Notes

- Follow YAGNI: Start with core features, add complexity only if needed
- Keep bundle size small: No unnecessary dependencies
- Scientific rigor: Link to reputable sources for all calculations
- User education: Help users understand their impact through comparisons
- Static deployment: No backend costs, fast loading
