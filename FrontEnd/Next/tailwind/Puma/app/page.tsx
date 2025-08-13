import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Zap, Target, Users, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PumaLanding() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="relative z-50 px-4 lg:px-6 h-16 flex items-center border-b-4 border-black sketchy-border bg-white">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transform -rotate-12">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="ml-2 text-2xl font-black text-black transform rotate-1">PUMA</span>
        </div>
        <nav className="ml-auto flex gap-6">
          <Link href="#" className="text-sm font-bold hover:text-red-600 transform hover:rotate-1 transition-all">
            SPORTS
          </Link>
          <Link href="#" className="text-sm font-bold hover:text-red-600 transform hover:-rotate-1 transition-all">
            LIFESTYLE
          </Link>
          <Link href="#" className="text-sm font-bold hover:text-red-600 transform hover:rotate-1 transition-all">
            MOTORSPORT
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-yellow-400 rounded-full sketchy-border transform rotate-12 opacity-60"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border-4 border-blue-400 sketchy-border transform -rotate-45 opacity-40"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400 sketchy-border transform rotate-45 opacity-30"></div>
        </div>

        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 transform lg:-rotate-1">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-yellow-400 text-black font-black text-sm sketchy-border transform rotate-2">
                NEW COLLECTION
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-black leading-none transform -rotate-1">
                FOREVER
                <span className="block text-red-600 transform rotate-2">FASTER</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-md font-bold transform rotate-1">
                Unleash your inner beast with gear that moves as fast as your dreams. Street energy meets performance
                innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-black text-lg px-8 py-4 sketchy-border transform hover:rotate-1 hover:scale-105 transition-all duration-200"
              >
                SHOP NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-4 border-black bg-white hover:bg-yellow-400 text-black font-black text-lg px-8 py-4 sketchy-border transform hover:-rotate-1 hover:scale-105 transition-all duration-200"
              >
                EXPLORE
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative transform rotate-2 lg:rotate-0">
            <div className="relative">
              <Image
                src="/dynamic-sprinter.png"
                alt="Sprinter in motion"
                width={500}
                height={600}
                className="w-full h-auto sketchy-border border-8 border-black bg-white p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              {/* Speed lines effect */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="flex flex-col space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 bg-yellow-400 transform rotate-12 animate-pulse`}
                      style={{ width: `${60 - i * 10}px`, animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 px-4 bg-white relative">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-4 transform -rotate-1">GAME CHANGERS</h2>
            <p className="text-xl text-gray-600 font-bold transform rotate-1">
              Gear that breaks boundaries and sets new standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "SPEED RUNNERS", price: "$120", color: "bg-red-600", accent: "border-yellow-400" },
              { name: "STREET KICKS", price: "$95", color: "bg-blue-500", accent: "border-pink-400" },
              { name: "POWER TRAINERS", price: "$110", color: "bg-black", accent: "border-green-400" },
            ].map((product, index) => (
              <Card
                key={index}
                className={`sketchy-border border-4 ${product.accent} bg-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl`}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={`/modern-abstract-sculpture.png?height=250&width=300&query=modern ${product.name.toLowerCase()} sneaker`}
                      alt={product.name}
                      width={300}
                      height={250}
                      className="w-full h-48 object-cover sketchy-border border-2 border-black transform -rotate-1"
                    />
                    <div
                      className={`absolute -top-2 -right-2 w-16 h-16 ${product.color} rounded-full flex items-center justify-center transform rotate-12`}
                    >
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 transform rotate-1">{product.name}</h3>
                  <p className="text-3xl font-black text-red-600 mb-4">{product.price}</p>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-black sketchy-border transform hover:-rotate-1 transition-all">
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 text-9xl font-black text-gray-200 transform rotate-12 opacity-20">
            PUMA
          </div>
        </div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-4 transform rotate-1">OUR WILD STORY</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "PRECISION",
                desc: "Every stitch, every design, crafted for peak performance",
                color: "bg-red-600",
              },
              {
                icon: Zap,
                title: "ENERGY",
                desc: "Channeling street culture into explosive athletic innovation",
                color: "bg-yellow-400",
              },
              {
                icon: Users,
                title: "COMMUNITY",
                desc: "Building a tribe of fearless athletes and creators",
                color: "bg-blue-500",
              },
            ].map((item, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 ${item.color} rounded-full mb-6 sketchy-border border-4 border-black transform rotate-12 hover:rotate-0 transition-transform`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 transform -rotate-1">{item.title}</h3>
                <p className="text-gray-600 font-bold transform rotate-1">{item.desc}</p>
                {/* Sketchy arrow */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-400 transform rotate-12" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-4 transform -rotate-1">STREET VOICES</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "ALEX RUNNER", quote: "These kicks changed my game completely!", rating: 5, bg: "bg-yellow-400" },
              { name: "MAYA STREET", quote: "Style meets performance like never before", rating: 5, bg: "bg-pink-400" },
              { name: "JORDAN FAST", quote: "PUMA gets the street culture right", rating: 5, bg: "bg-blue-400" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.bg} p-6 sketchy-border border-4 border-black transform hover:rotate-1 hover:scale-105 transition-all duration-300 relative`}
              >
                <Quote className="h-8 w-8 text-black mb-4 transform rotate-12" />
                <p className="text-black font-bold text-lg mb-4 transform -rotate-1">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-black transform rotate-1">{testimonial.name}</span>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-black text-black transform rotate-12" />
                    ))}
                  </div>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black transform rotate-12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 to-yellow-400/20"></div>
        </div>

        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl font-black text-white mb-6 transform -rotate-1">
            READY TO GO
            <span className="block text-yellow-400 transform rotate-2">FOREVER FASTER?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-bold transform rotate-1">
            Join the movement. Embrace the energy. Unleash your potential.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-black text-2xl px-12 py-6 sketchy-border border-4 border-white transform hover:scale-110 hover:rotate-1 transition-all duration-300"
          >
            START YOUR JOURNEY
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sketchy-border border-t-4 border-yellow-400">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transform -rotate-12">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <span className="ml-2 text-2xl font-black transform rotate-1">PUMA</span>
              </div>
              <p className="text-gray-400 font-bold">Forever Faster. Forever Bold.</p>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 transform -rotate-1">SPORTS</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Running
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Football
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 transform rotate-1">LIFESTYLE</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Sneakers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 transform -rotate-1">CONNECT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 font-bold">
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-bold transform rotate-1">© 2024 PUMA. All rights reserved. Stay Wild.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
