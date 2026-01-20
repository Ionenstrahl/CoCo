// ABOUTME: Food database containing CO2 emissions and nutritional data for common foods
// ABOUTME: Each food includes source citations for scientific transparency

const foods = [
  // Animal Products - Meat
  {
    id: 'beef',
    name: 'Beef',
    category: 'animal',
    co2PerKg: 13.6,
    caloriesPer100g: 250,
    proteinPer100g: 26,
    fatPer100g: 15,
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
    caloriesPer100g: 250,
    proteinPer100g: 26,
    fatPer100g: 15,
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
    name: 'Beef Patty (Frozen)',
    category: 'animal',
    co2PerKg: 9.0,
    caloriesPer100g: 250,
    proteinPer100g: 20,
    fatPer100g: 20,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
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
    co2PerKg: 5.5,
    caloriesPer100g: 165,
    proteinPer100g: 31,
    fatPer100g: 3.6,
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
    name: 'Fish (Aquaculture)',
    category: 'animal',
    co2PerKg: 5.1,
    caloriesPer100g: 206,
    proteinPer100g: 20,
    fatPer100g: 13,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
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
    co2PerKg: 5.7,
    caloriesPer100g: 402,
    proteinPer100g: 25,
    fatPer100g: 33,
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
    caloriesPer100g: 61,
    proteinPer100g: 3.2,
    fatPer100g: 3.3,
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
    caloriesPer100g: 155,
    proteinPer100g: 13,
    fatPer100g: 11,
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
    caloriesPer100g: 59,
    proteinPer100g: 10,
    fatPer100g: 0.4,
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
    caloriesPer100g: 159,
    proteinPer100g: 11,
    fatPer100g: 11,
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
    name: 'Lentils (Dried)',
    category: 'plant_protein',
    co2PerKg: 1.2,
    caloriesPer100g: 116,
    proteinPer100g: 9,
    fatPer100g: 0.4,
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
    name: 'Chickpeas (Canned)',
    category: 'plant_protein',
    co2PerKg: 1.3,
    caloriesPer100g: 164,
    proteinPer100g: 8.9,
    fatPer100g: 2.6,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
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
    co2PerKg: 0.6,
    caloriesPer100g: 160,
    proteinPer100g: 2,
    fatPer100g: 15,
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
    name: 'Walnuts (in Shell)',
    category: 'plant_protein',
    co2PerKg: 0.9,
    caloriesPer100g: 654,
    proteinPer100g: 15,
    fatPer100g: 65,
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
    fatPer100g: 10,
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
    caloriesPer100g: 200,
    proteinPer100g: 18,
    fatPer100g: 9,
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
    proteinPer100g: 1.3,
    fatPer100g: 1.5,
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
    caloriesPer100g: 54,
    proteinPer100g: 3.3,
    fatPer100g: 1.8,
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
    fatPer100g: 0.3,
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
    name: 'Mixed Bread',
    category: 'grain',
    co2PerKg: 0.6,
    caloriesPer100g: 265,
    proteinPer100g: 9,
    fatPer100g: 3.2,
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
    caloriesPer100g: 131,
    proteinPer100g: 5,
    fatPer100g: 0.9,
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
    co2PerKg: 0.2,
    caloriesPer100g: 77,
    proteinPer100g: 2,
    fatPer100g: 0.1,
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
    proteinPer100g: 2.8,
    fatPer100g: 0.4,
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
    caloriesPer100g: 41,
    proteinPer100g: 0.9,
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.3,
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
    fatPer100g: 0.3,
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
    fatPer100g: 0.3,
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
    caloriesPer100g: 15,
    proteinPer100g: 0.7,
    fatPer100g: 0.1,
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
    caloriesPer100g: 17,
    proteinPer100g: 1.2,
    fatPer100g: 0.3,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.1,
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
    name: 'Peas (Fresh, in Pods)',
    category: 'vegetable',
    co2PerKg: 0.4,
    caloriesPer100g: 81,
    proteinPer100g: 5,
    fatPer100g: 0.4,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'olive_oil',
    name: 'Olive Oil',
    category: 'vegetable',
    co2PerKg: 3.2,
    caloriesPer100g: 884,
    proteinPer100g: 0,
    fatPer100g: 100,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
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
    fatPer100g: 0.2,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  },
  {
    id: 'tomato_paste',
    name: 'Tomato Paste',
    category: 'tomatoes',
    co2PerKg: 4.3,
    caloriesPer100g: 82,
    proteinPer100g: 4.3,
    fatPer100g: 0.5,
    source: {
      title: 'Ökologische Fußabdrücke von Lebensmitteln und Gerichten in Deutschland',
      authors: 'Reinhardt, G., Gärtner, S., & Wagner, T.',
      journal: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg',
      year: 2020,
      url: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf'
    }
  }
];
