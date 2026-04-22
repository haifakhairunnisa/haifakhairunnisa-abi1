import React, { useState } from 'react';
import { ProductCard } from '../product/ProductCard';
import { Grid3x3, Grid2x2 } from 'lucide-react';
import { motion } from 'motion/react';

const subcategories = ['T-Shirts', 'Shirts', 'Jackets'];

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

// Mock product data with categories
const products: Product[] = [
    {
        id: 101,
        name: 'BASIC TEE',
        category: 'T-Shirts',
        price: 45,
        primaryImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    },
    {
        id: 102,
        name: 'OVERSIZED TEE',
        category: 'T-Shirts',
        price: 55,
        primaryImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
    {
        id: 103,
        name: 'GRAPHIC TEE',
        category: 'T-Shirts',
        price: 50,
        primaryImage: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800',
    },
    {
        id: 104,
        name: 'OXFORD SHIRT',
        category: 'Shirts',
        price: 89,
        primaryImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
    {
        id: 105,
        name: 'LINEN SHIRT',
        category: 'Shirts',
        price: 95,
        primaryImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800',
    },
    {
        id: 106,
        name: 'FLANNEL SHIRT',
        category: 'Shirts',
        price: 79,
        primaryImage: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=800',
    },
    {
        id: 107,
        name: 'BOMBER JACKET',
        category: 'Jackets',
        price: 189,
        primaryImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    },
    {
        id: 108,
        name: 'DENIM JACKET',
        category: 'Jackets',
        price: 149,
        primaryImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
    {
        id: 109,
        name: 'LEATHER JACKET',
        category: 'Jackets',
        price: 299,
        primaryImage: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    },
];

interface TopsPageProps {
    onProductClick?: (product: Product) => void;
}

export const TopsPage: React.FC<TopsPageProps> = ({ onProductClick }) => {
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
    const [gridDensity, setGridDensity] = useState<3 | 4>(4);

    // Filter products by active subcategory
    const filteredProducts = activeSubcategory
        ? products.filter(p => p.category === activeSubcategory)
        : products;

    return (
        <div className="min-h-screen bg-white">
            {/* Page Title */}
            <div className="border-b border-gray-200">
                <div className="pl-6 pr-6 pt-12 pb-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight font-medium">
                        Tops
                    </h1>
                </div>
            </div>

            {/* Subcategory Navigation */}
            <div className="border-b border-gray-200">
                <div className="pl-6 pr-6 py-6">
                    <nav className="flex gap-8">
                        {subcategories.map((sub) => (
                            <button
                                key={sub}
                                onClick={() => setActiveSubcategory(activeSubcategory === sub ? null : sub)}
                                className={`text-[11px] uppercase tracking-[0.15em] transition-colors relative pb-1 ${activeSubcategory === sub
                                    ? 'text-black'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {sub}
                                {activeSubcategory === sub && (
                                    <motion.div
                                        layoutId="topsActiveIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-black"
                                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                    />
                                )}
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
                            {filteredProducts.length} products
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
                    {filteredProducts.map((product, index) => (
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
