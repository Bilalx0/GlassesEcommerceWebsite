
#card component

import React, { useState } from 'react';

const Cards = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('pink');
  
  const colorOptions = [
    { name: 'green', class: 'bg-green-500' },
    { name: 'red', class: 'bg-red-400' },
    { name: 'pink', class: 'bg-pink-300' }
  ];

  if (!product) {
    return <div className="text-gray-500">Product not available</div>;
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs">
      {/* Product Image */}
      <div className="mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Add to Cart Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-lg font-medium border-b border-white transition-colors delay-100 hover:border-b hover:border-gray-600 cursor-pointer">
            ADD TO CART
          </span>
          <div className="flex gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                className={`w-6 h-6 rounded-full ${color.class} ${
                  selectedColor === color.name 
                    ? 'ring-2 ring-offset-2 ring-gray-400' 
                    : ''
                }`}
                onClick={() => setSelectedColor(color.name)}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-medium text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-blue-900">${product.price}</span>
            <div className="text-gray-500 line-through">${product.originalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


#Data context code

import { createContext} from 'react';

// Create Context
export const DataContext = createContext();


import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';


export const DataProvider = ({ children }) => {
    const [data, setData] = useState({ categories: [], products: [] });
  
    // Fetch data (simulate fetching from `db.json`)
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/db.json'); // Adjust path as needed
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
    }, []);
  
    return (
      <DataContext.Provider value={data}>
        {children}
      </DataContext.Provider>
    );
  };
  

  #routing

  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="products" element={<Products/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="product" element={<ProductDetail/>} />
    </Route>
  )
)

#product listing 

import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

const Products = () => {
  const { products } = useContext(DataContext);

  const [filters, setFilters] = useState({
    availability: [],
    priceRange: { min: 0, max: 99 },
    brand: []
  });

  const [sortBy, setSortBy] = useState('best-selling');

  const handleAvailabilityChange = (value) => {
    setFilters(prev => ({
      ...prev,
      availability: prev.availability.includes(value)
        ? prev.availability.filter(item => item !== value)
        : [...prev.availability, value]
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: value
      }
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        
      </div>
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">FILTERS</h2>
            
            {/* Availability Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">AVAILABILITY</h3>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="inStock"
                  className="mr-2"
                  onChange={() => handleAvailabilityChange('inStock')}
                />
                <label htmlFor="inStock">In stock (5)</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="outOfStock"
                  className="mr-2"
                  onChange={() => handleAvailabilityChange('outOfStock')}
                />
                <label htmlFor="outOfStock">Out of stock (0)</label>
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">PRICE</h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-24 border rounded px-2 py-1"
                  value={filters.priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-24 border rounded px-2 py-1"
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm">
              <span className="text-gray-500">Home / Kids Glasses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <select
                className="border rounded px-2 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="best-selling">Best selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;


#Cart page

import React, { useState } from 'react';
import { Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Vintage Leather Jacket', 
      price: 129.99, 
      quantity: 1, 
      image: '/api/placeholder/100/100' 
    },
    { 
      id: 2, 
      name: 'Classic Sneakers', 
      price: 89.99, 
      quantity: 2, 
      image: '/api/placeholder/100/100' 
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          <ShoppingCart className="mr-3" /> Your Cart
        </h1>
        <span className="text-xl font-semibold">Total: ${calculateTotal()}</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <ShoppingCart className="mx-auto mb-4 w-16 h-16" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-md mr-4" 
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-full">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 rounded-l-full"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100 rounded-r-full"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;