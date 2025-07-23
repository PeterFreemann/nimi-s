import React from 'react';
import market from '../images/market.jpg';

interface PromotionalAdProps {
  onCategoryClick: (category: string) => void;
}

export default function PromotionalAd({ onCategoryClick }: PromotionalAdProps): JSX.Element {
  return (
    <section className="py-8 bg-orange-50" style={{ minHeight: '570px' }}>
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-[500px]">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-yellow-400 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  LIMITED TIME OFFER
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Free delivery on orders over £25
                </h3>
                <p className="text-orange-100 text-lg">
                  Stock up on your favorite African & Caribbean essentials
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => onCategoryClick('all')}
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </button>
                <span className="text-orange-200 text-sm">*Valid until end of month</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={market}
                alt="African Caribbean Groceries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}