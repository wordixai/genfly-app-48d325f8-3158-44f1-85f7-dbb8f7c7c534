import { Search, ShoppingCart, Menu, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-50">
      {/* Top Banner */}
      <div className="polka-bg-orange py-3 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="speech-bubble text-center max-w-md mx-auto">
            <p className="text-black font-bold">🎉 FREE SHIPPING on orders over $50! Limited time!</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b-4 border-black shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="wiggle">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full border-4 border-black flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
              </div>
              <h1 className="pop-title text-3xl md:text-4xl">PopShop!</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-bold text-lg hover:text-pink-500 transition-colors transform hover:scale-105">
                New Arrivals
              </a>
              <a href="#" className="font-bold text-lg hover:text-orange-500 transition-colors transform hover:scale-105">
                Fashion
              </a>
              <a href="#" className="font-bold text-lg hover:text-pink-500 transition-colors transform hover:scale-105">
                Art & Prints
              </a>
              <a href="#" className="font-bold text-lg hover:text-orange-500 transition-colors transform hover:scale-105">
                Sale! 🔥
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-full border-3 border-black px-4 py-2">
                <Search size={20} className="text-gray-600 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search awesome stuff..." 
                  className="bg-transparent outline-none w-48 font-medium"
                />
              </div>

              {/* Icons */}
              <button className="relative p-2 hover:bg-pink-100 rounded-full transition-colors">
                <Heart size={24} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              <button className="relative p-2 hover:bg-orange-100 rounded-full transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  2
                </span>
              </button>

              {/* Mobile Menu */}
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;