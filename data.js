// ABOUTME: Food database containing CO2 emissions and nutritional data for common foods
// ABOUTME: Each food includes source citations for scientific transparency

const foods = [
  // Animal Products - Meat
  {
    id: 'beef',
    name: 'Beef',
    category: 'animal',
    co2PerKg: 27.0,
    caloriesPer100g: 250,
    proteinPer100g: 26,
    fatPer100g: 15,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'lamb',
    name: 'Lamb',
    category: 'animal',
    co2PerKg: 24.5,
    caloriesPer100g: 294,
    proteinPer100g: 25,
    fatPer100g: 21,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'pork',
    name: 'Pork',
    category: 'animal',
    co2PerKg: 12.1,
    caloriesPer100g: 242,
    proteinPer100g: 27,
    fatPer100g: 14,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'chicken',
    name: 'Chicken',
    category: 'animal',
    co2PerKg: 6.9,
    caloriesPer100g: 165,
    proteinPer100g: 31,
    fatPer100g: 3.6,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },

  // Animal Products - Fish
  {
    id: 'salmon_farmed',
    name: 'Salmon (farmed)',
    category: 'animal',
    co2PerKg: 11.9,
    caloriesPer100g: 206,
    proteinPer100g: 20,
    fatPer100g: 13,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'tuna',
    name: 'Tuna',
    category: 'animal',
    co2PerKg: 6.1,
    caloriesPer100g: 132,
    proteinPer100g: 28,
    fatPer100g: 0.95,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'whitefish',
    name: 'White Fish',
    category: 'animal',
    co2PerKg: 5.1,
    caloriesPer100g: 105,
    proteinPer100g: 22,
    fatPer100g: 1.7,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },

  // Animal Products - Dairy
  {
    id: 'cheese',
    name: 'Cheese',
    category: 'animal',
    co2PerKg: 13.5,
    caloriesPer100g: 402,
    proteinPer100g: 25,
    fatPer100g: 33,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'milk',
    name: 'Milk',
    category: 'animal',
    co2PerKg: 1.9,
    caloriesPer100g: 61,
    proteinPer100g: 3.2,
    fatPer100g: 3.3,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'eggs',
    name: 'Eggs',
    category: 'animal',
    co2PerKg: 4.8,
    caloriesPer100g: 155,
    proteinPer100g: 13,
    fatPer100g: 11,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'yogurt',
    name: 'Yogurt',
    category: 'animal',
    co2PerKg: 2.2,
    caloriesPer100g: 59,
    proteinPer100g: 10,
    fatPer100g: 0.4,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },

  // Plant-Based Proteins
  {
    id: 'tofu',
    name: 'Tofu',
    category: 'plant_protein',
    co2PerKg: 2.0,
    caloriesPer100g: 76,
    proteinPer100g: 8,
    fatPer100g: 4.8,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'lentils',
    name: 'Lentils',
    category: 'plant_protein',
    co2PerKg: 0.9,
    caloriesPer100g: 116,
    proteinPer100g: 9,
    fatPer100g: 0.4,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'chickpeas',
    name: 'Chickpeas',
    category: 'plant_protein',
    co2PerKg: 1.0,
    caloriesPer100g: 164,
    proteinPer100g: 8.9,
    fatPer100g: 2.6,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'black_beans',
    name: 'Black Beans',
    category: 'plant_protein',
    co2PerKg: 1.0,
    caloriesPer100g: 132,
    proteinPer100g: 8.9,
    fatPer100g: 0.5,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'peanuts',
    name: 'Peanuts',
    category: 'plant_protein',
    co2PerKg: 2.5,
    caloriesPer100g: 567,
    proteinPer100g: 26,
    fatPer100g: 49,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'almonds',
    name: 'Almonds',
    category: 'plant_protein',
    co2PerKg: 2.3,
    caloriesPer100g: 579,
    proteinPer100g: 21,
    fatPer100g: 50,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'avocado',
    name: 'Avocado',
    category: 'plant_protein',
    co2PerKg: 0.9,
    caloriesPer100g: 160,
    proteinPer100g: 2,
    fatPer100g: 15,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },

  // Grains
  {
    id: 'rice',
    name: 'Rice',
    category: 'grain',
    co2PerKg: 2.7,
    caloriesPer100g: 130,
    proteinPer100g: 2.7,
    fatPer100g: 0.3,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'wheat_bread',
    name: 'Wheat Bread',
    category: 'grain',
    co2PerKg: 1.6,
    caloriesPer100g: 265,
    proteinPer100g: 9,
    fatPer100g: 3.2,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'oats',
    name: 'Oats',
    category: 'grain',
    co2PerKg: 2.5,
    caloriesPer100g: 389,
    proteinPer100g: 17,
    fatPer100g: 6.9,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },

  // Vegetables
  {
    id: 'potatoes',
    name: 'Potatoes',
    category: 'vegetable',
    co2PerKg: 0.5,
    caloriesPer100g: 77,
    proteinPer100g: 2,
    fatPer100g: 0.1,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'tomatoes',
    name: 'Tomatoes',
    category: 'vegetable',
    co2PerKg: 0.7,
    caloriesPer100g: 18,
    proteinPer100g: 0.9,
    fatPer100g: 0.2,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    category: 'vegetable',
    co2PerKg: 0.5,
    caloriesPer100g: 34,
    proteinPer100g: 2.8,
    fatPer100g: 0.4,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  },
  {
    id: 'carrots',
    name: 'Carrots',
    category: 'vegetable',
    co2PerKg: 0.4,
    caloriesPer100g: 41,
    proteinPer100g: 0.9,
    fatPer100g: 0.2,
    source: {
      title: 'Environmental impacts of food production',
      authors: 'Poore, J., & Nemecek, T.',
      journal: 'Science',
      year: 2018,
      url: 'https://doi.org/10.1126/science.aaq0216'
    }
  }
];
