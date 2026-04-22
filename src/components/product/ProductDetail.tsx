import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// Product type for dynamic data
interface ProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  primaryImage: string;
  secondaryImage: string;
  dropText?: string;
}

const defaultImages = [
  'https://images.unsplash.com/photo-1639270601211-9265bafae0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'https://images.unsplash.com/photo-1698682147168-11f624a540f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'https://images.unsplash.com/photo-1632621525252-26ed288b4352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'https://images.unsplash.com/photo-1607218421815-2f542eef2710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
];

const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'Olive', value: '#8B7355' },
  { name: 'Charcoal', value: '#3a3a3a' }
];

const sizes = ['XSmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'];

interface ProductDetailProps {
  onBack?: () => void;
  product?: ProductData;
  onAddToCart?: (product: ProductData, size: string, color: string) => void;
}

// Custom Accordion Component - opens one at a time, content expands upward
const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-t border-neutral-200">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 text-sm text-left hover:opacity-70 transition-opacity"
    >
      <span>{title}</span>
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-4 text-sm text-neutral-600 leading-relaxed">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const ProductDetail = ({ onBack, product, onAddToCart }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Use product data if provided, otherwise use defaults
  const productName = product?.name || 'Quilted Ripstop Puffer';
  const productPrice = product?.price || 194;
  const productImages = product
    ? [product.primaryImage, product.secondaryImage, product.primaryImage, product.secondaryImage]
    : defaultImages;

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (product && onAddToCart) {
      onAddToCart(product, selectedSize, selectedColor.name);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen pt-20 relative">

        {/* LEFT COLUMN: Scrollable Product Images - 65-70% width */}
        <div className="w-full lg:w-[67%] min-h-screen">
          <div className="flex flex-col items-center bg-white pb-24">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="w-full max-w-4xl mx-auto flex items-center justify-center py-0"
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Fixed Product Information - 30-35% width */}
        <div className="w-full lg:w-[33%] bg-white lg:h-[calc(100vh-5rem)] lg:sticky lg:top-20 flex flex-col">
          <div className="flex-1 px-8 lg:px-10 py-12 lg:py-16 flex flex-col">

            {/* Product Name - Serif Typography */}
            <h1 className="text-3xl lg:text-4xl font-serif mb-6 tracking-tight italic">
              {productName}
            </h1>

            {/* Color Label + Swatches */}
            <div className="mb-8">
              <p className="text-sm text-black mb-3">{selectedColor.name}</p>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 transition-all ${selectedColor.name === color.name
                      ? 'ring-1 ring-black ring-offset-2'
                      : ''
                      }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size & Cart Row */}
            <div className="flex gap-3 mb-4">
              {/* Size Selector */}
              <div className="relative flex-1">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full h-12 border border-neutral-300 px-4 text-sm bg-white hover:border-black transition-colors focus:outline-none focus:border-black appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a size</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={16} />
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-black text-white text-xs font-medium tracking-wider flex items-center justify-between px-5 hover:bg-neutral-800 transition-colors"
              >
                <span>ADD TO CART</span>
                <span>${productPrice}</span>
              </button>
            </div>

            {/* Shipping Info */}
            <p className="text-sm text-neutral-600 mb-auto">
              You get free shipping on this item.
            </p>

            {/* Bottom Section - Model Info & Accordions */}
            <div className="mt-auto">
              {/* Model Info */}
              <p className="text-sm text-neutral-500 mb-4 pt-8">
                Model is 6'3" and wears size Large
              </p>

              {/* Accordion Sections - Opens one at a time */}
              <AccordionItem
                title="Features & Details"
                isOpen={openAccordion === 'features'}
                onToggle={() => handleAccordionToggle('features')}
              >
                <ul className="space-y-1">
                  <li>• Water-resistant nylon outer shell</li>
                  <li>• 700-fill premium down insulation</li>
                  <li>• Pleated construction for enhanced mobility</li>
                  <li>• Two-way zipper with storm flap</li>
                  <li>• Interior security pocket</li>
                </ul>
              </AccordionItem>

              <AccordionItem
                title="Size & Fit"
                isOpen={openAccordion === 'size'}
                onToggle={() => handleAccordionToggle('size')}
              >
                <p className="mb-2">Relaxed fit with dropped shoulders.</p>
                <p>Model measurements: Height 6'3" / Chest 40" / Waist 32"</p>
              </AccordionItem>

              <AccordionItem
                title="Product Care"
                isOpen={openAccordion === 'care'}
                onToggle={() => handleAccordionToggle('care')}
              >
                <ul className="space-y-1">
                  <li>• Machine wash cold on gentle cycle</li>
                  <li>• Tumble dry low with tennis balls</li>
                  <li>• Do not bleach or iron</li>
                  <li>• Professional cleaning recommended</li>
                </ul>
              </AccordionItem>

              <div className="border-t border-neutral-200"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};