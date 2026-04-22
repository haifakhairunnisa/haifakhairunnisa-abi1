import React, { useState } from 'react';
import { ProductCard } from '../product/ProductCard';
import { Grid3x3, Grid2x2 } from 'lucide-react';
import { motion } from 'motion/react';

const subcategories = ['Shorts', 'Long Pants'];

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
        id: 201,
        name: 'CARGO SHORTS',
        category: 'Shorts',
        price: 79,
        primaryImage: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800',
    },
    {
        id: 202,
        name: 'ATHLETIC SHORTS',
        category: 'Shorts',
        price: 55,
        primaryImage: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
    {
        id: 203,
        name: 'SWIM SHORTS',
        category: 'Shorts',
        price: 65,
        primaryImage: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
    },
    {
        id: 204,
        name: 'CHINO PANTS',
        category: 'Long Pants',
        price: 99,
        primaryImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
    {
        id: 205,
        name: 'DENIM JEANS',
        category: 'Long Pants',
        price: 129,
        primaryImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800',
    },
    {
        id: 206,
        name: 'CARGO PANTS',
        category: 'Long Pants',
        price: 119,
        primaryImage: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
    },
    {
        id: 207,
        name: 'JOGGER PANTS',
        category: 'Long Pants',
        price: 89,
        primaryImage: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
];

interface BottomsPageProps {
    onProductClick?: (product: Product) => void;
}

export const BottomsPage: React.FC<BottomsPageProps> = ({ onProductClick }) => {
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
                        Bottoms
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
                                        layoutId="bottomsActiveIndicator"
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
