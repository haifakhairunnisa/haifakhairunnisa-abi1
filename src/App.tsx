import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ShopAll } from './components/sections/ShopAll';
import { TopsPage } from './components/sections/TopsPage';
import { BottomsPage } from './components/sections/BottomsPage';
import { AccessoriesPage } from './components/sections/AccessoriesPage';
import { EditorialFeature } from './components/sections/EditorialFeature';
import { ProductDetail } from './components/product/ProductDetail';
import { CartDrawer, CartItem } from './components/cart/CartDrawer';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { Footer } from './components/layout/Footer';

// Product type for passing between pages
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  primaryImage: string;
  secondaryImage: string;
  dropText?: string;
}

// Cart Context for global cart state
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
}

const CartContext = React.createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

// Home Page Component
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="relative">
      <Hero />
      <EditorialFeature onProductClick={() => navigate('/product')} />
      <Footer />
    </main>
  );
};

// Shop All Page Component
const ShopAllPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate('/shop-all/product', { state: { product } });
  };

  return (
    <main className="pt-20">
      <ShopAll
        onNavigate={(page) => navigate(`/shop-all/${page}`)}
        onProductClick={handleProductClick}
      />
      <Footer />
    </main>
  );
};

// Tops Page Component
const TopsPageWrapper = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate('/shop-all/tops/product', { state: { product } });
  };

  return (
    <main className="pt-20">
      <TopsPage onProductClick={handleProductClick} />
      <Footer />
    </main>
  );
};

// Bottoms Page Component
const BottomsPageWrapper = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate('/shop-all/bottoms/product', { state: { product } });
  };

  return (
    <main className="pt-20">
      <BottomsPage onProductClick={handleProductClick} />
      <Footer />
    </main>
  );
};

// Accessories Page Component
const AccessoriesPageWrapper = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate('/shop-all/accessories/product', { state: { product } });
  };

  return (
    <main className="pt-20">
      <AccessoriesPage onProductClick={handleProductClick} />
      <Footer />
    </main>
  );
};

// Product Detail Page Component
const ProductDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, setIsCartOpen } = useCart();
  const product = location.state?.product as Product | undefined;

  const handleAddToCart = (prod: Product, size: string, color: string) => {
    addToCart(prod, size, color);
    setIsCartOpen(true);
  };

  return (
    <>
      <ProductDetail
        onBack={() => navigate(-1)}
        product={product}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </>
  );
};

// Checkout Page Wrapper
const CheckoutPageWrapper = () => {
  const { items } = useCart();
  return <CheckoutPage cartItems={items} />;
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Cart state
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  // Cart functions
  const addToCart = (product: Product, size: string, color: string) => {
    setCartItems(prev => {
      const existing = prev.find(item =>
        item.id === product.id && item.size === size && item.color === color
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.primaryImage,
        color,
        size,
        quantity: 1
      }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  // Determine current page type for Navbar
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.includes('/shop-all/tops')) return 'tops';
    if (path.includes('/shop-all/bottoms')) return 'bottoms';
    if (path.includes('/shop-all/accessories')) return 'accessories';
    if (path.includes('/shop-all')) return 'shop';
    if (path.includes('/product')) return 'product';
    if (path.includes('/checkout')) return 'product';
    return 'home';
  };

  // Handler for navbar navigation
  const handleNavigate = (page: string) => {
    switch (page) {
      case 'home': navigate('/'); break;
      case 'shop': navigate('/shop-all'); break;
      case 'tops': navigate('/shop-all/tops'); break;
      case 'bottoms': navigate('/shop-all/bottoms'); break;
      case 'accessories': navigate('/shop-all/accessories'); break;
      default: navigate('/');
    }
  };

  React.useEffect(() => {
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    });
  }, []);

  const cartContextValue: CartContextType = {
    items: cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    isCartOpen,
    setIsCartOpen,
    cartCount
  };

  // Hide navbar on checkout page
  const hideNavbar = location.pathname === '/checkout';

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        {!hideNavbar && (
          <Navbar
            onNavigate={handleNavigate}
            currentPage={getCurrentPage()}
            cartCount={cartCount}
            onCartClick={() => setIsCartOpen(true)}
          />
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop-all" element={<ShopAllPage />} />
          <Route path="/shop-all/tops" element={<TopsPageWrapper />} />
          <Route path="/shop-all/bottoms" element={<BottomsPageWrapper />} />
          <Route path="/shop-all/accessories" element={<AccessoriesPageWrapper />} />
          <Route path="/shop-all/product" element={<ProductDetailPage />} />
          <Route path="/shop-all/tops/product" element={<ProductDetailPage />} />
          <Route path="/shop-all/bottoms/product" element={<ProductDetailPage />} />
          <Route path="/shop-all/accessories/product" element={<ProductDetailPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPageWrapper />} />
        </Routes>

        {/* Cart Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeItem}
          onCheckout={handleCheckout}
        />
      </div>
    </CartContext.Provider>
  );
};

export default App;