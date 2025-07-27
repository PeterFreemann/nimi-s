import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-green-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="mb-4">Get the latest offers and product updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-amber-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <h1 className="text-4xl font-black text-amber-500 drop-shadow-lg mb-1">
                  Nimi's Store
                </h1>
                <p className="text-sm text-green-100 font-medium">
                  African & Caribbean Groceries
                </p>
              </div>
              <p className="text-green-100 mb-4">
                The UK's premier destination for authentic African and Caribbean groceries, 
                bringing you the finest ingredients from home.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="text-green-200 hover:text-white cursor-pointer" />
                <Instagram size={20} className="text-green-200 hover:text-white cursor-pointer" />
                <Twitter size={20} className="text-green-200 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Delivery & Returns</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Track Your Order</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Fresh Farm Produce</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Dry Goods</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Frozen Proteins </a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">African Soft Drinks</a></li>
                {/* <li><a href="#" className="text-green-100 hover:text-white transition-colors">Health & Beauty</a></li> */}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-amber-500" />
                  <span className="text-green-100 text-sm">
                    Unit 6F S10 Morelands Trading Estate, GL1 5SA
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-amber-500" />
                  <span className="text-green-100 text-sm">07563007938</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-amber-500" />
                  <span className="text-green-100 text-sm">Nimistores2025@gmail.com</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2">We Accept</h5>
                <div className="flex space-x-2">
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-xs font-bold text-gray-900">VISA</span>
                  </div>
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-xs font-bold text-gray-900">MC</span>
                  </div>
                  {/* <div className="bg-white rounded px-2 py-1">
                    <span className="text-xs font-bold text-blue-600">PayPal</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-sm">
              © 2025 Nimi's Store. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}