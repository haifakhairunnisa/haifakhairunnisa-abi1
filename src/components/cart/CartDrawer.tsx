import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus } from 'lucide-react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    color: string;
    size: string;
    quantity: number;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
    onCheckout: () => void;
}

export const CartDrawer = ({
    isOpen,
    onClose,
    items,
    onUpdateQuantity,
    onRemove,
    onCheckout
}: CartDrawerProps) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/30 z-50"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
                            <h2 className="text-sm font-medium">Shopping cart</h2>
                            <button
                                onClick={onClose}
                                className="p-1 hover:opacity-60 transition-opacity"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-6">
                            {items.length === 0 ? (
                                <p className="text-sm text-neutral-500 text-center py-12">
                                    Your cart is empty
                                </p>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            {/* Product Image */}
                                            <div className="w-20 h-28 bg-neutral-100 flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 flex flex-col">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm font-medium uppercase tracking-wide">
                                                            {item.name}
                                                        </h3>
                                                        <p className="text-sm text-neutral-500 mt-1">
                                                            Color: <span className="text-black">{item.color}</span>
                                                        </p>
                                                        <p className="text-sm text-neutral-500">
                                                            Size: <span className="text-black">{item.size}</span>
                                                        </p>
                                                    </div>
                                                    <span className="text-sm">${item.price}</span>
                                                </div>

                                                {/* Quantity & Remove */}
                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex items-center border border-neutral-300">
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                            className="p-2 hover:bg-neutral-100 transition-colors"
                                                        >
                                                            <Minus size={12} />
                                                        </button>
                                                        <span className="px-3 text-sm min-w-[2rem] text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                            className="p-2 hover:bg-neutral-100 transition-colors"
                                                        >
                                                            <Plus size={12} />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => onRemove(item.id)}
                                                        className="text-sm underline hover:opacity-60 transition-opacity"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-neutral-200 px-6 py-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm">
                                    Subtotal <span className="text-blue-600">({itemCount} items)</span>
                                </span>
                                <span className="text-sm">${subtotal} USD</span>
                            </div>
                            <p className="text-sm text-green-600 mb-1">
                                You are eligible for free shipping!
                            </p>
                            <p className="text-xs text-neutral-500 mb-6">
                                Taxes, discounts and shipping calculated at checkout.
                            </p>
                            <button
                                onClick={onCheckout}
                                disabled={items.length === 0}
                                className="w-full h-12 bg-black text-white text-sm font-medium tracking-wider hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                CHECKOUT
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export type { CartItem };
