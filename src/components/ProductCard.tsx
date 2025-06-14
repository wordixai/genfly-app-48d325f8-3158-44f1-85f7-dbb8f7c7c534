import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
}

const ProductCard = ({ name, price, image, originalPrice }: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative">
      <div className="pop-frame bg-white p-4 relative overflow-hidden starburst">
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm transform -rotate-12 border-2 border-black">
            -{discount}% OFF!
          </div>
        )}

        <div className="space-y-3">
          <h3 className="font-bold text-lg text-gray-800 leading-tight">{name}</h3>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-pink-600">${price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">${originalPrice}</span>
            )}
          </div>

          <div className="flex gap-2">
            <button className="handwritten-btn flex-1 py-3 px-4 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart!
            </button>
            
            <button className="bg-white border-4 border-black p-3 rounded-lg hover:bg-pink-100 transition-colors group">
              <Heart size={20} className="group-hover:fill-pink-500 group-hover:text-pink-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;