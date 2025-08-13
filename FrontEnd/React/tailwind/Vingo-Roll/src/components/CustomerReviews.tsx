import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'Absolutely stunning curtains! The quality exceeded my expectations and they transformed my living room completely. The custom sizing was perfect.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Royal Velvet Blackout'
  },
  {
    name: 'Michael Chen',
    location: 'Vancouver, Canada',
    rating: 5,
    text: 'Professional service from start to finish. The design consultation was incredibly helpful and the installation was flawless. Highly recommend!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Thermal Insulated Pro'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Montreal, Canada',
    rating: 5,
    text: 'The sheer curtains are exactly what I was looking for. They let in just the right amount of light while maintaining privacy. Beautiful quality!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Sheer Elegance White'
  },
  {
    name: 'David Thompson',
    location: 'Calgary, Canada',
    rating: 5,
    text: 'Fast shipping, excellent packaging, and the curtains look amazing in our bedroom. The blackout feature works perfectly for better sleep.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Royal Velvet Blackout'
  },
  {
    name: 'Lisa Park',
    location: 'Ottawa, Canada',
    rating: 5,
    text: 'Love the eco-friendly linen curtains! They add such a natural, calming feel to our home office. Great customer service too.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Linen Blend Natural'
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied 
            customers have to say about their Vingo Roll experience.
          </p>
        </motion.div>

        {/* Scrolling Reviews */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1600] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="text-purple-200 mb-4" size={32} />

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {review.location}
                    </div>
                    <div className="text-sm text-purple-600 font-medium">
                      Purchased: {review.product}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-gray-900">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="text-gray-600">
              Based on 12,000+ reviews
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;