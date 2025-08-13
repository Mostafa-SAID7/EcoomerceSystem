import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full blur-3xl" />
        <div className="absolute top-40 right-32 w-48 h-48 bg-pink-300 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-2 text-purple-600">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9/5 from 12,000+ reviews</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {' '}Windows
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover premium curtains, blinds, and window treatments from top designers. 
              Custom-made to perfection, delivered to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Custom Design
              </motion.button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Truck className="text-purple-600" size={20} />
                <span className="text-sm">Free shipping over $99</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="text-purple-600" size={20} />
                <span className="text-sm">30-day guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white rounded-3xl p-6 shadow-xl"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Elegant curtains"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Silk Elegance</h3>
                <p className="text-purple-600 font-bold">$299</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-white rounded-3xl p-6 shadow-xl mt-8"
              >
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Modern blinds"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Modern Blinds</h3>
                <p className="text-purple-600 font-bold">$189</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white rounded-3xl p-6 shadow-xl -mt-4"
              >
                <div className="aspect-square bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Blackout curtains"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Blackout Pro</h3>
                <p className="text-purple-600 font-bold">$159</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-white rounded-3xl p-6 shadow-xl"
              >
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Sheer curtains"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Sheer Delight</h3>
                <p className="text-purple-600 font-bold">$129</p>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              50% OFF
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;