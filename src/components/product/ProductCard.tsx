import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  name: string;
  primaryImage: string;
  secondaryImage: string;
  dropText?: string;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  primaryImage,
  secondaryImage,
  dropText,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const showSecondary = isHovered;

  return (
    <div className="group" onClick={onClick}>
      {/* Image Container */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-gray-50 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Drop Text Overlay */}
        {dropText && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] uppercase tracking-[0.15em] text-white font-medium">
              {dropText}
            </span>
          </div>
        )}

        {/* Primary Image */}
        <motion.img
          src={primaryImage}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: showSecondary ? 0 : 1,
            scale: showSecondary ? 1.05 : 1
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />

        {/* Secondary Image */}
        <motion.img
          src={secondaryImage}
          alt={`${name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: showSecondary ? 1 : 0,
            scale: showSecondary ? 1.05 : 1
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-xs uppercase tracking-[0.12em] font-medium">
          {name}
        </h3>
      </div>
    </div>
  );
};