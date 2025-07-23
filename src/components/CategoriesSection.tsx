import React from 'react';
import image from '../images/nimi.png'

interface Category {
  name: string;
  icon: string;
  image: string;
}

interface CategoriesSectionProps {
  onCategoryClick: (category: string) => void;
}

const categories: Category[] = [
  { name: 'Fresh Food', icon: '🥬', image: image },
  { name: 'Dry Goods', icon: '🌾', image: image },
  { name: 'Frozen', icon: '🧊', image: image },
  { name: 'Drinks', icon: '🥤', image: image },
  { name: 'Snacks', icon: '🍿', image: image },
  { name: 'Health & Beauty', icon: '💄', image: image }
];

export default function CategoriesSection({ onCategoryClick }: CategoriesSectionProps): JSX.Element {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryClick(category.name)}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-24 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">{category.icon}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-center group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}