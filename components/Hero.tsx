
import React from 'react';
import { Search, Rocket, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-indigo-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-800/50 border border-indigo-700/50 px-4 py-1.5 rounded-full text-indigo-200 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>বাংলাদেশে ১ নম্বর লার্নিং ও টুলস স্টোর</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              নিজের স্কিল বাড়ান এবং <br />
              <span className="text-indigo-400">প্রিমিয়াম টুলস</span> কিনুন সাশ্রয়ী মূল্যে!
            </h1>
            <p className="text-lg text-indigo-100/80 mb-8 max-w-lg">
              আমরা দিচ্ছি ইন্ডাস্ট্রি লিডিং স্কিল ডেভেলপমেন্ট কোর্স এবং সকল প্রয়োজনীয় ডিজিটাল সাবস্ক্রিপশন টুলস এক প্ল্যাটফর্মে।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="আপনার পছন্দের কোর্স বা টুল খুঁজুন..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
                সার্চ করুন
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-indigo-900" src={`https://picsum.photos/seed/${i}/100`} alt="User" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-white ml-1 font-bold">৪.৯/৫</span>
                </div>
                <p className="text-indigo-200">১০,০০০+ ছাত্র ও প্রফেশনালদের পছন্দ</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-indigo-800/30 group">
                <img 
                  src="https://picsum.photos/seed/learning/800/600" 
                  alt="Education" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white font-medium">"এই প্ল্যাটফর্ম থেকে আমি ৩টি প্রিমিয়াম টুল কিনেছি এবং শেখার অভিজ্ঞতা ছিল দারুণ!"</p>
                    <p className="text-indigo-200 text-sm mt-2">— আবরার ফাহিম, ওয়েব ডেভেলপার</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
