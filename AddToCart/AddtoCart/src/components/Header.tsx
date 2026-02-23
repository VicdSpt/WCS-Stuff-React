import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            🛒 TechShop
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-emerald-200 transition-colors font-semibold"
            >
              Products
            </Link>
            
            <Link
              to="/cart"
              className="relative hover:text-emerald-200 transition-colors font-semibold"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
