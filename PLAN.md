# CoCo (CO2 Comparer) - Implementation Plan

## Overview
Mobile-first static web app for comparing CO2 emissions of different foods. Built with vanilla HTML/JS/CSS for simplicity and performance. Features Coco the Koala mascot to make environmental information engaging and accessible.

## Tech Stack
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Visualization**: Custom implementation using CSS and DOM manipulation
- **No frameworks**: Zero dependencies for fast loading and minimal bundle size
- **Static hosting**: Deploy anywhere (GitHub Pages, Netlify, etc.)

## Core Features

### 1. Interactive Carousel Food Comparison
- Display all foods in a scrollable carousel
- Three comparison modes:
  - Per 100g (weight basis)
  - Per 100 kcal (calorie basis)
  - Per 10g protein (protein basis)
- Visual CO2 indicators using circular dots sized by emission area
- Color-coded emissions (green = low, yellow = medium, red = high)
- Touch/swipe gestures with momentum scrolling for mobile
- Mouse drag support for desktop
- Foods sorted by CO2 footprint in current mode

### 2. Scientific Sources
- Each food includes source links (academic papers, journals)
- Click on CO2 value to view source modal
- Source details: authors, publication, year, DOI/URL
- "View all sources" link in footer for complete bibliography

### 3. Development Cost Tracking
- Track tokens used to build this website
- Calculate cost (€) and CO2 from AI usage
- Display in footer with running totals
- Demonstrates transparency and self-awareness


## Data Models

### Food Data Structure (data.js)
```javascript
const foods = [
  {
    id: 'beef',
    name: 'Beef',
    category: 'animal',
    co2PerKg: 27.0,
    caloriesPer100g: 250,
    proteinPer100g: 26,
    fatPer100g: 15,
    source: {
      title: "Environmental impacts of food production",
      authors: "Poore, J., & Nemecek, T.",
      journal: "Science",
      year: 2018,
      url: "https://doi.org/10.1126/science.aaq0216"
    }
  },
  // ... more foods
];
```

### Key Calculations
- **Per 100g**: `co2PerKg / 10`
- **Per 100 kcal**: `co2PerKg * (100 / caloriesPer100g)`
- **Per 10g protein**: `co2PerKg * (10 / proteinPer100g)`

### Visualization
- CO2 indicator dots scaled by area: `area = π × radius²`
- Radius range: 6px (min) to 30px (max)
- Normalized to max CO2 value of 3.0 kg

## File Structure

```
/
├── index.html           # Main HTML with semantic structure
├── styles.css           # All styling with CSS variables and media queries
├── script.js            # Core application logic and carousel interaction
├── data.js              # Food database with CO2 and nutrition data
├── assets/
│   └── coco-koala.png  # Mascot image
└── CLAUDE.md           # Development guidelines
```

## Page Structure (index.html)

```
Header
├── Coco the Koala (mascot)
└── Title and tagline

Main Content
├── Comparison Mode Selector
│   ├── Per 100g button
│   ├── Per 100 kcal button
│   └── Per 10g protein button
│
└── Food Carousel
    ├── Previous button (hidden on mobile)
    ├── Carousel wrapper (swipeable)
    │   └── Food items (sorted by CO2)
    │       ├── Food emoji
    │       ├── CO2 indicator dot
    │       ├── Food name
    │       └── CO2 value (clickable for source)
    └── Next button (hidden on mobile)

Footer
├── View all sources link
└── Development attribution (tokens, cost, CO2)
```

## Key Technical Features

### Carousel Interaction
- **Touch gestures**: Swipe with finger tracking in real-time
- **Mouse drag**: Click and drag on desktop with cursor feedback
- **Momentum scrolling**: Physics-based deceleration after fast swipes
- **Multi-position swipes**: Calculate positions based on drag distance
- **Boundary enforcement**: Prevent scrolling past start/end
- **Responsive**: Different items-per-view based on screen width

### Responsive Design
- **Mobile (<480px)**: 3 items visible, navigation buttons hidden
- **Tablet (480-768px)**: 4 items visible
- **Desktop (>1024px)**: 5 items visible
- Touch-optimized with prevent-scroll during horizontal swipe

### Performance
- **No dependencies**: Zero external libraries
- **requestAnimationFrame**: Smooth 60fps momentum animation
- **CSS transforms**: Hardware-accelerated carousel movement
- **Lazy modals**: Source details loaded on demand

## Decisions Made

1. **No framework**: Vanilla JS for simplicity and minimal bundle size
2. **Custom visualization**: Area-based CO2 dots instead of chart library
3. **Development cost**: Single cumulative total in footer
4. **Food database**: Predefined foods only (curated with verified data)
5. **Mobile-first**: Touch gestures primary, mouse drag as enhancement

## Notes

- Follow YAGNI: Start with core features, add complexity only if needed
- Keep bundle size small: No unnecessary dependencies
- Scientific rigor: Link to reputable sources for all calculations
- User education: Help users understand their impact through comparisons
- Static deployment: No backend costs, fast loading
