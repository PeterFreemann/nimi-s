import { Product } from '../context/CartContext';

export const categories = [
  'Fresh Food',
  'Dry Goods', 
  'Frozen',
  'Drinks',
  'Snacks',
  'Health & Beauty',
  'Meat, Fish & Poultry',
  'Vegetables & Fresh Produce',
  'Ready Meals',
  'Pantry',
  'Bakery',
  'Beer, Wine & Spirit',
  'Ethnic Foods',
  'Household'
];

export const products: Product[] = [
  // Original products
  {
    id: '1',
    name: 'Fresh Plantain (per bunch)',
    price: 3.99,
    image: 'https://images.pexels.com/photos/2161640/pexels-photo-2161640.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Fresh Food',
    description: 'Fresh green plantains, perfect for cooking various African dishes.',
    inStock: true,
    weight: '1 bunch (approx 1kg)'
  },
  {
    id: '2',
    name: 'Palm Oil (Red Oil) 1L',
    price: 8.99,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Dry Goods',
    description: 'Authentic African red palm oil, essential for traditional cooking.',
    inStock: true,
    weight: '1 Litre'
  },
  {
    id: '3',
    name: 'Egusi Seeds Ground 500g',
    price: 12.99,
        image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',

    category: 'Dry Goods',
    description: 'Premium ground egusi seeds for authentic Nigerian soup.',
    inStock: true,
    weight: '500g'
  },
  {
    id: '4',
    name: 'Fufu Flour (Cassava) 1kg',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Dry Goods',
    description: 'High-quality cassava flour for making traditional fufu.',
    inStock: true,
    weight: '1kg'
  },
  {
    id: '5',
    name: 'Malta Guinness (Pack of 6)',
    price: 15.99,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Drinks',
    description: 'Refreshing non-alcoholic malt drink, pack of 6 bottles.',
    inStock: true,
    weight: '6 x 330ml'
  },
  {
    id: '6',
    name: 'Frozen Goat Meat 1kg',
    price: 18.99,
    image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Frozen',
    description: 'Premium frozen goat meat, perfect for pepper soup and stews.',
    inStock: true,
    weight: '1kg'
  },
  {
    id: '7',
    name: 'Plantain Chips (Sweet) 150g',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Snacks',
    description: 'Crispy sweet plantain chips, a delicious African snack.',
    inStock: true,
    weight: '150g'
  },
  {
    id: '8',
    name: 'Shea Butter Pure 200ml',
    price: 9.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Health & Beauty',
    description: 'Pure African shea butter for skin and hair care.',
    inStock: true,
    weight: '200ml'
  },
  {
    id: '9',
    name: 'Scotch Bonnet Peppers 100g',
    price: 3.49,
    image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Fresh Food',
    description: 'Fresh scotch bonnet peppers for authentic Caribbean heat.',
    inStock: true,
    weight: '100g'
  },
  {
    id: '10',
    name: 'Cassava Leaves Frozen 500g',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Frozen',
    description: 'Frozen cassava leaves for traditional West African dishes.',
    inStock: true,
    weight: '500g'
  },
  {
    id: '11',
    name: 'Yam Tuber (Large)',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Fresh Food',
    description: 'Large fresh yam tuber, perfect for pounding or boiling.',
    inStock: true,
    weight: 'Approx 2-3kg'
  },
  {
    id: '12',
    name: 'Maggi Seasoning Cubes 50pk',
    price: 5.99,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Dry Goods',
    description: 'Essential seasoning cubes for African and Caribbean cooking.',
    inStock: true,
    weight: '50 cubes'
  },

  // ETHNIC FOODS - Additional products
  {
    id: '13',
    name: 'Jollof Rice Seasoning Mix 100g',
    price: 4.49,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Ethnic Foods',
    description: 'Authentic West African jollof rice seasoning blend.',
    inStock: true,
    weight: '100g'
  },
  {
    id: '14',
    name: 'Curry Goat Seasoning 150g',
    price: 6.99,
        image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',

    category: 'Ethnic Foods',
    description: 'Traditional Caribbean curry goat spice blend.',
    inStock: true,
    weight: '150g'
  },
  {
    id: '15',
    name: 'Tamarind Paste 250g',
    price: 5.99,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Ethnic Foods',
    description: 'Pure tamarind paste for authentic African and Caribbean dishes.',
    inStock: true,
    weight: '250g'
  },
  {
    id: '16',
    name: 'Plantain Flour 1kg',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Ethnic Foods',
    description: 'Premium plantain flour for traditional West African recipes.',
    inStock: true,
    weight: '1kg'
  },
  {
    id: '17',
    name: 'Ogbono Seeds Ground 300g',
    price: 14.99,
        image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',

    category: 'Ethnic Foods',
    description: 'Ground ogbono (wild mango) seeds for traditional Nigerian soup.',
    inStock: true,
    weight: '300g'
  },
  {
    id: '18',
    name: 'African Pepper Soup Spice 100g',
    price: 7.49,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Ethnic Foods',
    description: 'Traditional African pepper soup spice mix.',
    inStock: true,
    weight: '100g'
  },
  {
    id: '19',
    name: 'Locust Beans (Iru) 200g',
    price: 9.99,
        image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',

    category: 'Ethnic Foods',
    description: 'Fermented locust beans for authentic Nigerian flavoring.',
    inStock: true,
    weight: '200g'
  },
  {
    id: '20',
    name: 'Coconut Milk Powder 400g',
    price: 6.49,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Ethnic Foods',
    description: 'Pure coconut milk powder for Caribbean and African cooking.',
    inStock: true,
    weight: '400g'
  },

  // MEAT, FISH & POULTRY - Additional products
  {
    id: '21',
    name: 'Fresh Tilapia Fish (Whole) 1kg',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Fresh whole tilapia fish, cleaned and scaled.',
    inStock: true,
    weight: '1kg'
  },
  {
    id: '22',
    name: 'Frozen Chicken Wings 2kg',
    price: 14.99,
    image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Premium frozen chicken wings, perfect for grilling.',
    inStock: true,
    weight: '2kg'
  },
  {
    id: '23',
    name: 'Smoked Fish (Mackerel) 500g',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Traditional smoked mackerel fish for African dishes.',
    inStock: true,
    weight: '500g'
  },
  {
    id: '24',
    name: 'Beef Short Ribs 1.5kg',
    price: 22.99,
    image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Fresh beef short ribs, perfect for stews and soups.',
    inStock: true,
    weight: '1.5kg'
  },
  {
    id: '25',
    name: 'Dried Fish (Stockfish) 300g',
    price: 18.99,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Premium dried stockfish for traditional Nigerian cooking.',
    inStock: true,
    weight: '300g'
  },
  {
    id: '26',
    name: 'Free Range Chicken (Whole) 2kg',
    price: 19.99,
    image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Fresh free-range whole chicken, hormone-free.',
    inStock: true,
    weight: '2kg'
  },
  {
    id: '27',
    name: 'Prawns (Large) Frozen 1kg',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Large frozen prawns, peeled and deveined.',
    inStock: true,
    weight: '1kg'
  },
  {
    id: '28',
    name: 'Lamb Shoulder 1.5kg',
    price: 28.99,
    image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Meat, Fish & Poultry',
    description: 'Fresh lamb shoulder, perfect for slow cooking.',
    inStock: true,
    weight: '1.5kg'
  },

  // BEAUTY & HOUSEHOLD - Additional products
  {
    id: '29',
    name: 'African Black Soap 250g',
    price: 7.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Health & Beauty',
    description: 'Pure African black soap for natural skin cleansing.',
    inStock: true,
    weight: '250g'
  },
  {
    id: '30',
    name: 'Coconut Oil Hair Treatment 300ml',
    price: 8.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Health & Beauty',
    description: 'Pure coconut oil for hair and skin treatment.',
    inStock: true,
    weight: '300ml'
  },
  {
    id: '31',
    name: 'Cocoa Butter Lotion 500ml',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Health & Beauty',
    description: 'Rich cocoa butter body lotion for moisturizing.',
    inStock: true,
    weight: '500ml'
  },
  {
    id: '32',
    name: 'All-Purpose Cleaner 1L',
    price: 5.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Household',
    description: 'Multi-surface all-purpose household cleaner.',
    inStock: true,
    weight: '1L'
  },
  {
    id: '33',
    name: 'Dishwashing Liquid 750ml',
    price: 3.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Household',
    description: 'Concentrated dishwashing liquid with lemon scent.',
    inStock: true,
    weight: '750ml'
  },
  {
    id: '34',
    name: 'Laundry Detergent Powder 2kg',
    price: 11.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Household',
    description: 'High-efficiency laundry detergent powder.',
    inStock: true,
    weight: '2kg'
  },
  {
    id: '35',
    name: 'Argan Oil Hair Serum 100ml',
    price: 15.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Health & Beauty',
    description: 'Pure argan oil serum for hair nourishment.',
    inStock: true,
    weight: '100ml'
  },
  {
    id: '36',
    name: 'Toilet Paper (24 Pack)',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Household',
    description: 'Soft and strong toilet paper, 24-roll pack.',
    inStock: true,
    weight: '24 rolls'
  },

  // Additional general grocery items
  {
    id: '37',
    name: 'Basmati Rice 5kg',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1339868/pexels-photo-1339868.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',

    category: 'Dry Goods',
    description: 'Premium long-grain basmati rice.',
    inStock: true,
    weight: '5kg'
  },
  {
    id: '38',
    name: 'Ginger Root Fresh 500g',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Vegetables & Fresh Produce',
    description: 'Fresh ginger root for cooking and health benefits.',
    inStock: true,
    weight: '500g'
  },
  {
    id: '39',
    name: 'Green Beans Fresh 1kg',
    price: 5.49,
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Vegetables & Fresh Produce',
    description: 'Fresh green beans, perfect for stir-fries.',
    inStock: true,
    weight: '1kg'
  },
  {
    id: '40',
    name: 'Milo Chocolate Drink 400g',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    category: 'Drinks',
    description: 'Popular chocolate malt drink powder.',
    inStock: true,
    weight: '400g'
  }
];

// Updated product arrays for homepage sections
export const groceriesProducts = products.filter(product => 
  ['Fresh Food', 'Dry Goods', 'Frozen', 'Drinks', 'Snacks', 'Vegetables & Fresh Produce'].includes(product.category)
);

export const ethnicFoodsProducts = products.filter(product => 
  product.category === 'Ethnic Foods'
);

export const meatFishProducts = products.filter(product => 
  product.category === 'Meat, Fish & Poultry'
);

export const beautyHouseholdProducts = products.filter(product => 
  ['Health & Beauty', 'Household'].includes(product.category)
);

// Keep original arrays for backward compatibility
export const featuredProducts = products.slice(0, 10);
export const newArrivals = products.slice(10, 20);