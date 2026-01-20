// ABOUTME: Food database containing CO2 emissions and nutritional data for common foods
// ABOUTME: Each food includes source citations for scientific transparency

const foods = [
  // Animal Products - Meat
  {
    id: 'beef',
    name: 'Beef',
    category: 'animal',
    co2PerKg: 13.6,
    caloriesPer100g: 140,
    proteinPer100g: 23,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'beef_organic',
    name: 'Beef (Organic)',
    category: 'animal',
    co2PerKg: 21.7,
    caloriesPer100g: 140,
    proteinPer100g: 23,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'beef_patty_frozen',
    name: 'Beef Patty',
    category: 'animal',
    co2PerKg: 9.0,
    caloriesPer100g: 250,
    proteinPer100g: 18,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'chicken',
    name: 'Chicken',
    category: 'animal',
    co2PerKg: 5.5,
    caloriesPer100g: 165,
    proteinPer100g: 31,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },

  // Animal Products - Fish
  {
    id: 'salmon_farmed',
    name: 'Fish',
    category: 'animal',
    co2PerKg: 5.1,
    caloriesPer100g: 206,
    proteinPer100g: 20,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },

  // Animal Products - Dairy
  {
    id: 'cheese',
    name: 'Cheese',
    category: 'animal',
    co2PerKg: 5.7,
    caloriesPer100g: 402,
    proteinPer100g: 25,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'milk',
    name: 'Milk',
    category: 'animal',
    co2PerKg: 1.4,
    caloriesPer100g: 65,
    proteinPer100g: 3.4,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'eggs',
    name: 'Eggs',
    category: 'animal',
    co2PerKg: 3.0,
    caloriesPer100g: 145,
    proteinPer100g: 13,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'yogurt',
    name: 'Yogurt',
    category: 'animal',
    co2PerKg: 1.7,
    caloriesPer100g: 70,
    proteinPer100g: 3.7,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'quark',
    name: 'Quark (40% Fat)',
    category: 'animal',
    co2PerKg: 3.3,
    caloriesPer100g: 99,
    proteinPer100g: 11,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },

  // Plant-Based Proteins
  {
    id: 'lentils',
    name: 'Lentils',
    category: 'plant_protein',
    co2PerKg: 1.7,
    caloriesPer100g: 116,
    proteinPer100g: 9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'chickpeas',
    name: 'Chickpeas',
    category: 'plant_protein',
    co2PerKg: 1.3,
    caloriesPer100g: 137,
    proteinPer100g: 8.9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'avocado',
    name: 'Avocado',
    category: 'plant_protein',
    co2PerKg: 0.6,
    caloriesPer100g: 160,
    proteinPer100g: 2,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    category: 'plant_protein',
    co2PerKg: 0.9,
    caloriesPer100g: 654,
    proteinPer100g: 15,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'veggie_burger_soy',
    name: 'Veggie Burger (Soy)',
    category: 'plant_protein',
    co2PerKg: 1.1,
    caloriesPer100g: 200,
    proteinPer100g: 16,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'veggie_burger_pea',
    name: 'Veggie Burger (Pea)',
    category: 'plant_protein',
    co2PerKg: 1.8,
    caloriesPer100g: 191,
    proteinPer100g: 14,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'oat_milk',
    name: 'Oat Milk',
    category: 'plant_protein',
    co2PerKg: 0.3,
    caloriesPer100g: 47,
    proteinPer100g: 0.8,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'soy_milk',
    name: 'Soy Milk',
    category: 'plant_protein',
    co2PerKg: 0.4,
    caloriesPer100g: 39,
    proteinPer100g: 2.7,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },

  // Grains
  {
    id: 'rice',
    name: 'Rice',
    category: 'grain',
    co2PerKg: 3.1,
    caloriesPer100g: 130,
    proteinPer100g: 2.7,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'wheat_bread',
    name: 'Bread',
    category: 'grain',
    co2PerKg: 0.6,
    caloriesPer100g: 255,
    proteinPer100g: 8,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'pasta',
    name: 'Pasta',
    category: 'grain',
    co2PerKg: 0.7,
    caloriesPer100g: 151,
    proteinPer100g: 5,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'oats',
    name: 'Oats',
    category: 'grain',
    co2PerKg: 0.6,
    caloriesPer100g: 369,
    proteinPer100g: 13,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },

  // Vegetables
  {
    id: 'potatoes',
    name: 'Potatoes',
    category: 'vegetable',
    co2PerKg: 0.2,
    caloriesPer100g: 73,
    proteinPer100g: 2,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    category: 'vegetable',
    co2PerKg: 0.3,
    caloriesPer100g: 34,
    proteinPer100g: 3.7,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'carrots',
    name: 'Carrots',
    category: 'vegetable',
    co2PerKg: 0.1,
    caloriesPer100g: 29,
    proteinPer100g: 0.9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'apples',
    name: 'Apples',
    category: 'vegetable',
    co2PerKg: 0.3,
    caloriesPer100g: 52,
    proteinPer100g: 0.3,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'bananas',
    name: 'Bananas',
    category: 'vegetable',
    co2PerKg: 0.6,
    caloriesPer100g: 89,
    proteinPer100g: 1.1,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'bell_peppers',
    name: 'Bell Peppers',
    category: 'vegetable',
    co2PerKg: 0.6,
    caloriesPer100g: 31,
    proteinPer100g: 1,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'mushrooms',
    name: 'Mushrooms',
    category: 'vegetable',
    co2PerKg: 1.3,
    caloriesPer100g: 22,
    proteinPer100g: 3.1,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    category: 'vegetable',
    co2PerKg: 0.4,
    caloriesPer100g: 12,
    proteinPer100g: 0.7,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'zucchini',
    name: 'Zucchini',
    category: 'vegetable',
    co2PerKg: 0.2,
    caloriesPer100g: 19,
    proteinPer100g: 1.6,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'eggplant',
    name: 'Eggplant',
    category: 'vegetable',
    co2PerKg: 0.2,
    caloriesPer100g: 25,
    proteinPer100g: 1,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'pear',
    name: 'Pear',
    category: 'vegetable',
    co2PerKg: 0.3,
    caloriesPer100g: 57,
    proteinPer100g: 0.4,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'peas_fresh',
    name: 'Peas',
    category: 'vegetable',
    co2PerKg: 0.4,
    caloriesPer100g: 81,
    proteinPer100g: 6.1,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },

  // Tomatoes
  {
    id: 'tomatoes_fresh_avg',
    name: 'Tomatoes (Average)',
    category: 'tomatoes',
    co2PerKg: 0.8,
    caloriesPer100g: 18,
    proteinPer100g: 0.9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomatoes_de_seasonal',
    name: 'Tomatoes (Germany, Seasonal)',
    category: 'tomatoes',
    co2PerKg: 0.3,
    caloriesPer100g: 18,
    proteinPer100g: 0.9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomatoes_south_europe',
    name: 'Tomatoes (Southern Europe)',
    category: 'tomatoes',
    co2PerKg: 0.4,
    caloriesPer100g: 18,
    proteinPer100g: 0.9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomatoes_organic',
    name: 'Tomatoes (Organic)',
    category: 'tomatoes',
    co2PerKg: 1.1,
    caloriesPer100g: 18,
    proteinPer100g: 0.9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomatoes_de_greenhouse_winter',
    name: 'Tomatoes (Germany, Heated Greenhouse)',
    category: 'tomatoes',
    co2PerKg: 2.9,
    caloriesPer100g: 18,
    proteinPer100g: 0.9,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomatoes_passata_carton',
    name: 'Tomato Passata (Carton)',
    category: 'tomatoes',
    co2PerKg: 1.6,
    caloriesPer100g: 28,
    proteinPer100g: 1.3,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomatoes_passata_can',
    name: 'Tomato Passata (Can)',
    category: 'tomatoes',
    co2PerKg: 1.8,
    caloriesPer100g: 28,
    proteinPer100g: 1.3,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomatoes_passata_jar',
    name: 'Tomato Passata (Jar)',
    category: 'tomatoes',
    co2PerKg: 1.9,
    caloriesPer100g: 28,
    proteinPer100g: 1.3,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
];
