import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ArrowRight,
  Users,
  Truck,
  Shield,
  MapPin,
  Menu,
  Search,
  Heart,
  ShoppingBag,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TownTeamLanding() {
  return (
    <div className="min-h-screen bg-white font-['var(--font-kalam)']">
      {/* Navigation */}
      <nav className="border-b-4 border-charcoal bg-white sticky top-0 z-50 sketchy-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-charcoal sketchy-box transform rotate-12"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brick-red rounded-full sketchy-circle"></div>
              </div>
              <span className="text-3xl font-black text-charcoal tracking-tight font-['var(--font-kalam)']">
                TOWN TEAM
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-colors sketchy-underline"
              >
                SHOP
              </Link>
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-colors sketchy-underline"
              >
                COLLECTIONS
              </Link>
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-colors sketchy-underline"
              >
                STYLE GUIDE
              </Link>
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-colors sketchy-underline"
              >
                ABOUT
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="sketchy-btn-ghost">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="sketchy-btn-ghost">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="sketchy-btn-ghost">
                <ShoppingBag className="w-5 h-5" />
              </Button>
              <Button className="bg-charcoal text-white hover:bg-brick-red font-bold px-6 sketchy-btn transform hover:rotate-1 transition-all">
                SHOP NOW
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-concrete-gray via-sand-beige to-white py-24 overflow-hidden">
        <div className="absolute inset-0 sketchy-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge className="bg-brick-red text-white font-bold px-6 py-3 sketchy-badge transform -rotate-2 text-lg">
                  🔥 NEW DROP ALERT
                </Badge>
                <h1 className="text-6xl md:text-8xl font-black text-charcoal leading-none font-['var(--font-permanent-marker)']">
                  STYLE THAT
                  <br />
                  <span className="text-brick-red sketchy-highlight">MOVES</span>
                  <br />
                  <span className="text-denim-blue">WITH YOU</span>
                </h1>
                <p className="text-2xl text-charcoal font-medium max-w-lg sketchy-text-shadow">
                  Urban fashion for the modern Egyptian man. Bold, confident, and street-smart since day one.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-charcoal text-white hover:bg-brick-red font-bold px-10 py-6 text-xl sketchy-btn-primary transform hover:rotate-1 transition-all"
                >
                  DISCOVER THE LOOK
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-4 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-bold px-10 py-6 text-xl sketchy-btn-outline transform hover:-rotate-1 transition-all bg-transparent"
                >
                  WATCH OUR STORY
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-charcoal">10K+</div>
                  <div className="text-sm text-charcoal font-medium">HAPPY CUSTOMERS</div>
                </div>
                <div className="w-px h-12 bg-charcoal sketchy-line"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-charcoal">500+</div>
                  <div className="text-sm text-charcoal font-medium">UNIQUE PIECES</div>
                </div>
                <div className="w-px h-12 bg-charcoal sketchy-line"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-charcoal">5★</div>
                  <div className="text-sm text-charcoal font-medium">RATED BRAND</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-denim-blue sketchy-box transform rotate-3 opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-brick-red sketchy-circle opacity-30"></div>
              <Image
                src="/hero-egyptian-man-urban.png"
                alt="Town Team Hero - Confident Egyptian man in urban setting"
                width={600}
                height={700}
                className="relative z-10 w-full h-auto sketchy-image transform -rotate-2 shadow-2xl"
              />
              <div className="absolute bottom-8 left-8 bg-white p-4 sketchy-card transform rotate-6">
                <div className="text-sm font-bold text-charcoal">CAIRO STREETS</div>
                <div className="text-xs text-charcoal">WHERE STYLE BEGINS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 sketchy-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 font-['var(--font-permanent-marker)'] transform -rotate-1">
              FEATURED COLLECTIONS
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto mb-8">
              Handpicked pieces that define the modern Egyptian street style. Each item tells a story of confidence and
              urban sophistication.
            </p>
            <div className="w-32 h-2 bg-brick-red mx-auto sketchy-line transform rotate-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "URBAN WARRIOR",
                price: "EGP 1,200",
                originalPrice: "EGP 1,500",
                category: "LEATHER JACKET",
                badge: "BESTSELLER",
                image: "leather-jacket-sketch",
              },
              {
                name: "STREET KING",
                price: "EGP 800",
                originalPrice: "EGP 950",
                category: "PREMIUM SHIRT",
                badge: "NEW",
                image: "premium-shirt-sketch",
              },
              {
                name: "CITY WALKER",
                price: "EGP 950",
                originalPrice: "EGP 1,100",
                category: "DESIGNER JEANS",
                badge: "LIMITED",
                image: "designer-jeans-sketch",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-4 border-charcoal sketchy-card-hover transform hover:rotate-1 hover:scale-105 transition-all duration-300 bg-concrete-gray overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={`/${item.image}.png`}
                      alt={`${item.name} - ${item.category}`}
                      width={400}
                      height={500}
                      className="w-full h-96 object-cover sketchy-image"
                    />
                    <Badge
                      className={`absolute top-6 left-6 font-bold transform -rotate-12 text-sm px-3 py-2 ${
                        item.badge === "BESTSELLER"
                          ? "bg-brick-red text-white"
                          : item.badge === "NEW"
                            ? "bg-denim-blue text-white"
                            : "bg-charcoal text-white"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-6 right-6 bg-white/80 hover:bg-white sketchy-btn-ghost"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-denim-blue uppercase tracking-wide">{item.category}</div>
                      <h3 className="text-2xl font-black text-charcoal font-['var(--font-kalam)']">{item.name}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl font-black text-brick-red">{item.price}</span>
                          <span className="text-lg text-gray-500 line-through">{item.originalPrice}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-brick-red text-brick-red" />
                          ))}
                          <span className="text-sm text-charcoal ml-2">(127 reviews)</span>
                        </div>
                      </div>
                      <Button className="bg-charcoal text-white hover:bg-denim-blue font-bold sketchy-btn transform hover:rotate-2 transition-all px-6">
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-4 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-bold px-12 py-6 text-xl sketchy-btn-outline bg-transparent"
            >
              VIEW ALL COLLECTIONS
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Town Team */}
      <section className="py-24 bg-sand-beige relative overflow-hidden">
        <div className="absolute inset-0 sketchy-texture opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge className="bg-denim-blue text-white font-bold px-6 py-3 sketchy-badge transform rotate-2 text-lg">
                  OUR STORY
                </Badge>
                <h2 className="text-5xl md:text-6xl font-black text-charcoal font-['var(--font-permanent-marker)'] transform -rotate-1">
                  THE TOWN TEAM
                  <br />
                  <span className="text-denim-blue sketchy-highlight">LEGACY</span>
                </h2>
                <div className="w-24 h-2 bg-brick-red sketchy-line transform rotate-3"></div>
                <p className="text-xl text-charcoal leading-relaxed">
                  Born from the vibrant streets of Cairo, Town Team represents the evolution of Egyptian urban fashion.
                  We're not just a brand – we're a movement that celebrates the confident, modern Egyptian man.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brick-red sketchy-circle flex items-center justify-center transform rotate-12 flex-shrink-0">
                    <span className="text-white font-black text-lg">1</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-charcoal font-['var(--font-kalam)']">BORN IN CAIRO</h3>
                    <p className="text-charcoal text-lg">
                      Founded in 2018 in the heart of Egypt, inspired by the raw energy and authentic style of Cairo's
                      urban landscape.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-denim-blue sketchy-circle flex items-center justify-center transform -rotate-12 flex-shrink-0">
                    <span className="text-white font-black text-lg">2</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-charcoal font-['var(--font-kalam)']">
                      STREET SMART DESIGN
                    </h3>
                    <p className="text-charcoal text-lg">
                      Every piece is crafted with the modern Egyptian man in mind – someone who owns his style and isn't
                      afraid to stand out.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brick-red sketchy-circle flex items-center justify-center transform rotate-6 flex-shrink-0">
                    <span className="text-white font-black text-lg">3</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-charcoal font-['var(--font-kalam)']">QUALITY FIRST</h3>
                    <p className="text-charcoal text-lg">
                      Premium materials meet urban aesthetics. We believe in creating pieces that last, both in style
                      and substance.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-charcoal text-white hover:bg-brick-red font-bold px-10 py-6 text-xl sketchy-btn-primary"
              >
                READ OUR FULL STORY
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-charcoal sketchy-box transform -rotate-3 opacity-20"></div>
              <div className="absolute -top-12 -left-12 w-24 h-24 border-4 border-denim-blue sketchy-circle opacity-40"></div>
              <Image
                src="/town-team-story-collage.png"
                alt="Town Team Story - Egyptian urban fashion journey"
                width={500}
                height={600}
                className="relative z-10 w-full h-auto sketchy-image transform rotate-2 shadow-xl"
              />
              <div className="absolute bottom-12 right-12 bg-white p-6 sketchy-card transform -rotate-6">
                <div className="text-lg font-black text-charcoal">EST. 2018</div>
                <div className="text-sm text-charcoal">CAIRO, EGYPT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Looks / Street Style */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 sketchy-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 font-['var(--font-permanent-marker)'] transform rotate-1">
              STREET STYLE GALLERY
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto mb-8">
              Real customers, real style. See how Town Team moves with the streets of Egypt. Tag us @townteam_egypt to
              be featured!
            </p>
            <div className="w-32 h-2 bg-denim-blue mx-auto sketchy-line transform -rotate-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "AHMED M.",
                location: "CAIRO",
                quote: "Finally, clothes that get my vibe. Town Team understands the Egyptian street.",
                image: "customer-ahmed-cairo",
              },
              {
                name: "OMAR K.",
                location: "ALEXANDRIA",
                quote: "Quality that lasts, style that speaks. Been wearing Town Team for 2 years now.",
                image: "customer-omar-alexandria",
              },
              {
                name: "HASSAN A.",
                location: "GIZA",
                quote: "Town Team gets the urban Egyptian man. Perfect fit, perfect style.",
                image: "customer-hassan-giza",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-4 border-dashed border-charcoal sketchy-polaroid transform hover:-rotate-1 hover:scale-105 transition-all duration-300 bg-white overflow-hidden"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <Image
                      src={`/${testimonial.image}.png`}
                      alt={`Customer ${testimonial.name} wearing Town Team`}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover sketchy-image transform rotate-1"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-brick-red text-white p-2 sketchy-badge transform rotate-12">
                      <Instagram className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-brick-red text-brick-red" />
                      ))}
                    </div>
                    <p className="text-charcoal font-medium italic text-lg sketchy-quote">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-black text-charcoal text-lg">{testimonial.name}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 text-brick-red" />
                          <span className="text-sm text-charcoal font-bold">{testimonial.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-denim-blue text-white font-bold sketchy-badge">VERIFIED</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-denim-blue text-white hover:bg-brick-red font-bold px-12 py-6 text-xl sketchy-btn-primary"
            >
              SHARE YOUR STYLE
              <Instagram className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features / Services */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 sketchy-waves opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['var(--font-permanent-marker)']">
              WHY CHOOSE TOWN TEAM?
            </h2>
            <div className="w-24 h-2 bg-brick-red mx-auto sketchy-line"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-brick-red sketchy-circle flex items-center justify-center mx-auto transform rotate-12">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white font-['var(--font-kalam)']">FREE DELIVERY</h3>
              <p className="text-concrete-gray text-lg leading-relaxed">
                Free shipping across Egypt on orders over EGP 500. Express delivery available in Cairo & Alexandria.
              </p>
              <div className="w-16 h-1 bg-brick-red mx-auto sketchy-line"></div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-denim-blue sketchy-circle flex items-center justify-center mx-auto transform -rotate-12">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white font-['var(--font-kalam)']">QUALITY GUARANTEE</h3>
              <p className="text-concrete-gray text-lg leading-relaxed">
                30-day return policy on all items. If you're not 100% satisfied, we'll make it right.
              </p>
              <div className="w-16 h-1 bg-denim-blue mx-auto sketchy-line"></div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-brick-red sketchy-circle flex items-center justify-center mx-auto transform rotate-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white font-['var(--font-kalam)']">STYLE COMMUNITY</h3>
              <p className="text-concrete-gray text-lg leading-relaxed">
                Join 10,000+ style-conscious Egyptian men. Get styling tips, exclusive drops, and more.
              </p>
              <div className="w-16 h-1 bg-brick-red mx-auto sketchy-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brick-red via-denim-blue to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 sketchy-lightning opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <Badge className="bg-white text-charcoal font-bold px-6 py-3 sketchy-badge text-lg">
              JOIN THE MOVEMENT
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white font-['var(--font-permanent-marker)'] transform -rotate-1">
              READY TO LEVEL UP?
            </h2>
            <p className="text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              Join the Town Team movement. Get exclusive access to new drops, styling tips, and be part of Egypt's most
              stylish community.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-lg font-bold text-charcoal sketchy-input border-4 border-white"
                />
              </div>
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-concrete-gray font-bold px-10 py-4 text-lg sketchy-btn transform hover:rotate-1 transition-all"
              >
                GET EXCLUSIVE ACCESS
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                variant="outline"
                className="border-4 border-white text-white hover:bg-white hover:text-charcoal font-bold px-10 py-4 text-lg sketchy-btn-outline transform hover:-rotate-1 transition-all bg-transparent"
              >
                SHOP COLLECTION
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-4 border-white text-white hover:bg-white hover:text-charcoal font-bold px-10 py-4 text-lg sketchy-btn-outline transform hover:rotate-1 transition-all bg-transparent"
              >
                FOLLOW ON INSTAGRAM
                <Instagram className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16 relative">
        <div className="absolute inset-0 sketchy-footer-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-brick-red sketchy-box transform rotate-12"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full sketchy-circle"></div>
                </div>
                <span className="text-3xl font-black font-['var(--font-kalam)']">TOWN TEAM</span>
              </div>
              <p className="text-concrete-gray text-lg leading-relaxed">
                Urban fashion for the modern Egyptian man. Style that moves with you, confidence that shows.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="sketchy-social-btn">
                  <Instagram className="w-6 h-6" />
                </Button>
                <Button size="sm" variant="ghost" className="sketchy-social-btn">
                  <Facebook className="w-6 h-6" />
                </Button>
                <Button size="sm" variant="ghost" className="sketchy-social-btn">
                  <MessageCircle className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-black font-['var(--font-kalam)']">SHOP</h4>
              <div className="space-y-3">
                {["New Arrivals", "Jackets & Outerwear", "Shirts & Tops", "Jeans & Pants", "Accessories"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-concrete-gray hover:text-white transition-colors text-lg sketchy-underline"
                    >
                      {item}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-black font-['var(--font-kalam)']">SUPPORT</h4>
              <div className="space-y-3">
                {["Size Guide", "Returns & Exchanges", "Shipping Info", "Contact Us", "FAQ"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-concrete-gray hover:text-white transition-colors text-lg sketchy-underline"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-black font-['var(--font-kalam)']">CONNECT</h4>
              <div className="space-y-3">
                {["Instagram", "Facebook", "WhatsApp", "TikTok", "Newsletter"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-concrete-gray hover:text-white transition-colors text-lg sketchy-underline"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-2 border-concrete-gray sketchy-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-concrete-gray text-lg">© 2024 Town Team. All rights reserved. Made with ❤️ in Egypt.</p>
              <div className="flex space-x-8">
                <Link href="#" className="text-concrete-gray hover:text-white transition-colors sketchy-underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-concrete-gray hover:text-white transition-colors sketchy-underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
