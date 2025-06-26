'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const snacks = [
  {
    name: "Cimol",
    desc: "Cemilan gurih dan kenyal, cocok buat santai!",
    price: "Rp5.000 - 12.000",
    image: "/images/cimol.png",
    waMessage: "Halo kak! Aku mau pesan Cimol.",
    category: "Signature",
    isPopular: true
  },
  {
    name: "Cimol Keju",
    desc: "Cimol dengan sensasi lelehan keju creamy yang gurih!",
    price: "Rp12.000",
    image: "/images/cimolkeju.png",
    waMessage: "Halo kak! Aku mau pesan Cimol Keju.",
    category: "Premium",
    isNew: true
  },
  {
    name: "Makaroni",
    desc: "Renyer pedas yang crunchy banget!",
    price: "Rp5.000",
    image: "/images/makaroni.png",
    waMessage: "Halo kak! Aku mau pesan Makaroni.",
    category: "Classic"
  },
  {
    name: "Basreng",
    desc: "Bakso goreng khas Alby Snack, pedasnya nampol!",
    price: "Rp5.000",
    image: "/images/basreng.png",
    waMessage: "Halo kak! Aku mau pesan Basreng.",
    category: "Signature",
    isPopular: true
  }
];

const phone = "6281296023400";
const mapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.193222126297!2d106.72738731100698!3d-6.215007893738111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f13670f79235%3A0x1a6cda36e850dcd3!2sQPMJ%2BV2%2C%20Joglo%2C%20Kembangan%2C%20West%20Jakarta%20City%2C%20Jakarta%20Capital%20Region!5e0!3m2!1sen!2sid!4v1716205510000!5m2!1sen!2sid";

const testimonials = [
  { name: "Andi W.", review: "Cimolnya enak banget, beneran nagih!", rating: 5, avatar: "👨", sticker: "😍" },
  { name: "Rina M.", review: "Basreng pedesnya mantap, cocok buat temen kerja.", rating: 4, avatar: "👩", sticker: "🔥" },
  { name: "Yudha P.", review: "Harga murah rasa mewah. Repeat order terus!", rating: 5, avatar: "👨‍💼", sticker: "💯" },
  { name: "Arie U.", review: "Cimol Keju nya enak bgt bikin nagih!", rating: 5, avatar: "👩‍💻", sticker: "🤤" },
  { name: "M igo", review: "Untuk sekelas gerobakan rasanya juara sih", rating: 5, avatar: "👨‍🎓", sticker: "🏆" },
  { name: "Alex", review: "Boleh untuk di coba, enak dan pedasnya pas", rating: 4, avatar: "👨‍🚀", sticker: "👌" }
];

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 1, 0, -1, 0],
      x: [0, 2, 0, -2, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay
    }}
  >
    {children}
  </motion.div>
);

