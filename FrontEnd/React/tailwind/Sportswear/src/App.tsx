import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Menu,
  X,
  ShoppingBag,
  Award,
  Users,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const products = [
    {
      id: 1,
      name: "Elite Pro Runner",
      price: "$189",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Running"
    },
    {
      id: 2,
      name: "Power Lift Max",
      price: "$159",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Training"
    },
    {
      id: 3,
      name: "Court Dominator",
      price: "$199",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Basketball"
    },
    {
      id: 4,
      name: "Street Style Pro",
      price: "$149",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Lifestyle"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marathon Runner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      text: "These shoes have transformed my running experience. The comfort and performance are unmatched."
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Personal Trainer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      text: "Premium quality that delivers results. I recommend these to all my clients."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Basketball Player",
      image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      text: "The perfect combination of style and performance. These have become my go-to for every game."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">
                VELOCITY
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-lime-500 transition-colors duration-200">Home</a>
                <a href="#products" className="hover:text-lime-500 transition-colors duration-200">Products</a>
                <a href="#story" className="hover:text-lime-500 transition-colors duration-200">Story</a>
                <a href="#reviews" className="hover:text-lime-500 transition-colors duration-200">Reviews</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-lime-500/25 transition-all duration-300">
                Sign In
              </button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-800 rounded-md transition-colors duration-200">Home</a>
              <a href="#products" className="block px-3 py-2 hover:bg-gray-800 rounded-md transition-colors duration-200">Products</a>
              <a href="#story" className="block px-3 py-2 hover:bg-gray-800 rounded-md transition-colors duration-200">Story</a>
              <a href="#reviews" className="block px-3 py-2 hover:bg-gray-800 rounded-md transition-colors duration-200">Reviews</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="block">UNLEASH</span>
              <span className="block bg-gradient-to-r from-lime-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                YOUR POWER
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Premium sportswear engineered for champions. Where performance meets style, and dreams become reality.
            </p>
            <button className="group bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our latest collection of performance gear designed for champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-lime-500/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-lime-500 font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-lime-500 transition-colors duration-300">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                    <button className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Born from the relentless pursuit of excellence, Velocity represents more than just sportswear—we're a movement that believes in pushing boundaries and breaking limits.
                </p>
                <p>
                  Every stitch, every design, and every innovation is crafted with the champion mindset. We understand that greatness isn't just about crossing the finish line first; it's about the journey, the dedication, and the unwavering spirit to never give up.
                </p>
                <p>
                  Join millions of athletes worldwide who trust Velocity to fuel their passion and elevate their performance to extraordinary heights.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-lime-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-lime-500">50+</div>
                  <div className="text-gray-400">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">2M+</div>
                  <div className="text-gray-400">Athletes Trust Us</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Athletes training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-lime-500 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center">
                <Zap className="w-12 h-12 text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Champions <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from real athletes who trust Velocity
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-6"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-lime-500 font-semibold">{testimonials[currentTestimonial].role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-lime-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-lime-500 via-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Stay in the Game
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new releases, training tips, and special offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-black placeholder-gray-500 bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent mb-4">
                VELOCITY
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Empowering athletes worldwide to reach their full potential through innovative sportswear and unwavering dedication to excellence.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="bg-gray-800 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Products</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Running Shoes</a></li>
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Training Gear</a></li>
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Basketball</a></li>
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Lifestyle</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Size Guide</a></li>
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Returns</a></li>
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Shipping</a></li>
                <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 Velocity. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;