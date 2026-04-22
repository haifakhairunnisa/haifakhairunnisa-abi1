import React, { useState } from 'react';
import { ProductCard } from '../product/ProductCard';
import { Grid3x3, Grid2x2 } from 'lucide-react';
import { motion } from 'motion/react';

const subcategories = ['All Accessories'];

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
        id: 301,
        name: 'URBAN BACKPACK',
        category: 'All Accessories',
        price: 129,
        primaryImage: 'https://images.unsplash.com/photo-1665832102899-2b3f12cf991e?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1574788516190-3d7396549f3f?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
    {
        id: 302,
        name: 'CANVAS TOTE',
        category: 'All Accessories',
        price: 79,
        primaryImage: 'https://images.unsplash.com/photo-1758505805301-77805195fdb9?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1618249807726-2f381c277de1?w=800',
    },
    {
        id: 303,
        name: 'LEATHER BELT',
        category: 'All Accessories',
        price: 65,
        primaryImage: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    },
    {
        id: 304,
        name: 'MINIMAL WATCH',
        category: 'All Accessories',
        price: 199,
        primaryImage: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        dropText: 'DROPPING SAT 01PM EST'
    },
    {
        id: 305,
        name: 'CROSSBODY BAG',
        category: 'All Accessories',
        price: 89,
        primaryImage: 'https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1761646238176-b480909e6ba6?w=800',
    },
    {
        id: 306,
        name: 'WOOL BEANIE',
        category: 'All Accessories',
        price: 45,
        primaryImage: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800',
        secondaryImage: 'https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=800',
    },
];

interface AccessoriesPageProps {
    onProductClick?: (product: Product) => void;
}

export const AccessoriesPage: React.FC<AccessoriesPageProps> = ({ onProductClick }) => {
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
                        Accessories
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
                                        layoutId="accessoriesActiveIndicator"
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
