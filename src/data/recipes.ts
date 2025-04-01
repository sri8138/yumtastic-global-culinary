
import { Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    country: 'Italian',
    cuisine: 'Italian',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      { name: 'Pizza dough', amount: '1', unit: 'pound' },
      { name: 'Tomato sauce', amount: '1/2', unit: 'cup' },
      { name: 'Fresh mozzarella', amount: '8', unit: 'oz' },
      { name: 'Fresh basil leaves', amount: '10', unit: '' },
      { name: 'Olive oil', amount: '2', unit: 'tbsp' },
      { name: 'Salt', amount: '1/2', unit: 'tsp' }
    ],
    instructions: [
      'Preheat your oven to 475°F (245°C).',
      'Roll out the pizza dough on a floured surface to your desired thickness.',
      'Spread tomato sauce evenly over the dough, leaving a small border for the crust.',
      'Tear the fresh mozzarella into pieces and distribute evenly over the sauce.',
      'Drizzle with olive oil and sprinkle with salt.',
      'Bake for 12-15 minutes until the crust is golden and the cheese is bubbly.',
      'Remove from oven and immediately top with fresh basil leaves.',
      'Let cool slightly before slicing and serving.'
    ],
    ratings: 4.8
  },
  {
    id: '2',
    title: 'Kung Pao Chicken',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    country: 'Chinese',
    cuisine: 'Sichuan',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      { name: 'Chicken breast', amount: '1', unit: 'lb' },
      { name: 'Peanuts', amount: '1/2', unit: 'cup' },
      { name: 'Dried red chilies', amount: '8', unit: '' },
      { name: 'Sichuan peppercorns', amount: '1', unit: 'tsp' },
      { name: 'Garlic', amount: '3', unit: 'cloves' },
      { name: 'Ginger', amount: '1', unit: 'inch' },
      { name: 'Green onions', amount: '4', unit: '' },
      { name: 'Soy sauce', amount: '2', unit: 'tbsp' },
      { name: 'Rice vinegar', amount: '1', unit: 'tbsp' },
      { name: 'Brown sugar', amount: '1', unit: 'tbsp' },
      { name: 'Cornstarch', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      'Cut chicken into 1-inch cubes and marinate with 1 tbsp soy sauce and 1 tsp cornstarch for 15 minutes.',
      'Mix remaining soy sauce, rice vinegar, and brown sugar in a small bowl.',
      'Heat wok over high heat and add peanuts. Stir-fry until golden and set aside.',
      'Add oil to wok, then add dried chilies and Sichuan peppercorns. Stir-fry for 30 seconds until fragrant.',
      'Add chicken and stir-fry until no longer pink, about 4-5 minutes.',
      'Add minced garlic, ginger, and white parts of green onions. Stir-fry for 1 minute.',
      'Pour in sauce mixture and stir until chicken is coated and sauce thickens.',
      'Mix in peanuts and green onion tops. Serve hot with rice.'
    ],
    ratings: 4.7
  },
  {
    id: '3',
    title: 'Authentic Guacamole',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    country: 'Mexican',
    cuisine: 'Mexican',
    prepTime: 15,
    cookTime: 0,
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      { name: 'Ripe avocados', amount: '3', unit: '' },
      { name: 'Lime', amount: '1', unit: '' },
      { name: 'Red onion', amount: '1/4', unit: 'cup' },
      { name: 'Cilantro', amount: '2', unit: 'tbsp' },
      { name: 'Jalapeño', amount: '1', unit: '' },
      { name: 'Roma tomato', amount: '1', unit: '' },
      { name: 'Garlic', amount: '1', unit: 'clove' },
      { name: 'Salt', amount: '1/2', unit: 'tsp' }
    ],
    instructions: [
      'Cut avocados in half, remove pits, and scoop into a bowl.',
      'Mash avocados with a fork until somewhat chunky.',
      'Add finely diced red onion, chopped cilantro, minced jalapeño (seeds removed for less heat), and diced tomato.',
      'Mince garlic and add to bowl.',
      'Squeeze lime juice over mixture and add salt.',
      'Gently stir to combine all ingredients.',
      'Taste and adjust seasoning as needed.',
      'Serve immediately with tortilla chips or as a side to your favorite Mexican dishes.'
    ],
    ratings: 4.9
  },
  {
    id: '4',
    title: 'Butter Chicken (Murgh Makhani)',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    country: 'Indian',
    cuisine: 'North Indian',
    prepTime: 40,
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      { name: 'Chicken thighs', amount: '1.5', unit: 'lb' },
      { name: 'Yogurt', amount: '1/2', unit: 'cup' },
      { name: 'Lemon juice', amount: '2', unit: 'tbsp' },
      { name: 'Garam masala', amount: '2', unit: 'tsp' },
      { name: 'Ground turmeric', amount: '1', unit: 'tsp' },
      { name: 'Ground cumin', amount: '1', unit: 'tsp' },
      { name: 'Ginger', amount: '2', unit: 'tbsp' },
      { name: 'Garlic', amount: '3', unit: 'cloves' },
      { name: 'Tomato puree', amount: '1.5', unit: 'cups' },
      { name: 'Heavy cream', amount: '1', unit: 'cup' },
      { name: 'Butter', amount: '2', unit: 'tbsp' },
      { name: 'Onion', amount: '1', unit: '' },
      { name: 'Fresh cilantro', amount: '1/4', unit: 'cup' }
    ],
    instructions: [
      'In a bowl, mix yogurt, lemon juice, garam masala, turmeric, cumin, and minced ginger and garlic.',
      'Cut chicken into bite-sized pieces and marinate in the yogurt mixture for at least 30 minutes, preferably overnight.',
      'Heat butter in a large skillet over medium heat. Add diced onion and cook until soft, about 3 minutes.',
      'Add marinated chicken and cook until no longer pink, about 8-10 minutes.',
      'Pour in tomato puree and bring to a simmer. Cook for about 10-15 minutes until sauce thickens.',
      'Reduce heat and stir in heavy cream. Simmer gently for 5 minutes.',
      'Adjust seasoning as needed, adding salt to taste.',
      'Garnish with fresh cilantro and serve with naan bread and basmati rice.'
    ],
    ratings: 4.8
  },
  {
    id: '5',
    title: 'Classic Sushi Rolls',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    country: 'Japanese',
    cuisine: 'Japanese',
    prepTime: 45,
    cookTime: 20,
    servings: 3,
    difficulty: 'Hard',
    ingredients: [
      { name: 'Sushi rice', amount: '2', unit: 'cups' },
      { name: 'Rice vinegar', amount: '3', unit: 'tbsp' },
      { name: 'Sugar', amount: '1', unit: 'tbsp' },
      { name: 'Salt', amount: '1', unit: 'tsp' },
      { name: 'Nori seaweed sheets', amount: '5', unit: '' },
      { name: 'Fresh salmon', amount: '1/2', unit: 'lb' },
      { name: 'Avocado', amount: '1', unit: '' },
      { name: 'Cucumber', amount: '1', unit: '' },
      { name: 'Soy sauce', amount: '', unit: 'for serving' },
      { name: 'Pickled ginger', amount: '', unit: 'for serving' },
      { name: 'Wasabi', amount: '', unit: 'for serving' }
    ],
    instructions: [
      'Rinse sushi rice until water runs clear. Cook according to package instructions.',
      'Mix rice vinegar, sugar, and salt in a small bowl until dissolved.',
      'When rice is done, transfer to a large wooden bowl and gently fold in vinegar mixture while rice is still hot.',
      'Fan the rice while mixing to help it cool and become glossy.',
      'Prepare vegetables by cutting cucumber and avocado into thin strips.',
      'Slice salmon into thin strips about 1/4 inch thick.',
      'Place a nori sheet on a bamboo sushi mat with the rough side facing up.',
      'With wet hands, spread a thin layer of rice evenly over the nori, leaving a 1-inch strip empty at the top.',
      'Arrange fillings in a line across the center of the rice.',
      'Using the bamboo mat as a guide, tightly roll the nori over the fillings, applying gentle pressure.',
      'Seal the edge with a few grains of rice or a little water.',
      'With a sharp knife, cut each roll into 6-8 pieces.',
      'Serve with soy sauce, wasabi, and pickled ginger.'
    ],
    ratings: 4.6
  }
];
