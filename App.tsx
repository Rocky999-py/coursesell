
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import GeminiAssistant from './components/GeminiAssistant';
import { PRODUCTS } from './constants';
import { Product, CartItem, Category } from './types';
import { Filter, Layers, Zap, Award, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      <main className="flex-grow">
        {activeCategory === 'All' && <Hero />}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900">
                {activeCategory === 'All' ? 'এক্সক্লুসিভ অফারসমূহ' : activeCategory === 'Course' ? 'সেরা লার্নিং কোর্সসমূহ' : 'ডিজিটাল টুলস ও সফটওয়্যার'}
              </h2>
              <p className="text-gray-500 mt-2">আপনার পছন্দের সেরা প্রোডাক্টটি বেছে নিন এখনই।</p>
            </div>
            
            <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
              <button 
                onClick={() => setActiveCategory('All')}
                className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${activeCategory === 'All' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-300'}`}
              >
                সবগুলো
              </button>
              <button 
                onClick={() => setActiveCategory('Course')}
                className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${activeCategory === 'Course' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-300'}`}
              >
                কোর্স
              </button>
              <button 
                onClick={() => setActiveCategory('Tool')}
                className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${activeCategory === 'Tool' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-300'}`}
              >
                ডিজিটাল টুলস
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>

          {/* Feature highlights */}
          <div className="mt-24 grid md:grid-cols-4 gap-8 py-16 border-y border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-2xl mb-4">
                <Zap className="text-orange-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ইনস্ট্যান্ট ডেলিভারি</h4>
              <p className="text-sm text-gray-500">পেমেন্ট করার সাথে সাথেই ইমেইলে এক্সেস পেয়ে যাবেন।</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-2xl mb-4">
                <Award className="text-blue-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">লাইফটাইম সাপোর্ট</h4>
              <p className="text-sm text-gray-500">আমাদের দক্ষ টিম থেকে পাবেন যেকোনো সময় সাপোর্ট।</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-2xl mb-4">
                <ShieldCheck className="text-green-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">নিরাপদ পেমেন্ট</h4>
              <p className="text-sm text-gray-500">SSL Commerz এর মাধ্যমে ১০০% নিরাপদ পেমেন্ট নিশ্চিত।</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-2xl mb-4">
                <Layers className="text-purple-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ভ্যারাইটি টুলস</h4>
              <p className="text-sm text-gray-500">১০০+ এর বেশি প্রিমিয়াম সাবস্ক্রিপশন টুলসের বিশাল সংগ্রহ।</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
               <span className="text-2xl font-bold tracking-tight">EduTools <span className="text-indigo-400">BD</span></span>
               <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                 আমরা বাংলাদেশের লার্নিং এবং সফটওয়্যার ইন্ডাস্ট্রিকে এগিয়ে নিতে প্রতিশ্রুতিবদ্ধ। মানসম্মত শিক্ষা এবং কাজের জন্য সেরা টুলস পৌঁছে দিচ্ছি আপনার হাতে।
               </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">দ্রুত লিঙ্ক</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">সবগুলো কোর্স</li>
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">প্রিমিয়াম টুলস</li>
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">প্রাইভেসি পলিসি</li>
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">টার্মস ও কন্ডিশন</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">কন্টাক্ট</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ইমেইল: support@edutoolsbd.com</li>
                <li>ফোন: +৮৮০ ১৮০০-০০০০০০</li>
                <li>ঠিকানা: উত্তরা, ঢাকা, বাংলাদেশ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">নিউজলেটার</h4>
              <p className="text-xs text-gray-400 mb-4">অফার ও আপডেট পেতে ইমেইল সাবস্ক্রাইব করুন।</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-gray-800 border-none rounded-lg px-3 py-2 text-xs flex-1" />
                <button className="bg-indigo-600 px-4 py-2 rounded-lg text-xs font-bold">জয়েন</button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} EduTools BD. All rights reserved. Design & Built for Excellence.
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
      
      <GeminiAssistant />
    </div>
  );
};

export default App;
