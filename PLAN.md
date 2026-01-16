# CoCo (CO2 Comparer) - Implementation Plan

## Overview
Mobile first Static web app for comparing CO2 consumption for different foods in different categories as weight, kalories and protein. Includes scientific source links.
Using Chart.js for polished visualizations (country comparisons, food comparisons, trend charts).

## Core Features

### 1. Food Comparison Tool
- Compare multiple foods side-by-side
- Three comparison modes:
  - Per 100g (weight basis)
  - Per 100 kcal (calorie basis)
  - Per 10g protein (protein basis)
- Display CO2 emissions for each comparison mode
- Visual bar chart showing relative emissions
- Helps users make informed food choices

### 2. Scientific Sources
- Each CO2 factor includes source links (academic papers, EPA, DEFRA, etc.)
- Clickable info icon next to calculations
- Modal popup showing source details and methodology

### 3. Development Cost Tracking
- Track tokens used to build this website
- Calculate CO2 from AI usage
- Display prominently in app


## Data Models

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

### Nutrition Data
```javascript
{
  beef: { caloriesPer100g: 250, proteinPer100g: 26, fatPer100g: 15 },
  chicken: { caloriesPer100g: 165, proteinPer100g: 31, fatPer100g: 3.6 },
  // ... more foods
}
```

## Component Architecture

### Main Layout (App.vue)
```
Header
├── CO2Display (total with color indicator)
│
└── Compare Foods Tab:
    ├── FoodComparison (selector + mode switcher)

Footer
└── DevelopmentCost
```

## Decisions Made

1. **Visualization**: Chart.js library for polished charts
2. **Development cost**: Single cumulative total
3. **Food database**: Predefined foods only (curated with verified data)

## Notes

- Follow YAGNI: Start with core features, add complexity only if needed
- Keep bundle size small: No unnecessary dependencies
- Scientific rigor: Link to reputable sources for all calculations
- User education: Help users understand their impact through comparisons
- Static deployment: No backend costs, fast loading