// Add CSS for slow spin animation
const slowSpinStyle = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl ${className}`}>
    {children}
  </div>
);

const ParallaxSection = ({ children, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={className}
      style={{ transform: `translateY(${scrollY * 0.1}px)` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState({});
  
  const categories = ['All', 'Signature', 'Premium', 'Classic'];
  
  const filteredSnacks = activeFilter === 'All' 
    ? snacks 
    : snacks.filter(snack => snack.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/90 via-pink-800/90 to-red-900/90 relative overflow-hidden">
      {/* Add custom CSS */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
      `}</style>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.3)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(255,20,147,0.3)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Decorative Elements & Stickers */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Cute Sun with googly eyes */}
        <FloatingElement delay={0}>
          <div className="absolute top-16 left-16 transform rotate-12">
            <div className="relative text-7xl">
              <span className="absolute inset-0">☀️</span>
              <div className="absolute top-4 left-4 flex gap-1">
                <div className="w-3 h-3 bg-white rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div>
                </div>
                <div className="w-3 h-3 bg-white rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </FloatingElement>

        {/* Cute Flower with googly eyes */}
        <FloatingElement delay={1}>
          <div className="absolute top-32 right-20 transform -rotate-12">
            <div className="relative text-6xl">
              <span className="absolute inset-0">🌻</span>
              <div className="absolute top-3 left-3 flex gap-1">
                <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
                </div>
                <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </FloatingElement>

        {/* More cute stickers */}
        <FloatingElement delay={2}>
          <div className="absolute top-80 left-8 text-5xl opacity-80 animate-spin-slow">🌶️</div>
        </FloatingElement>
        
        <FloatingElement delay={3}>
          <div className="absolute top-60 right-40 text-4xl opacity-70 transform rotate-45">🔥</div>
        </FloatingElement>

        <FloatingElement delay={4}>
          <div className="absolute bottom-40 left-40 text-5xl opacity-60">🍟</div>
        </FloatingElement>

        <FloatingElement delay={5}>
          <div className="absolute bottom-20 right-40 text-4xl opacity-80">⭐</div>
        </FloatingElement>

        {/* Additional fun stickers */}
        <FloatingElement delay={6}>
          <div className="absolute top-1/3 left-1/4 text-4xl opacity-50 transform -rotate-12">🎉</div>
        </FloatingElement>

        <FloatingElement delay={7}>
          <div className="absolute top-2/3 right-1/4 text-3xl opacity-60 transform rotate-12">💫</div>
        </FloatingElement>

        <FloatingElement delay={8}>
          <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-70">🎯</div>
        </FloatingElement>

        {/* Cute speech bubbles */}
        <FloatingElement delay={9}>
          <div className="absolute top-1/2 left-12 bg-white/80 rounded-full px-4 py-2 text-sm font-bold text-red-600 transform -rotate-12 shadow-lg">
            ENAK!
          </div>
        </FloatingElement>

        <FloatingElement delay={10}>
          <div className="absolute bottom-1/2 right-12 bg-yellow-300/80 rounded-full px-4 py-2 text-sm font-bold text-red-700 transform rotate-12 shadow-lg">
            PEDAS!
          </div>
        </FloatingElement>

        {/* More googly-eyed elements */}
        <FloatingElement delay={11}>
          <div className="absolute top-1/4 right-1/3 transform rotate-6">
            <div className="relative text-5xl">
              <span className="absolute inset-0">🌸</span>
              <div className="absolute top-2 left-2 flex gap-0.5">
                <div className="w-2 h-2 bg-white rounded-full border border-black flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-black rounded-full animate-bounce"></div>
                </div>
                <div className="w-2 h-2 bg-white rounded-full border border-black flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-black rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </FloatingElement>

        <FloatingElement delay={12}>
          <div className="absolute bottom-1/4 left-2/3 transform -rotate-6">
            <div className="relative text-4xl">
              <span className="absolute inset-0">🌺</span>
              <div className="absolute top-1.5 left-1.5 flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full border border-black flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-black rounded-full animate-pulse"></div>
                </div>
                <div className="w-1.5 h-1.5 bg-white rounded-full border border-black flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-black rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </FloatingElement>

        {/* Fun sticker badges */}
        <FloatingElement delay={13}>
          <div className="absolute top-3/4 left-20 bg-gradient-to-r from-pink-400 to-red-400 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
            WOW! 😍
          </div>
        </FloatingElement>

        <FloatingElement delay={14}>
          <div className="absolute top-1/6 right-1/6 bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-12 shadow-lg">
            YUMMY! 😋
          </div>
        </FloatingElement>
      </div>

      {/* WhatsApp Float Button */}
      <motion.a
        href={`https://wa.me/${phone}`}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-5 rounded-full shadow-2xl text-2xl group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(34, 197, 94, 0.5)",
            "0 0 40px rgba(34, 197, 94, 0.8)",
            "0 0 20px rgba(34, 197, 94, 0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="group-hover:animate-bounce">💬</span>
      </motion.a>

      <main className="relative z-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-8xl md:text-9xl font-black bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                ALBY SNACK
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Cemilan Pedas <span className="text-yellow-300">Kekinian</span> 🌶️
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Rasakan sensasi pedas yang bikin ketagihan! Murah, gurih, dan pasti nagih banget!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-4"
            >
              <GlassCard className="inline-block px-8 py-4 mb-6">
                <div className="flex items-center gap-4 text-yellow-300">
                  <span className="text-3xl animate-bounce">🔥</span>
                  <span className="text-2xl font-bold">PROMO SPESIAL HARI INI!</span>
                  <span className="text-3xl animate-bounce">🔥</span>
                </div>
                <p className="text-white text-lg mt-2">Beli 2 Cimol Gratis Makaroni</p>
              </GlassCard>
              
              <div>
                <motion.a
                  href="#menu"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl mr-4 mb-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🍽️ Lihat Menu
                </motion.a>
                <motion.a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl mb-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 Pesan Sekarang
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.menu ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
                Menu <span className="text-yellow-300">Favorit</span> 🔥
              </h2>
              <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Pilihan cemilan pedas terbaik yang bikin lidah bergoyang!
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                      activeFilter === category
                        ? 'bg-white text-red-600 shadow-xl'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence mode="wait">
                {filteredSnacks.map((snack, idx) => (
                  <motion.div
                    key={snack.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -50 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative"
                  >
                    <GlassCard className="p-6 h-full flex flex-col overflow-hidden relative">
                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-10 space-y-2">
                        {snack.isPopular && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            🔥 POPULER
                          </span>
                        )}
                        {snack.isNew && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            ✨ BARU
                          </span>
                        )}
                      </div>

                      {/* Image Placeholder with gradient overlay and cute stickers */}
                      <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 bg-black/10"></div>
                        
                        {/* Main food emoji */}
                        <span className="text-6xl filter drop-shadow-lg z-10">
                          {snack.name.includes('Cimol') ? '🥟' : 
                           snack.name.includes('Makaroni') ? '🍝' : '🥓'}
                        </span>
                        
                        {/* Cute stickers around the food */}
                        <div className="absolute top-2 left-2 text-2xl animate-bounce">💫</div>
                        <div className="absolute top-2 right-2 text-xl animate-pulse">✨</div>
                        <div className="absolute bottom-2 left-2 text-lg animate-wiggle">🔥</div>
                        <div className="absolute bottom-2 right-2 text-xl animate-bounce-x">❤️</div>
                        
                        {/* Cute googly eyes on some items */}
                        {snack.name.includes('Cimol') && (
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-1 z-20">
                            <div className="w-3 h-3 bg-white rounded-full border-2 border-black flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div>
                            </div>
                            <div className="w-3 h-3 bg-white rounded-full border-2 border-black flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-300 transition-colors">
                          {snack.name}
                        </h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                          {snack.desc}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="text-3xl font-black text-yellow-300 drop-shadow-lg">
                          {snack.price}
                        </div>
                        <motion.a
                          href={`https://wa.me/${phone}?text=${encodeURIComponent(snack.waMessage)}`}
                          target="_blank"
                          className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-xl text-center shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          💬 Pesan Sekarang
                        </motion.a>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
                Kata <span className="text-yellow-300">Pelanggan</span> ⭐
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Ribuan pelanggan sudah merasakan kenikmatannya!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={isVisible.testimonials ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <GlassCard className="p-6 h-full relative">
                    {/* Cute sticker on testimonial */}
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                      {testimonial.sticker}
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{testimonial.avatar}</span>
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <div className="text-yellow-300 text-xl">
                          {"⭐".repeat(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-200 italic text-lg leading-relaxed">
                      "{testimonial.review}"
                    </blockquote>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
                Kunjungi <span className="text-yellow-300">Kami</span> 📍
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible.contact ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlassCard className="p-8 h-full">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">Informasi Kontak</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📍</span>
                      <div>
                        <h4 className="font-bold text-yellow-300 text-xl mb-2">Alamat</h4>
                        <p className="text-gray-200 leading-relaxed">
                          JL Haji Sa'abah, No. 80, Joglo, RT.3/RW.1, Meruya Sel., Kec. Kembangan Kota Jakarta Barat
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📞</span>
                      <div>
                        <h4 className="font-bold text-yellow-300 text-xl mb-2">WhatsApp</h4>
                        <motion.a
                          href={`https://wa.me/${phone}`}
                          className="text-green-400 text-xl font-bold hover:text-green-300 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {phone}
                        </motion.a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">🕒</span>
                      <div>
                        <h4 className="font-bold text-yellow-300 text-xl mb-2">Jam Operasional</h4>
                        <p className="text-gray-200 text-lg">10.00 – 22.00 WIB</p>
                        <p className="text-green-400 font-bold">Buka Setiap Hari!</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📱</span>
                      <div>
                        <h4 className="font-bold text-yellow-300 text-xl mb-2">Instagram</h4>
                        <motion.a
                          href="https://instagram.com/albysnack.id"
                          target="_blank"
                          className="text-pink-400 text-xl font-bold hover:text-pink-300 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          @albysnack.id
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible.contact ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <GlassCard className="p-2 h-full">
                  <iframe
                    src={mapsLink}
                    className="w-full h-full min-h-[400px] rounded-2xl"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 py-12 text-center">
        <GlassCard className="max-w-4xl mx-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-black text-white mb-4">
              🔥 ALBY SNACK 🔥
            </h3>
            <p className="text-gray-200 text-xl mb-6">
              Pedasnya bikin balik lagi!
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <motion.a
                href={`https://wa.me/${phone}`}
                target="_blank"
                className="text-green-400 hover:text-green-300 transition-colors text-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                💬 WhatsApp
              </motion.a>
              <motion.a
                href="https://instagram.com/albysnack.id"
                target="_blank"
                className="text-pink-400 hover:text-pink-300 transition-colors text-2xl"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                📱 Instagram
              </motion.a>
            </div>
            <p className="text-gray-300">
              © 2025 Alby Snack - Made with ❤️ & 🌶️
            </p>
          </motion.div>
        </GlassCard>
      </footer>
    </div>
  );
}