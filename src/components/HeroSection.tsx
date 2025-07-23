import React from 'react';

export default function HeroSection(): JSX.Element {
  return (
    <section className="hero-section">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hero-text">
          <h1>Authentic African & Caribbean Groceries</h1>
          <p>Fresh ingredients from home, delivered to your door across the UK</p>
          <div className="hero-features grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="feature">
              <span>🚚</span>
              <h3>Fast Delivery</h3>
              <p>Next-day delivery available</p>
            </div>
            <div className="feature">
              <span>💰</span>
              <h3>Fair Prices</h3>
              <p>Best prices guaranteed</p>
            </div>
            <div className="feature">
              <span>✨</span>
              <h3>Quality Products</h3>
              <p>Fresh, authentic ingredients</p>
            </div>
          </div>
          <div className="hero-rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span>(4.2) Google Reviews</span>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1546052516-ad0cffc51327?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHx8fDE3NTI1Mzc5NTV8MA&ixlib=rb-4.1.0&q=85" 
            alt="African Caribbean Market" 
          />
        </div>
      </div>
    </section>
  );
}