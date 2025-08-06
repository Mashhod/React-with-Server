import { Home, Search, Bell, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/feed" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">Social</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts, people, or topics..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-4">
            <Link
              to="/feed"
              className={`p-2 rounded-lg transition-colors ${
                isActive('/feed')
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home className="w-6 h-6" />
            </Link>

            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors md:hidden">
              <Search className="w-6 h-6" />
            </button>

            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-2">
              <Link
                to="/profile"
                className={`p-2 rounded-lg transition-colors ${
                  isActive('/profile')
                    ? 'bg-primary-100 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <User className="w-6 h-6" />
              </Link>

              <Link
                to="/"
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-6 h-6" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;