import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Shop': [
      'All Categories',
      'Blackout Curtains',
      'Sheer Curtains',
      'Thermal Curtains',
      'Designer Collection',
      'Sale Items'
    ],
    'Services': [
      'Custom Design',
      'Measuring Service',
      'Installation',
      'Design Consultation',
      'Bulk Orders',
      'Trade Program'
    ],
    'Support': [
      'Contact Us',
      'Size Guide',
      'Care Instructions',
      'Returns & Exchanges',
      'Shipping Info',
      'FAQ'
    ],
    'Company': [
      'About Us',
      'Our Story',
      'Careers',
      'Press',
      'Sustainability',
      'Reviews'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <div className="text-2xl font-bold">Vingo Roll</div>
                <div className="text-sm text-gray-400">Premium Curtains</div>
              </div>
            </motion.div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your windows with our premium collection of curtains, 
              blinds, and window treatments. Quality craftsmanship meets 
              modern design.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>1-800-VINGO-ROLL</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>hello@vingoroll.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-gray-400">
              <Truck className="text-purple-400" size={24} />
              <div>
                <div className="font-semibold text-white">Free Shipping</div>
                <div className="text-sm">On orders over $99</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Shield className="text-purple-400" size={24} />
              <div>
                <div className="font-semibold text-white">Secure Payment</div>
                <div className="text-sm">SSL encrypted checkout</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <CreditCard className="text-purple-400" size={24} />
              <div>
                <div className="font-semibold text-white">Easy Returns</div>
                <div className="text-sm">30-day return policy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="text-gray-400 text-sm">
                © 2024 Vingo Roll. All rights reserved.
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">We accept:</div>
              <div className="flex items-center space-x-3">
                {['💳', '💰', '🏦', '📱'].map((payment, index) => (
                  <div
                    key={index}
                    className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-lg"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;