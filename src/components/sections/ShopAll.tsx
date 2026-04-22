import React, { useState } from 'react';
import { ProductCard } from '../product/ProductCard';
import { Grid3x3, Grid2x2 } from 'lucide-react';
import { motion } from 'motion/react';

// Product type definition
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  primaryImage: string;
  secondaryImage: string;
  dropText?: string;
}

// Mock product data with categories and prices
const products: Product[] = [
  {
    id: 1,
    name: 'URBAN BACKPACK',
    category: 'Accessories',
    price: 129,
    primaryImage: 'https://images.unsplash.com/photo-1665832102899-2b3f12cf991e?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1574788516190-3d7396549f3f?w=800',
    dropText: 'DROPPING SAT 01PM EST'
  },
  {
    id: 2,
    name: 'CANVAS TOTE',
    category: 'Accessories',
    price: 79,
    primaryImage: 'https://images.unsplash.com/photo-1758505805301-77805195fdb9?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1618249807726-2f381c277de1?w=800',
  },
  {
    id: 3,
    name: 'TRAVEL SET',
    category: 'Accessories',
    price: 199,
    primaryImage: 'https://images.unsplash.com/photo-1636573785224-d9bbe74e1fdf?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1683394305929-5e7c8d942127?w=800',
    dropText: 'DROPPING SAT 01PM EST'
  },
  {
    id: 4,
    name: 'MINIMAL SHOULDER BAG',
    category: 'Accessories',
    price: 89,
    primaryImage: 'https://images.unsplash.com/photo-1571254165288-99dd71f0e352?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1562423356-ab9206c6a31f?w=800',
  },
  {
    id: 5,
    name: 'MESSENGER BAG',
    category: 'Accessories',
    price: 109,
    primaryImage: 'https://images.unsplash.com/photo-1602064493605-8c715aa4deeb?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1535120927584-0230f40fc1e2?w=800',
    dropText: 'DROPPING SAT 01PM EST'
  },
  {
    id: 6,
    name: 'CROSSBODY PACK',
    category: 'Accessories',
    price: 75,
    primaryImage: 'https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1761646238176-b480909e6ba6?w=800',
  },
  {
    id: 7,
    name: 'DESIGNER TOTE',
    category: 'Accessories',
    price: 159,
    primaryImage: 'https://images.unsplash.com/photo-1553845757-677a58d78127?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1686512486767-af943c43399e?w=800',
    dropText: 'DROPPING SAT 01PM EST'
  },
  {
    id: 8,
    name: 'URBAN PACK II',
    category: 'Accessories',
    price: 139,
    primaryImage: 'https://images.unsplash.com/photo-1665832904109-18be7a452f29?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1665832102899-2b3f12cf991e?w=800',
  },
  {
    id: 9,
    name: 'LEATHER TOTE',
    category: 'Accessories',
    price: 189,
    primaryImage: 'https://images.unsplash.com/photo-1758505805301-77805195fdb9?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1535120927584-0230f40fc1e2?w=800',
  },
  {
    id: 10,
    name: 'WEEKENDER DUFFLE',
    category: 'Accessories',
    price: 229,
    primaryImage: 'https://images.unsplash.com/photo-1683394305929-5e7c8d942127?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1636573785224-d9bbe74e1fdf?w=800',
    dropText: 'DROPPING SAT 01PM EST'
  },
  {
    id: 11,
    name: 'MINIMALIST PACK',
    category: 'Accessories',
    price: 99,
    primaryImage: 'https://images.unsplash.com/photo-1618249807726-2f381c277de1?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1574788516190-3d7396549f3f?w=800',
  },
  {
    id: 12,
    name: 'STRUCTURED BAG',
    category: 'Accessories',
    price: 169,
    primaryImage: 'https://images.unsplash.com/photo-1686512486767-af943c43399e?w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1553845757-677a58d78127?w=800',
    dropText: 'DROPPING SAT 01PM EST'
  }
];

interface ShopAllProps {
  onNavigate?: (page: 'tops' | 'bottoms' | 'accessories') => void;
  onProductClick?: (product: Product) => void;
}

export const ShopAll: React.FC<ShopAllProps> = ({ onNavigate, onProductClick }) => {
  const [gridDensity, setGridDensity] = useState<3 | 4>(4);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <div className="border-b border-gray-200">
        <div className="pl-6 pr-6 pt-12 pb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight font-medium">
            Shop All
          </h1>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b border-gray-200">
        <div className="pl-6 pr-6 py-6">
          <nav className="flex gap-8">
            {(['TOPS', 'BOTTOMS', 'ACCESSORIES'] as const).map((category) => (
              <button
                key={category}
                onClick={() => onNavigate?.(category.toLowerCase() as 'tops' | 'bottoms' | 'accessories')}
                className="text-[11px] uppercase tracking-[0.15em] text-gray-400 hover:text-black transition-colors"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Product Count Bar */}
      <div className="border-b border-gray-200">
        <div className="pl-6 pr-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-500">
              {products.length} products
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setGridDensity(3)}
                className={`transition-opacity ${gridDensity === 3 ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
              >
                <Grid2x2 size={14} />
              </button>
              <button
                onClick={() => setGridDensity(4)}
                className={`transition-opacity ${gridDensity === 4 ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
              >
                <Grid3x3 size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-3 py-12">
        <motion.div
          layout
          className={`grid gap-x-3 gap-y-16 ${gridDensity === 4
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ProductCard
                name={product.name}
                primaryImage={product.primaryImage}
                secondaryImage={product.secondaryImage}
                dropText={product.dropText}
                onClick={() => onProductClick?.(product)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};