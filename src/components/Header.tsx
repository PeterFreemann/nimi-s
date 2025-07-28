import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logo from '../images/logo.jpg';
import farmproducehero from '../images/farmproducehero.jpg';
import frozenproteinshero from '../images/farmproducehero.jpg';
import drinkshero from '../images/farmproducehero.jpg';
import fruitwinehero from '../images/farmproducehero.jpg';
import snackshero from '../images/farmproducehero.jpg';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onSearch: (query: string) => void;
  selectedCategory?: string;
}

export default function Header({ currentPage, onPageChange, onSearch, selectedCategory }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, total } = useCart();
  const { user, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    onPageChange('search');
  };

  // Hero images mapping
  const heroImages = {
    'Fresh Food': farmproducehero,
    'Frozen proteins': frozenproteinshero,
    'Drinks': drinkshero,
    'Whine': fruitwinehero,
    'Snacks': snackshero,
    
  };

  // Function to get hero image for current page/category
  const getCurrentHeroImage = () => {
    if (currentPage === 'home') {
      
    }
    if (currentPage === 'category' && selectedCategory) {
      return heroImages[selectedCategory as keyof typeof heroImages];
    }
    return null;
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Fresh Farm Produce', page: 'category', category: 'Fresh Food' },
    { name: 'Frozen Proteins', page: 'category', category: 'Frozen proteins' },
    { name: 'African Soft Drinks', page: 'category', category: 'Drinks' },
    { name: 'Fruit Wine', page: 'category', category: 'Wine' },
    { name: 'Snacks', page: 'category', category: 'Snacks' },
  ];

  const currentHeroImage = getCurrentHeroImage();

  return (
    <>
      <header className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white sticky top-0 z-50 shadow-lg">
        {/* Main Header */}
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between py-4 flex-wrap gap-5">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className='flex flex-row items-center space-x-2'>
                <img src={logo} alt="" className='h-[48px] ' />
                <div className='company-name flex flex-col items-start'>
                  <h1 className="text-4xl font-black text-amber-500 drop-shadow-lg  ">
                  Nimi Store
                </h1>
                <p className='text-[10px]'>African & Caribbean Groceries</p>
                </div>
                
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <form onSubmit={handleSearch} className="flex bg-white rounded-full overflow-hidden shadow-lg">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-5 py-3 text-gray-800 text-base outline-none placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 text-xl transition-colors duration-300"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-5">
              {/* Auth Button */}
              <div className="hidden md:block">
                {user ? (
                  <div className="relative group">
                    <button className="border-2 border-amber-500 text-amber-500 px-5 py-2 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
                      Hi, {user.name}
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <button
                        onClick={() => onPageChange('account')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Account
                      </button>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => onPageChange('login')}
                    className="border-2 border-amber-500 text-amber-500 px-5 py-2 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
                  >
                    Sign In
                  </button>
                )}
              </div>

              {/* Cart Button */}
              <button
                onClick={() => onPageChange('cart')}
                className="relative bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-colors duration-300 flex items-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span className="hidden sm:block">£{total.toFixed(2)}</span>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-amber-500 text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="flex bg-white rounded-full overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-5 py-3 text-gray-800 text-base outline-none placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 text-xl transition-colors duration-300"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`border-t border-white border-opacity-20 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="max-w-6xl mx-auto px-5 py-2">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 gap-2">
              {navItems.map((item) => {
                // Fixed active state logic
                let isActive = false;
                
                if (item.category) {
                  // For category items, check if we're on category page and the selected category matches
                  isActive = currentPage === 'category' && selectedCategory === item.category;
                } else {
                  // For non-category items (like Home)
                  isActive = currentPage === item.page;
                }
                
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (item.category) {
                        onPageChange(`category-${item.category}`);
                      } else {
                        onPageChange(item.page);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left py-2 px-4 rounded-full font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-amber-400 bg-white bg-opacity-20' 
                        : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-amber-300'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              
              {/* Mobile Auth Button */}
              <div className="md:hidden mt-2 pt-2 border-t border-white border-opacity-20">
                {user ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        onPageChange('account');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-2 px-4 rounded-full font-medium text-white hover:bg-white hover:bg-opacity-10 hover:text-amber-300 transition-all duration-300"
                    >
                      My Account
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-2 px-4 rounded-full font-medium text-white hover:bg-white hover:bg-opacity-10 hover:text-amber-300 transition-all duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      onPageChange('login');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-2 px-4 rounded-full font-medium border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      {currentHeroImage && (
        <div className="relative h-64 md:h-80 overflow-hidden px-10" >
          <img 
            src={currentHeroImage} 
            alt="Category Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                {currentPage === 'home' ? 'Welcome to Nimi Store' : 
                 navItems.find(item => item.category === selectedCategory)?.name || 'Our Products'}
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                {currentPage === 'home' ? 'Fresh, Quality Products Delivered to Your Door' : 
                 'Premium quality at unbeatable prices'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}