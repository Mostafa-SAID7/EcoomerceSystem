import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Palette, Headphones, Ruler, Award } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on orders over $99. Fast and reliable shipping worldwide.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Shield,
    title: '30-Day Guarantee',
    description: 'Not satisfied? Return within 30 days for a full refund, no questions asked.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Work with our designers to create the perfect curtains for your space.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our expert team is here to help you choose the right window treatments.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Ruler,
    title: 'Perfect Fit',
    description: 'Professional measuring service ensures your curtains fit perfectly.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest materials and craftsmanship in every product we sell.',
    color: 'from-orange-500 to-orange-600'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Vingo Roll?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another curtain store. We're your partners in creating 
            beautiful, functional spaces that you'll love for years to come.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 text-white`}
              >
                <feature.icon size={28} />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation with our design experts today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;