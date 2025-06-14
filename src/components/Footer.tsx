import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="polka-bg-orange pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="pop-title text-3xl">PopShop!</h3>
            </div>
            <p className="text-black font-semibold">
              Where retro meets modern! 🎨 Express yourself with our amazing pop art collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-pink-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-pink-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-2xl font-bold text-black mb-4">Shop</h4>
            <ul className="space-y-2 font-semibold">
              <li><a href="#" className="hover:text-pink-600 transition-colors">New Arrivals 🆕</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Fashion 👕</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Art & Prints 🖼️</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Accessories ✨</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Sale Items 🔥</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-2xl font-bold text-black mb-4">Help</h4>
            <ul className="space-y-2 font-semibold">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Contact Us 📞</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Size Guide 📏</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Shipping Info 📦</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Returns 🔄</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">FAQ ❓</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-2xl font-bold text-black mb-4">About</h4>
            <ul className="space-y-2 font-semibold">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Our Story 📖</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Pop Art Mission 🎯</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Careers 💼</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Press 📰</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy 🔒</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-black pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-bold text-black flex items-center gap-2">
              Made with <Heart className="text-pink-600 fill-pink-600" size={20} /> for pop art lovers everywhere!
            </p>
            <p className="font-semibold text-black">
              © 2024 PopShop! All rights reserved. Keep it groovy! ✌️
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 text-6xl opacity-20 wiggle">🎪</div>
        <div className="absolute bottom-20 left-10 text-8xl opacity-15 wiggle" style={{animationDelay: '0.7s'}}>🎨</div>
      </div>
    </footer>
  );
};

export default Footer;