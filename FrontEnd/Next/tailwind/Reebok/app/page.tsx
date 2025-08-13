import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Play, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReebokLanding() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-off-white/95 backdrop-blur-sm border-b-2 border-graphite sketchy-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-classic-red sketchy-box rotate-1"></div>
              <span className="text-2xl font-bold text-graphite sketchy-text">REEBOK</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-graphite hover:text-classic-red transition-colors sketchy-underline">
                CLASSICS
              </Link>
              <Link href="#" className="text-graphite hover:text-classic-red transition-colors sketchy-underline">
                TRAINING
              </Link>
              <Link href="#" className="text-graphite hover:text-classic-red transition-colors sketchy-underline">
                RUNNING
              </Link>
              <Link href="#" className="text-graphite hover:text-classic-red transition-colors sketchy-underline">
                LIFESTYLE
              </Link>
            </div>
            <Button className="sketchy-button bg-graphite text-off-white hover:bg-classic-red">SHOP NOW</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="sketchy-badge bg-neon-green text-graphite">EST. 1958</Badge>
                <h1 className="text-6xl md:text-8xl font-black text-graphite leading-none sketchy-text">
                  CLASSIC
                  <br />
                  <span className="text-classic-red">MEETS</span>
                  <br />
                  COMEBACK
                </h1>
                <p className="text-xl text-graphite/80 max-w-md sketchy-text">
                  Where retro fitness culture collides with modern street energy. Move your way, own your style.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="sketchy-button bg-classic-red text-off-white hover:bg-graphite text-lg px-8 py-4"
                >
                  SHOP THE LOOK
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="sketchy-button border-2 border-graphite text-graphite hover:bg-graphite hover:text-off-white text-lg px-8 py-4 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  WATCH STORY
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="sketchy-frame bg-royal-blue/10 p-8 rotate-2">
                <Image
                  src="/hero-athlete-sketch.png"
                  alt="Sketchy athlete in action"
                  width={500}
                  height={600}
                  className="w-full h-auto sketchy-image"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-green sketchy-circle rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-classic-red sketchy-box -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-graphite mb-4 sketchy-text">STREET CLASSICS</h2>
            <p className="text-xl text-graphite/70 sketchy-text">Hand-picked retro pieces for the modern rebel</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "CLASSIC LEATHER", price: "$75", category: "RETRO RUNNER" },
              { name: "CLUB C 85", price: "$65", category: "COURT CLASSIC" },
              { name: "WORKOUT PLUS", price: "$70", category: "TRAINING ICON" },
            ].map((product, index) => (
              <Card
                key={index}
                className="sketchy-card bg-off-white border-2 border-graphite hover:shadow-sketchy transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="sketchy-frame bg-royal-blue/5 p-4 mb-4 rotate-1 group-hover:rotate-0 transition-transform">
                    <Image
                      src={
                        product.name === "CLASSIC LEATHER"
                          ? "/classic-leather-sketch.png"
                          : product.name === "CLUB C 85"
                            ? "/club-c-85-sketch.png"
                            : "/workout-plus-sketch.png"
                      }
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-auto sketchy-image"
                    />
                  </div>
                  <Badge className="sketchy-badge bg-neon-green/20 text-graphite mb-2">{product.category}</Badge>
                  <h3 className="text-2xl font-bold text-graphite mb-2 sketchy-text">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-classic-red sketchy-text">{product.price}</span>
                    <Button className="sketchy-button bg-graphite text-off-white hover:bg-classic-red">
                      ADD TO CART
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reebok Story Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-graphite mb-4 sketchy-text">OUR REBEL STORY</h2>
            <p className="text-xl text-graphite/70 sketchy-text">From British roots to global street culture</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-graphite sketchy-line"></div>

            <div className="space-y-16">
              {[
                { year: "1958", title: "THE BEGINNING", desc: "Founded in Bolton, England by Joe & Jeff Foster" },
                {
                  year: "1982",
                  title: "AEROBICS REVOLUTION",
                  desc: "Freestyle becomes the first athletic shoe designed for women",
                },
                { year: "1988", title: "PUMP TECHNOLOGY", desc: "Revolutionary Pump system changes the game forever" },
                { year: "2024", title: "STREET RENAISSANCE", desc: "Classic meets comeback in modern street culture" },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="sketchy-card bg-off-white border-2 border-graphite">
                      <CardContent className="p-6">
                        <Badge className="sketchy-badge bg-classic-red text-off-white mb-2">{milestone.year}</Badge>
                        <h3 className="text-2xl font-bold text-graphite mb-2 sketchy-text">{milestone.title}</h3>
                        <p className="text-graphite/70 sketchy-text">{milestone.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-green sketchy-circle border-2 border-graphite"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Style Gallery */}
      <section className="py-20 bg-royal-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-graphite mb-4 sketchy-text">STREET REBELS</h2>
            <p className="text-xl text-graphite/70 sketchy-text">Real people, real style, real attitude</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "MAYA K.",
                quote: "These classics never go out of style. Perfect for my morning runs and street fits.",
                rating: 5,
              },
              {
                name: "JORDAN T.",
                quote: "The comfort is unreal. Been wearing Reebok since the 90s and they still deliver.",
                rating: 5,
              },
              {
                name: "ALEX R.",
                quote: "Love the retro vibe. Gets compliments everywhere I go. True street cred.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="sketchy-card bg-off-white border-2 border-graphite comic-panel">
                <CardContent className="p-6">
                  <div className="sketchy-frame bg-warm-beige/30 p-4 mb-4 -rotate-1">
                    <Image
                      src={
                        testimonial.name === "MAYA K."
                          ? "/user-maya-sketch.png"
                          : testimonial.name === "JORDAN T."
                            ? "/user-jordan-sketch.png"
                            : "/user-alex-sketch.png"
                      }
                      alt={`${testimonial.name} style`}
                      width={200}
                      height={200}
                      className="w-full h-auto sketchy-image"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />
                    ))}
                  </div>
                  <p className="text-graphite/80 mb-4 italic sketchy-text">"{testimonial.quote}"</p>
                  <p className="font-bold text-graphite sketchy-text">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-graphite text-off-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-6xl font-black sketchy-text">
              READY TO
              <br />
              <span className="text-classic-red">MOVE YOUR WAY?</span>
            </h2>
            <p className="text-xl opacity-80 sketchy-text">
              Join the rebellion. Embrace the classics. Own your street style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="sketchy-button bg-classic-red text-off-white hover:bg-neon-green hover:text-graphite text-lg px-8 py-4"
              >
                SHOP CLASSICS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="sketchy-button border-2 border-off-white text-off-white hover:bg-off-white hover:text-graphite text-lg px-8 py-4 bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                JOIN COMMUNITY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-off-white border-t-2 border-graphite sketchy-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-classic-red sketchy-box rotate-1"></div>
                <span className="text-xl font-bold text-graphite sketchy-text">REEBOK</span>
              </div>
              <p className="text-graphite/70 sketchy-text">Classic meets comeback since 1958</p>
            </div>
            <div>
              <h4 className="font-bold text-graphite mb-4 sketchy-text">PRODUCTS</h4>
              <ul className="space-y-2 text-graphite/70">
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Classics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Running
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-graphite mb-4 sketchy-text">SUPPORT</h4>
              <ul className="space-y-2 text-graphite/70">
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-graphite mb-4 sketchy-text">CONNECT</h4>
              <ul className="space-y-2 text-graphite/70">
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="sketchy-underline hover:text-classic-red">
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-graphite sketchy-border mt-8 pt-8 text-center">
            <p className="text-graphite/70 sketchy-text">© 2024 Reebok. All rights reserved. Move your way.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
