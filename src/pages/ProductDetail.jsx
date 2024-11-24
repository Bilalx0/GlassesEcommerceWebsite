import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Share2, ChevronRight } from 'lucide-react';
// import { Alert, AlertDescription } from "@/components/ui/alert";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  // Mock product data - in real app, this would come from props or API
  const product = {
    id: 1,
    name: 'Classic Leather Jacket',
    price: 199.99,
    description: 'Premium quality leather jacket with a modern cut and classic styling. Features multiple pockets and adjustable cuffs.',
    rating: 4.5,
    reviews: 128,
    colors: ['Black', 'Brown', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/api/placeholder/500/600',
      '/api/placeholder/500/600',
      '/api/placeholder/500/600',
    ],
    features: [
      'Genuine leather construction',
      'YKK zippers throughout',
      'Quilted lining for warmth',
      'Multiple interior pockets',
    ]
  };

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    // Add to cart logic here
    console.log('Added to cart:', {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <span className="text-gray-500">Home</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-500">Shop</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                className="aspect-square object-cover rounded-lg cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.reviews} reviews</span>
            </div>
          </div>

          <p className="text-2xl font-bold">${product.price}</p>
          
          <p className="text-gray-600">{product.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border rounded-md ${
                    selectedSize === size
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={addToCart}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          {/* Product Features */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Product Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Alert */}
      {showAlert && (
        <Alert className="fixed bottom-4 right-4 w-96 bg-red-50 border-red-200">
          <AlertDescription>
            Please select both size and color before adding to cart
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ProductDetail;