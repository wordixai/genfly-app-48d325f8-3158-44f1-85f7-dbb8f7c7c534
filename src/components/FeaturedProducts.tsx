import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Retro Pop Art T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Comic Style Jacket",
      price: 89.99,
      originalPrice: 120.00,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Pop Art Wall Print",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Colorful Sneakers",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 polka-bg-orange">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="pop-title">Hot Picks! 🔥</span>
          </h2>
          <div className="speech-bubble inline-block">
            <p className="text-xl font-bold text-black">
              These are flying off the shelves! Get yours before they're gone! 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="handwritten-btn py-4 px-12 text-white rounded-lg text-xl font-bold">
            See More Awesome Stuff! 🚀
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 text-6xl opacity-30 wiggle">🎪</div>
        <div className="absolute bottom-20 right-1/4 text-8xl opacity-20 wiggle" style={{animationDelay: '0.8s'}}>🎭</div>
        <div className="absolute top-1/2 right-10 text-5xl opacity-25 wiggle" style={{animationDelay: '1.5s'}}>🎨</div>
      </div>
    </section>
  );
};

export default FeaturedProducts;