import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Zap, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UnderArmourLanding() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-black border-b-4 border-red-600 sketchy-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-red-600" />
            <span className="text-white text-2xl font-black tracking-wider">UNDER ARMOUR</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-gray-300 hover:text-red-600 font-bold uppercase tracking-wide transition-colors"
            >
              Men
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-red-600 font-bold uppercase tracking-wide transition-colors"
            >
              Women
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-red-600 font-bold uppercase tracking-wide transition-colors"
            >
              Shoes
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-red-600 font-bold uppercase tracking-wide transition-colors"
            >
              Sports
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="sketchy-border bg-red-600 inline-block px-4 py-2 transform -rotate-1">
                <span className="text-white font-black text-sm uppercase tracking-widest">No Excuses</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black uppercase leading-none tracking-tight">
                THE ONLY WAY
                <br />
                <span className="text-red-600">IS THROUGH</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-bold max-w-lg leading-relaxed">
                Push beyond limits. Break through barriers. Dominate every rep, every mile, every moment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="sketchy-btn bg-red-600 hover:bg-red-700 text-white font-black text-lg px-8 py-4 uppercase tracking-wide transform hover:scale-105 transition-all">
                  Train Now
                </Button>
                <Button
                  variant="outline"
                  className="sketchy-btn-outline border-2 border-white text-white hover:bg-white hover:text-black font-black text-lg px-8 py-4 uppercase tracking-wide bg-transparent"
                >
                  Shop Gear
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="sketchy-frame bg-gray-900 p-4 transform rotate-1">
                <Image
                  src="/intense-athlete-training-sketch.png"
                  alt="Focused athlete training"
                  width={500}
                  height={600}
                  className="w-full h-auto filter grayscale contrast-125"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sketchy-border bg-red-600 px-6 py-3 transform rotate-2">
                <span className="text-white font-black text-lg uppercase">Protect This House</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sketchy divider */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-red-600 sketchy-divider"></div>
      </section>

      {/* Featured Gear Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase text-black mb-4 tracking-tight">
              Battle-Tested <span className="text-red-600">Gear</span>
            </h2>
            <div className="sketchy-underline mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "HeatGear Training Shirt", price: "$35", category: "Apparel" },
              { name: "HOVR Phantom 3", price: "$140", category: "Footwear" },
              { name: "Project Rock Gym Bag", price: "$75", category: "Accessories" },
            ].map((item, index) => (
              <Card
                key={index}
                className="sketchy-card bg-white border-4 border-black transform hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="sketchy-frame bg-gray-900 p-4 mb-6">
                    <Image
                      src={`/athletic-gear-display.png?height=250&width=300&query=under armour ${item.category.toLowerCase()} sketch style`}
                      alt={item.name}
                      width={300}
                      height={250}
                      className="w-full h-auto filter grayscale"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="sketchy-border bg-red-600 inline-block px-3 py-1">
                      <span className="text-white font-bold text-xs uppercase">{item.category}</span>
                    </div>
                    <h3 className="font-black text-xl text-black uppercase">{item.name}</h3>
                    <p className="text-2xl font-black text-red-600">{item.price}</p>
                    <Button className="sketchy-btn-outline w-full border-2 border-black text-black hover:bg-black hover:text-white font-black uppercase">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Our <span className="text-red-600">Mission</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Precision", desc: "Every detail engineered for peak performance" },
                { icon: Zap, title: "Power", desc: "Unleash your potential with cutting-edge technology" },
                { icon: Award, title: "Excellence", desc: "Champions choose Under Armour for a reason" },
              ].map((item, index) => (
                <div key={index} className="sketchy-card bg-gray-900 p-8 border-2 border-red-600">
                  <item.icon className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                  <p className="text-gray-300 font-bold">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="sketchy-divider-horizontal bg-red-600 h-1 max-w-md mx-auto"></div>

            <blockquote className="text-2xl lg:text-3xl font-black uppercase italic text-center">
              "It's what you do in the dark that puts you in the light."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase text-black mb-4 tracking-tight">
              Warrior <span className="text-red-600">Voices</span>
            </h2>
            <div className="sketchy-underline mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Under Armour doesn't just make gear. They make warriors.",
                author: "Sarah M.",
                sport: "CrossFit Athlete",
              },
              {
                quote: "When the game is on the line, I trust Under Armour.",
                author: "Marcus J.",
                sport: "Basketball Player",
              },
              {
                quote: "Every mile, every rep, every drop of sweat - UA is with me.",
                author: "Elena R.",
                sport: "Marathon Runner",
              },
            ].map((testimonial, index) => (
              <div key={index} className="sketchy-card bg-white p-8 border-4 border-black relative">
                <div className="absolute -top-4 -left-4 sketchy-border bg-red-600 w-8 h-8 flex items-center justify-center">
                  <span className="text-white font-black text-xl">"</span>
                </div>
                <blockquote className="text-lg font-bold text-black mb-6 italic">{testimonial.quote}</blockquote>
                <div className="sketchy-divider-horizontal bg-gray-300 h-0.5 mb-4"></div>
                <div>
                  <p className="font-black text-black uppercase">{testimonial.author}</p>
                  <p className="text-red-600 font-bold text-sm uppercase">{testimonial.sport}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">
              Ready to <span className="text-red-600">Dominate?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 font-bold">
              Join the ranks of elite athletes who choose Under Armour. Your journey to greatness starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="sketchy-btn bg-red-600 hover:bg-red-700 text-white font-black text-xl px-12 py-6 uppercase tracking-wide">
                Shop Now
              </Button>
              <Button
                variant="outline"
                className="sketchy-btn-outline border-2 border-white text-white hover:bg-white hover:text-black font-black text-xl px-12 py-6 uppercase tracking-wide bg-transparent"
              >
                Find a Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t-4 border-red-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-red-600" />
                <span className="text-white text-xl font-black tracking-wider">UNDER ARMOUR</span>
              </div>
              <p className="text-gray-400 font-bold">Empowering athletes to push beyond limits since 1996.</p>
            </div>

            {[
              { title: "Products", links: ["Men", "Women", "Kids", "Shoes", "Accessories"] },
              { title: "Sports", links: ["Basketball", "Football", "Running", "Training", "Golf"] },
              { title: "Support", links: ["Size Guide", "Returns", "Shipping", "Contact", "FAQ"] },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-black text-white uppercase mb-4 tracking-wide">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-red-600 font-bold transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sketchy-divider-horizontal bg-red-600 h-1 my-8"></div>

          <div className="text-center">
            <p className="text-gray-400 font-bold">
              © {new Date().getFullYear()} Under Armour, Inc. All rights reserved. Protect This House.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
