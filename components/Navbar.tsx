
import React from 'react';
import { ShoppingCart, Menu, X, BookOpen, Tool } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveCategory('All')}>
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-indigo-900 tracking-tight">EduTools <span className="text-indigo-600">BD</span></span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => setActiveCategory('All')}
              className={`${activeCategory === 'All' ? 'text-indigo-600 font-semibold' : 'text-gray-600'} hover:text-indigo-500 transition-colors`}
            >
              সবগুলো
            </button>
            <button 
              onClick={() => setActiveCategory('Course')}
              className={`${activeCategory === 'Course' ? 'text-indigo-600 font-semibold' : 'text-gray-600'} hover:text-indigo-500 transition-colors`}
            >
              কোর্সসমূহ
            </button>
            <button 
              onClick={() => setActiveCategory('Tool')}
              className={`${activeCategory === 'Tool' ? 'text-indigo-600 font-semibold' : 'text-gray-600'} hover:text-indigo-500 transition-colors`}
            >
              টুলস ও সফটওয়্যার
            </button>
            <button className="text-gray-600 hover:text-indigo-500 transition-colors">আমাদের সম্পর্কে</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
            <button className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-shadow shadow-lg shadow-indigo-200">
              লগইন
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { setActiveCategory('All'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 font-medium">সবগুলো</button>
            <button onClick={() => { setActiveCategory('Course'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 font-medium">কোর্সসমূহ</button>
            <button onClick={() => { setActiveCategory('Tool'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 font-medium">টুলস ও সফটওয়্যার</button>
            <button className="block w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md mt-4">লগইন করুন</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
