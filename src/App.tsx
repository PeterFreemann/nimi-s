import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import SearchPage from './components/SearchPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import LoginPage from './components/LoginPage';
import AccountPage from './components/AccountPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';
import { Product } from './context/CartContext';
import { products } from './data/products';

type Page = 'home' | 'category' | 'product' | 'search' | 'cart' | 'checkout' | 'login' | 'account' | 'order-confirmation';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handlePageChange = (page: string) => {
    if (page.startsWith('category-')) {
      const category = page.replace('category-', '');
      setSelectedCategory(category);
      setCurrentPage('category');
    } else {
      setCurrentPage(page as Page);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('search');
  };

  const handleBackToProducts = () => {
    if (selectedCategory) {
      setCurrentPage('category');
    } else {
      setCurrentPage('home');
    }
  };

  const handleLoginSuccess = () => {
    setCurrentPage('home');
  };

  const handleOrderComplete = () => {
    setCurrentPage('order-confirmation');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onProductClick={handleProductClick}
            onCategoryClick={handleCategoryClick}
          />
        );
      case 'category':
        return (
          <CategoryPage
            category={selectedCategory}
            onProductClick={handleProductClick}
          />
        );
      case 'product':
        return selectedProduct ? (
          <ProductPage
            product={selectedProduct}
            onBackClick={handleBackToProducts}
            onProductClick={handleProductClick} // Make sure this is passed!
          />
        ) : (
          <HomePage
            onProductClick={handleProductClick}
            onCategoryClick={handleCategoryClick}
          />
        );
      case 'search':
        return (
          <SearchPage
            searchQuery={searchQuery}
            onProductClick={handleProductClick}
          />
        );
      case 'cart':
        return (
          <CartPage
            onCheckoutClick={() => setCurrentPage('checkout')}
            onContinueShoppingClick={() => setCurrentPage('home')}
          />
        );
      case 'checkout':
        return <CheckoutPage onOrderComplete={handleOrderComplete} />;
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'account':
        return <AccountPage />;
      case 'order-confirmation':
        return (
          <OrderConfirmationPage
            onContinueShoppingClick={() => setCurrentPage('home')}
          />
        );
      default:
        return (
          <HomePage
            onProductClick={handleProductClick}
            onCategoryClick={handleCategoryClick}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            currentPage={currentPage}
            onPageChange={handlePageChange}  
            onSearch={handleSearch}
            selectedCategory={selectedCategory} // Add this prop
          />
          <main>{renderCurrentPage()}</main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;