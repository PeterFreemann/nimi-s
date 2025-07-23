import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../context/CartContext';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  onCategoryClick: (category: string) => void;
  onViewClick: (product: Product) => void;
  autoScrollInterval?: number;
}

export default function ProductCarousel({ 
  title, 
  products, 
  onProductClick, 
  onCategoryClick,
  onViewClick,
  autoScrollInterval = 800 // Changed from 1500ms to 800ms for faster scrolling
}: ProductCarouselProps): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto scroll effect
  useEffect(() => {
    const scrollProducts = () => {
      if (!scrollRef.current || isHovering) return;
      
      const container = scrollRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      if (scrollWidth > clientWidth) {
        const currentScroll = container.scrollLeft;
        const cardWidth = 320; // Approximate width of a product card including margin
        
        if (currentScroll >= scrollWidth - clientWidth - 10) {
          // Reset to beginning
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to next card
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    };

    const timer = setInterval(scrollProducts, autoScrollInterval);
    return () => clearInterval(timer);
  }, [isHovering, autoScrollInterval]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <button
            onClick={() => onCategoryClick('all')}
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            View All →
          </button>
        </div>
        <div className="relative group">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-none w-80">
                <ProductCard
                  product={product}
                  onProductClick={onProductClick}
                  onViewClick={onViewClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}