import React, { useState } from 'react';
import { motion } from 'motion/react';

type PageType = 'home' | 'shop' | 'tops' | 'bottoms' | 'accessories' | 'product';

interface NavbarProps {
  onNavigate?: (page: PageType) => void;
  currentPage?: PageType;
  cartCount?: number;
  onCartClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'home', cartCount = 0, onCartClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if navbar should be transparent (only on home page when not expanded)
  const isTransparent = currentPage === 'home' && !isExpanded;

  // Determine text color: white on home page when transparent, black otherwise
  const textColor = isTransparent ? 'text-white' : 'text-black';

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 overflow-hidden"
      animate={{
        height: isExpanded ? 'auto' : '5rem',
        backgroundColor: isTransparent ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'
      }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="px-6 h-20 flex items-center justify-between">

        <div className="flex items-center">
          {/* Brand Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('home');
            }}
            className="text-2xl font-bold tracking-tighter mr-12 uppercase"
            animate={{
              color: isTransparent ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            ARCHIVE
          </motion.a>

          {/* Left: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <motion.button
                onClick={() => onNavigate?.('shop')}
                className={`text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity duration-200 h-full flex items-center`}
                animate={{
                  color: isTransparent ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                Shop
              </motion.button>
            </div>

            {['Lookbook', 'Stores', 'Projects'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className={`text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity duration-200 h-20 flex items-center`}
                animate={{
                  color: isTransparent ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right: Cart & Utilities */}
        <div className="flex items-center">
          <motion.button
            onClick={onCartClick}
            className="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity duration-200"
            animate={{
              color: isTransparent ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            Cart ({cartCount})
          </motion.button>
        </div>
      </div>

      {/* Expanded Shop Menu Content */}
      <motion.div
        className="px-6 pb-12"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        animate={{
          opacity: isExpanded ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="grid grid-cols-5 gap-8">

          {/* Column 1 - Shop */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2">Shop</h3>
            <ul className="space-y-3">
              {['Shop All', 'Holiday 25', 'Classics', 'Gift Card'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item === 'Shop All') {
                        onNavigate?.('shop');
                      }
                    }}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Tops */}
          <div className="flex flex-col space-y-6">
            <h3
              className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2 cursor-pointer hover:opacity-60 transition-opacity"
              onClick={() => onNavigate?.('tops')}
            >
              Tops
            </h3>
            <ul className="space-y-3">
              {['T-Shirts', 'Shirts', 'Jackets'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate?.('tops'); }}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Bottoms */}
          <div className="flex flex-col space-y-6">
            <h3
              className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2 cursor-pointer hover:opacity-60 transition-opacity"
              onClick={() => onNavigate?.('bottoms')}
            >
              Bottoms
            </h3>
            <ul className="space-y-3">
              {['Shorts', 'Long Pants'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate?.('bottoms'); }}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Accessories */}
          <div className="flex flex-col space-y-6">
            <h3
              className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2 cursor-pointer hover:opacity-60 transition-opacity"
              onClick={() => onNavigate?.('accessories')}
            >
              Accessories
            </h3>
            <ul className="space-y-3">
              {['All Accessories'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate?.('accessories'); }}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </motion.div>
    </motion.nav>
  );
};