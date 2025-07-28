import React, { useState } from 'react';
import { Product } from '../context/CartContext';

interface CombinedCategorySectionProps {
  ethnicFoodsProducts: Product[];
  meatFishProducts: Product[];
  beautyHouseholdProducts: Product[];
  onProductClick: (product: Product) => void;
  onCategoryClick: (category: string) => void;
  onViewClick: (product: Product) => void;
}

const categories = [
  {
    id: 'ethnic',
    name: 'Ethnic Foods',
    icon: '🌍',
    description: 'Traditional spices and ingredients'
  },
  {
    id: 'meat',
    name: 'Fish, Meat and Poultry',
    icon: '🐟',
    description: 'Fresh and Frozen proteins proteins'
  },
  {
    id: 'beauty',
    name: 'Beauty and Household',
    icon: '🧴',
    description: 'Personal care and home essentials'
  }
];

export default function CombinedCategorySection({ 
  ethnicFoodsProducts, 
  meatFishProducts, 
  beautyHouseholdProducts,
  onProductClick,
  onCategoryClick,
  onViewClick
}: CombinedCategorySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('ethnic');

  const getProductsForCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'ethnic':
        return ethnicFoodsProducts;
      case 'meat':
        return meatFishProducts;
      case 'beauty':
        return beautyHouseholdProducts;
      default:
        return ethnicFoodsProducts;
    }
  };

  const selectedProducts = getProductsForCategory(selectedCategory);
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-start mb-12">Specialty Categories</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Grid - Category Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Categories</h3>
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedCategory === category.id
                        ? 'border-emerald-500 bg-emerald-50 shadow-md'
                        : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <div className={`font-semibold ${
                          selectedCategory === category.id ? 'text-emerald-700' : 'text-gray-800'
                        }`}>
                          {category.name}
                        </div>
                        <div className="text-sm text-gray-600">{category.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Grid - Product Display */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedCategoryData?.name}
                </h3>
                <button
                  onClick={() => onCategoryClick(selectedCategoryData?.name || '')}
                  className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  View All →
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-emerald-600">
                          £{product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">{product.weight}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => onProductClick(product)}
                          disabled={!product.inStock}
                          className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <button
                          onClick={() => onViewClick(product)}
                          className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🛒</div>
                  <p className="text-gray-600">No products available in this category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}