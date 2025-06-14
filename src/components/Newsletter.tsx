const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 polka-bg-pink opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Join the</span>
            <span className="pop-title block text-yellow-300">POP SQUAD! 🌟</span>
          </h2>
          
          <div className="speech-bubble mb-8 inline-block">
            <p className="text-xl font-bold text-black">
              Get exclusive deals, new arrivals, and tons of pop art inspiration! 📧✨
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Your email here..."
              className="flex-1 px-6 py-4 rounded-lg border-4 border-black text-lg font-semibold"
            />
            <button className="handwritten-btn py-4 px-8 text-white rounded-lg text-lg font-bold whitespace-nowrap">
              Join Now! 🚀
            </button>
          </div>

          <p className="text-white font-semibold opacity-90">
            💌 No spam, just awesome stuff! Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-8xl opacity-40 wiggle">📬</div>
        <div className="absolute top-20 right-20 text-6xl opacity-30 wiggle" style={{animationDelay: '0.5s'}}>💌</div>
        <div className="absolute bottom-20 left-1/4 text-7xl opacity-35 wiggle" style={{animationDelay: '1s'}}>⚡</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-25 wiggle" style={{animationDelay: '0.3s'}}>🎊</div>
      </div>
    </section>
  );
};

export default Newsletter;