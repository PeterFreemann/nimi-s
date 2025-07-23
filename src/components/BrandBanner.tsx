import React from 'react';
import { ShoppingBag, Clock, Heart, Award } from 'lucide-react';

export default function BrandBanner(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-green-700 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <div className="flex justify-center items-center mb-4">
            <ShoppingBag className="mr-3" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold">Join 10,000+ Happy Customers</h2>
          </div>
          <p className="text-emerald-100 text-lg mb-6">
            Experience the taste of home with our premium African & Caribbean groceries
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Clock className="mr-2" size={16} />
              <span>Order by 2PM for same-day delivery</span>
            </div>
            <div className="flex items-center">
              <Heart className="mr-2" size={16} />
              <span>Loved by families across the UK</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2" size={16} />
              <span>Trusted since 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}