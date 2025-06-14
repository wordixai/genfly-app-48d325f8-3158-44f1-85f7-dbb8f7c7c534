const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center polka-bg-pink overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="pop-title block">POP!</span>
                <span className="text-black block transform -rotate-2">ART</span>
                <span className="pop-title block">VIBES!</span>
              </h1>
              
              <div className="speech-bubble inline-block max-w-md">
                <p className="text-xl font-bold text-black">
                  Discover amazing fashion & art with that retro pop twist! ✨
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="handwritten-btn py-4 px-8 text-white rounded-lg text-xl font-bold">
                Shop Now! 🛍️
              </button>
              
              <button className="bg-white border-4 border-black py-4 px-8 rounded-lg text-xl font-bold hover:bg-gray-50 transition-colors transform hover:scale-105">
                Explore Art! 🎨
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">1000+</div>
                <div className="text-lg font-semibold text-gray-700">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-lg font-semibold text-gray-700">Unique Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">24/7</div>
                <div className="text-lg font-semibold text-gray-700">Fun Guaranteed!</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Product */}
          <div className="relative">
            <div className="pop-frame bg-white p-6 mx-auto max-w-md starburst">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop"
                  alt="Featured Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Pop Art Tee!</h3>
              <p className="text-center text-gray-600 mb-4">The hottest trend right now!</p>
              <button className="handwritten-btn w-full py-3 text-white rounded-lg font-bold">
                Get Yours! 💫
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 wiggle">
              <div className="text-6xl">⭐</div>
            </div>
            <div className="absolute -bottom-4 -right-4 wiggle" style={{animationDelay: '0.5s'}}>
              <div className="text-4xl">💎</div>
            </div>
            <div className="absolute top-1/2 -left-12 wiggle" style={{animationDelay: '1s'}}>
              <div className="text-5xl">🎨</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl opacity-20 wiggle">🌟</div>
        <div className="absolute top-40 right-20 text-6xl opacity-20 wiggle" style={{animationDelay: '0.7s'}}>💖</div>
        <div className="absolute bottom-32 left-20 text-7xl opacity-20 wiggle" style={{animationDelay: '1.2s'}}>✨</div>
        <div className="absolute bottom-20 right-10 text-9xl opacity-20 wiggle" style={{animationDelay: '0.3s'}}>🎉</div>
      </div>
    </section>
  );
};

export default Hero;