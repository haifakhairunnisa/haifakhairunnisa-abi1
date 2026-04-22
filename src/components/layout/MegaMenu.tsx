import React from 'react';
import { motion } from 'motion/react';

interface MegaMenuProps {
  isOpen: boolean;
  onNavigate?: (page: 'home' | 'shop') => void;
  onCloseComplete?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onNavigate, onCloseComplete }) => {
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0, 
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1]
      } 
    },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.03,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={containerVariants}
      className="absolute top-full left-0 w-full bg-white overflow-hidden z-40"
      onAnimationComplete={(definition) => {
        // When closing animation completes, notify parent
        if (definition === "hidden" && onCloseComplete) {
          onCloseComplete();
        }
      }}
    >
      <div className="px-6 py-12">
        <div className="grid grid-cols-5 gap-8">
          
          {/* Column 1 - Shop */}
          <div className="flex flex-col space-y-6">
            <motion.h3 variants={itemVariants} className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2">Shop</motion.h3>
            <ul className="space-y-3">
              {['Shop All', 'Holiday 25', 'Classics', 'Gift Card'].map((item) => (
                <motion.li key={item} variants={itemVariants}>
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
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Tops */}
          <div className="flex flex-col space-y-6">
            <motion.h3 variants={itemVariants} className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2">Tops</motion.h3>
            <ul className="space-y-3">
              {['Tops', 'Jackets & Fleeces', 'Knits & Shirts', 'Hoodies', 'Crewnecks', 'T-Shirts'].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Women */}
          <div className="flex flex-col space-y-6">
            <motion.h3 variants={itemVariants} className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2">Women</motion.h3>
            <ul className="space-y-3">
              {['Shop All Women', 'New Arrivals', 'Dresses', 'Tops', 'Bottoms'].map((item) => (
                 <motion.li key={item} variants={itemVariants}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Bottoms */}
          <div className="flex flex-col space-y-6">
             <motion.h3 variants={itemVariants} className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2">Bottoms</motion.h3>
            <ul className="space-y-3">
              {['Bottoms', 'Shorts', 'Pants', 'Sweatpants'].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Accessories */}
          <div className="flex flex-col space-y-6">
             <motion.h3 variants={itemVariants} className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2">Accessories</motion.h3>
            <ul className="space-y-3">
              {['Accessories', 'Hats', 'Belts', 'Bags & Wallets', 'Misc.'].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 block">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.div>
  );
};