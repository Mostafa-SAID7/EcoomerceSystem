import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, Users, Zap, Eye, Crown, Pyramid } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OhannaLanding() {
  return (
    <div className="min-h-screen bg-[#FDF8EF] text-[#1B1B1B] overflow-x-hidden">
      {/* Navigation */}
      <nav className="relative border-b-4 border-[#1B1B1B] bg-[#FDF8EF] p-4 sketchy-border">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye className="h-8 w-8 text-[#C89D29]" />
            <span className="text-2xl font-bold tracking-wider hieroglyph-font">OHANNA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="font-semibold hover:text-[#C89D29] transition-colors">
              COLLECTION
            </Link>
            <Link href="#" className="font-semibold hover:text-[#C89D29] transition-colors">
              STORY
            </Link>
            <Link href="#" className="font-semibold hover:text-[#C89D29] transition-colors">
              CULTURE
            </Link>
            <Link href="#" className="font-semibold hover:text-[#C89D29] transition-colors">
              CONTACT
            </Link>
          </div>
          <Button className="bg-[#1B1B1B] text-[#FDF8EF] hover:bg-[#C89D29] sketchy-button">
            <ShoppingBag className="h-4 w-4 mr-2" />
            SHOP
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E4D5B7] to-[#FDF8EF] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl text-[#C89D29]">𓂀</div>
          <div className="absolute top-32 right-20 text-4xl text-[#1D4D4F]">𓅃</div>
          <div className="absolute bottom-20 left-32 text-5xl text-[#AE1C1C]">𓋹</div>
          <div className="absolute bottom-40 right-10 text-3xl text-[#213D9A]">𓊖</div>
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <Badge className="bg-[#C89D29] text-[#1B1B1B] sketchy-border text-lg px-4 py-2">ANCIENT POWER</Badge>
              <h1 className="text-5xl md:text-7xl font-black leading-tight hieroglyph-font">
                REVIVING
                <br />
                <span className="text-[#C89D29]">ROOTS</span>
                <br />
                IN STYLE
              </h1>
              <p className="text-xl text-[#1B1B1B]/80 max-w-lg leading-relaxed">
                Where pharaonic heritage meets street rebellion. Ohanna brings ancient Egyptian power to modern urban
                fashion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#1B1B1B] text-[#FDF8EF] hover:bg-[#C89D29] hover:text-[#1B1B1B] sketchy-button text-lg px-8 py-4"
              >
                SHOP THE CULTURE
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#FDF8EF] sketchy-button text-lg px-8 py-4 bg-transparent"
              >
                DISCOVER STORY
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C89D29]">10K+</div>
                <div className="text-sm text-[#1B1B1B]/60">MODERN PHARAOHS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C89D29]">5000+</div>
                <div className="text-sm text-[#1B1B1B]/60">YEARS OF HERITAGE</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sketchy-border-thick bg-[#FDF8EF] p-4 transform rotate-2">
              <Image
                src="/streetwear-egyptian-sketch.png"
                alt="Modern pharaoh streetwear model"
                width={500}
                height={600}
                className="w-full h-auto sketchy-border"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-[#C89D29] text-[#1B1B1B] p-3 sketchy-border transform -rotate-12">
              <Crown className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-[#FDF8EF] relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23C89D29' fillOpacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l-15-15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-16 bg-[#C89D29] sketchy-line mr-4"></div>
              <Eye className="h-8 w-8 text-[#C89D29]" />
              <div className="h-1 w-16 bg-[#C89D29] sketchy-line ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black hieroglyph-font mb-4">SACRED STREETWEAR</h2>
            <p className="text-xl text-[#1B1B1B]/70 max-w-2xl mx-auto">
              Each piece carries the power of ancient symbols into modern rebellion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "HORUS HOODIE",
                price: "₹4,999",
                image: "hand-drawn sketch of oversized hoodie with Eye of Horus and wing patterns",
                badge: "BESTSELLER",
              },
              {
                name: "ANKH TEE",
                price: "₹2,499",
                image: "hand-drawn sketch of streetwear t-shirt with large ankh symbol and hieroglyphic details",
                badge: "LIMITED",
              },
              {
                name: "PHARAOH JACKET",
                price: "₹7,999",
                image: "hand-drawn sketch of bomber jacket with scarab beetle and pyramid patterns",
                badge: "NEW",
              },
              {
                name: "NILE JOGGERS",
                price: "₹3,499",
                image: "hand-drawn sketch of streetwear joggers with Egyptian wave patterns and hieroglyphs",
                badge: "TRENDING",
              },
              {
                name: "CLEOPATRA CAP",
                price: "₹1,999",
                image: "hand-drawn sketch of snapback cap with golden Egyptian crown design",
                badge: "EXCLUSIVE",
              },
              {
                name: "OSIRIS BACKPACK",
                price: "₹5,499",
                image: "hand-drawn sketch of urban backpack with Egyptian god motifs and hieroglyphic straps",
                badge: "UTILITY",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="sketchy-border-thick bg-[#FDF8EF] hover:bg-[#E4D5B7] transition-all duration-300 transform hover:-rotate-1"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=400&width=350&query=${item.image}`}
                      alt={item.name}
                      width={350}
                      height={400}
                      className="w-full h-64 object-cover sketchy-border-bottom"
                    />
                    <Badge
                      className={`absolute top-4 right-4 ${
                        item.badge === "BESTSELLER"
                          ? "bg-[#C89D29]"
                          : item.badge === "LIMITED"
                            ? "bg-[#AE1C1C]"
                            : item.badge === "NEW"
                              ? "bg-[#1D4D4F]"
                              : item.badge === "TRENDING"
                                ? "bg-[#213D9A]"
                                : "bg-[#1B1B1B]"
                      } text-[#FDF8EF] sketchy-border`}
                    >
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 hieroglyph-font">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#C89D29]">{item.price}</span>
                      <Button
                        size="sm"
                        className="bg-[#1B1B1B] text-[#FDF8EF] hover:bg-[#C89D29] hover:text-[#1B1B1B] sketchy-button"
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ohanna Story */}
      <section className="py-20 bg-[#E4D5B7] relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#1B1B1B] text-[#FDF8EF] sketchy-border text-lg px-4 py-2 mb-4">
                  THE OHANNA LEGACY
                </Badge>
                <h2 className="text-4xl md:text-6xl font-black hieroglyph-font mb-6">
                  FROM ANCIENT
                  <br />
                  <span className="text-[#C89D29]">TEMPLES</span>
                  <br />
                  TO STREET
                </h2>
                <p className="text-lg text-[#1B1B1B]/80 leading-relaxed mb-6">
                  Born from the fusion of 5000-year-old Egyptian heritage and contemporary urban culture, Ohanna
                  represents the eternal power of ancient symbols in modern form. Each design tells a story of pharaohs,
                  gods, and the timeless rebellion of youth.
                </p>
                <p className="text-lg text-[#1B1B1B]/80 leading-relaxed">
                  We don't just make clothes – we craft cultural armor for the modern pharaohs of the street.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center sketchy-border bg-[#FDF8EF] p-4">
                  <Pyramid className="h-8 w-8 text-[#C89D29] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1B1B1B]">HERITAGE</div>
                  <div className="text-sm text-[#1B1B1B]/60">Ancient Roots</div>
                </div>
                <div className="text-center sketchy-border bg-[#FDF8EF] p-4">
                  <Zap className="h-8 w-8 text-[#C89D29] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1B1B1B]">REBELLION</div>
                  <div className="text-sm text-[#1B1B1B]/60">Modern Edge</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sketchy-border-thick bg-[#FDF8EF] p-4 transform -rotate-2">
                <Image
                  src="/egyptian-streetwear-timeline.png"
                  alt="Ohanna heritage timeline"
                  width={400}
                  height={500}
                  className="w-full h-auto sketchy-border"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#AE1C1C] text-[#FDF8EF] p-3 sketchy-border transform rotate-12">
                <span className="text-2xl">𓋹</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Showcase */}
      <section className="py-20 bg-[#1B1B1B] text-[#FDF8EF] relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-8xl text-[#C89D29]">𓂀</div>
          <div className="absolute bottom-20 right-20 text-6xl text-[#C89D29]">𓅃</div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black hieroglyph-font mb-4 text-[#FDF8EF]">
              MODERN PHARAOHS
              <br />
              <span className="text-[#C89D29]">OF THE STREET</span>
            </h2>
            <p className="text-xl text-[#FDF8EF]/70 max-w-2xl mx-auto">
              See how our community rocks ancient power in contemporary style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "MAYA K.",
                location: "Mumbai",
                quote: "Ohanna makes me feel like a modern Cleopatra ruling the streets!",
                image: "hand-drawn sketch portrait of young woman wearing Ohanna streetwear with Egyptian jewelry",
              },
              {
                name: "ARJUN S.",
                location: "Delhi",
                quote: "The Horus hoodie is pure fire. Ancient power meets street credibility.",
                image: "hand-drawn sketch portrait of young man in Ohanna hoodie with hieroglyphic patterns",
              },
              {
                name: "PRIYA M.",
                location: "Bangalore",
                quote: "Finally, fashion that represents my heritage with modern attitude.",
                image: "hand-drawn sketch portrait of young woman styling Ohanna pieces with traditional accessories",
              },
              {
                name: "ROHIT T.",
                location: "Pune",
                quote: "Wearing Ohanna is like carrying the power of pharaohs in my DNA.",
                image: "hand-drawn sketch portrait of young man in complete Ohanna streetwear outfit",
              },
              {
                name: "KAVYA R.",
                location: "Chennai",
                quote: "The quality and cultural depth of Ohanna is unmatched.",
                image: "hand-drawn sketch portrait of young woman wearing Ohanna jacket with Egyptian motifs",
              },
              {
                name: "VIKRAM J.",
                location: "Kolkata",
                quote: "Ancient symbols, modern rebellion. This is my uniform.",
                image: "hand-drawn sketch portrait of young man in Ohanna streetwear with Egyptian accessories",
              },
            ].map((customer, index) => (
              <Card
                key={index}
                className="sketchy-border-thick bg-[#FDF8EF] text-[#1B1B1B] hover:bg-[#E4D5B7] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=60&width=60&query=${customer.image}`}
                      alt={customer.name}
                      width={60}
                      height={60}
                      className="rounded-full sketchy-border"
                    />
                    <div>
                      <h4 className="font-bold hieroglyph-font">{customer.name}</h4>
                      <p className="text-sm text-[#1B1B1B]/60">{customer.location}</p>
                    </div>
                  </div>
                  <p className="text-[#1B1B1B]/80 italic">"{customer.quote}"</p>
                  <div className="flex text-[#C89D29] mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C89D29] to-[#E4D5B7] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 text-6xl text-[#1B1B1B]">𓋹</div>
          <div className="absolute bottom-10 right-20 text-6xl text-[#1B1B1B]">𓂀</div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black hieroglyph-font text-[#1B1B1B]">
              CLAIM YOUR
              <br />
              <span className="text-[#FDF8EF]">PHARAOH STATUS</span>
            </h2>
            <p className="text-xl text-[#1B1B1B]/80 max-w-2xl mx-auto">
              Join the revolution where ancient power meets modern rebellion. Your street kingdom awaits.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#1B1B1B] text-[#FDF8EF] hover:bg-[#FDF8EF] hover:text-[#1B1B1B] sketchy-button text-xl px-12 py-6"
              >
                <Crown className="h-6 w-6 mr-3" />
                SHOP COLLECTION
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#FDF8EF] sketchy-button text-xl px-12 py-6 bg-transparent"
              >
                <Users className="h-6 w-6 mr-3" />
                JOIN COMMUNITY
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-[#1B1B1B]/60 mb-4">Follow the pharaohs</p>
              <div className="flex justify-center space-x-6">
                <Link href="#" className="text-[#1B1B1B] hover:text-[#FDF8EF] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-8 h-8 bg-[#1B1B1B] rounded sketchy-border"></div>
                </Link>
                <Link href="#" className="text-[#1B1B1B] hover:text-[#FDF8EF] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-8 h-8 bg-[#1B1B1B] rounded sketchy-border"></div>
                </Link>
                <Link href="#" className="text-[#1B1B1B] hover:text-[#FDF8EF] transition-colors">
                  <span className="sr-only">TikTok</span>
                  <div className="w-8 h-8 bg-[#1B1B1B] rounded sketchy-border"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1B1B] text-[#FDF8EF] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-8 w-8 text-[#C89D29]" />
                <span className="text-2xl font-bold hieroglyph-font">OHANNA</span>
              </div>
              <p className="text-[#FDF8EF]/70">Ancient power. Modern form. Street rebellion with pharaonic heritage.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 hieroglyph-font">COLLECTION</h4>
              <ul className="space-y-2 text-[#FDF8EF]/70">
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Hoodies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    T-Shirts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Jackets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 hieroglyph-font">SUPPORT</h4>
              <ul className="space-y-2 text-[#FDF8EF]/70">
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 hieroglyph-font">CONNECT</h4>
              <ul className="space-y-2 text-[#FDF8EF]/70">
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#C89D29] transition-colors">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FDF8EF]/20 mt-12 pt-8 text-center">
            <p className="text-[#FDF8EF]/60">© 2024 Ohanna. Ancient heritage, modern rebellion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
