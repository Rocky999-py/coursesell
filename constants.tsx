
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'মাস্টারক্লাস: ওয়েব ডেভেলপমেন্ট',
    description: 'এইচটিএমএল, সিএসএস, জেএস এবং রিয়্যাক্ট শিখে ক্যারিয়ার গড়ুন।',
    price: 2500,
    originalPrice: 5000,
    image: 'https://picsum.photos/seed/web/600/400',
    category: 'Course',
    tags: ['Coding', 'Web', 'React'],
    rating: 4.8,
    reviews: 120
  },
  {
    id: 'c2',
    name: 'গ্রাফিক ডিজাইন ফর বিগিনার্স',
    description: 'ফটোশপ এবং ইলাস্ট্রেটর দিয়ে প্রফেশনাল ডিজাইন শিখুন।',
    price: 1500,
    originalPrice: 3000,
    image: 'https://picsum.photos/seed/design/600/400',
    category: 'Course',
    tags: ['Design', 'Photoshop', 'Creative'],
    rating: 4.6,
    reviews: 85
  },
  {
    id: 't1',
    name: 'SEMrush 1 Month Premium',
    description: 'আপনার ওয়েবসাইটের SEO উন্নত করতে প্রিমিয়াম টুলস।',
    price: 800,
    originalPrice: 1200,
    image: 'https://picsum.photos/seed/seo/600/400',
    category: 'Tool',
    tags: ['SEO', 'Marketing', 'Premium'],
    rating: 4.9,
    reviews: 210
  },
  {
    id: 't2',
    name: 'Canva Pro Yearly Subscription',
    description: 'আনলিমিটেড টেমপ্লেট এবং ফিচার সহ ক্যানভা প্রো।',
    price: 500,
    originalPrice: 999,
    image: 'https://picsum.photos/seed/canva/600/400',
    category: 'Tool',
    tags: ['Design', 'SaaS', 'Pro'],
    rating: 4.7,
    reviews: 150
  },
  {
    id: 'c3',
    name: 'ফ্রিল্যান্সিং সাকসেস গাইড',
    description: 'আপওয়ার্ক এবং ফাইবারে সফল হওয়ার পূর্ণাঙ্গ গাইডলাইন।',
    price: 1200,
    originalPrice: 2000,
    image: 'https://picsum.photos/seed/freelance/600/400',
    category: 'Course',
    tags: ['Freelancing', 'Career', 'Money'],
    rating: 4.5,
    reviews: 300
  },
  {
    id: 't3',
    name: 'Grammarly Premium 6 Months',
    description: 'আপনার লেখাকে নির্ভুল এবং প্রফেশনাল করে তুলুন।',
    price: 1000,
    originalPrice: 2500,
    image: 'https://picsum.photos/seed/grammar/600/400',
    category: 'Tool',
    tags: ['Writing', 'Productivity', 'Premium'],
    rating: 4.8,
    reviews: 95
  }
];
