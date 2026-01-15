
import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemove, onUpdateQty }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl animate-in slide-in-from-right duration-300">
          <div className="h-full flex flex-col">
            <div className="px-6 py-4 bg-indigo-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="text-lg font-bold">আপনার কার্ট ({cart.length})</h2>
              </div>
              <button onClick={onClose} className="hover:bg-indigo-500 p-1 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">কার্ট খালি!</h3>
                  <p className="text-gray-500 mt-2">এখনই কেনাকাটা শুরু করুন এবং নিজের স্কিল বাড়ান।</p>
                  <button onClick={onClose} className="mt-6 text-indigo-600 font-bold border-b-2 border-indigo-600">পণ্যগুলো দেখুন</button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 hover:border-indigo-100 transition-colors">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                        <p className="text-indigo-600 font-bold mt-1">৳{item.price}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button onClick={() => onUpdateQty(item.id, -1)} className="px-2 py-1 hover:bg-gray-100">-</button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button onClick={() => onUpdateQty(item.id, 1)} className="px-2 py-1 hover:bg-gray-100">+</button>
                          </div>
                          <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium">মোট পরিমাণ:</span>
                  <span className="text-2xl font-black text-indigo-700">৳{total}</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                  চেকআউট করুন
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-wider">বিকাশ, রকেট এবং নগদের মাধ্যমে পেমেন্ট করা যাবে</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
