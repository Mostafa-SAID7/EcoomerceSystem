"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight, Play, Users, Target, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdidasSketchyLanding() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="relative px-4 lg:px-6 h-16 flex items-center border-b-4 border-black sketchy-border">
        <Link href="/" className="flex items-center justify-center sketchy-rotate-1">
          <div className="text-2xl font-bold text-black sketchy-text">adidas</div>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="#" className="text-sm font-medium hover:text-blue-600 sketchy-underline transition-colors">
            Sports
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-blue-600 sketchy-underline transition-colors">
            Lifestyle
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-blue-600 sketchy-underline transition-colors">
            Originals
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-blue-600 sketchy-underline transition-colors">
            Sale
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 sketchy-rotate-1">
              <div className="inline-block bg-blue-100 px-4 py-2 sketchy-border border-2 border-blue-600 sketchy-rotate-2">
                <span className="text-blue-800 font-bold text-sm">NEW COLLECTION</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black sketchy-text leading-tight">
                MOVE
                <br />
                <span className="text-blue-600">FREELY</span>
                <br />
                CREATE
                <br />
                <span className="sketchy-highlight">BOLDLY</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-md sketchy-text">
                Unleash your potential with gear that moves with you. Every step, every jump, every dream - we've got
                you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="sketchy-button bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-bold border-4 border-black">
                  SHOP NOW
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="sketchy-button-outline px-8 py-6 text-lg font-bold border-4 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  WATCH STORY
                </Button>
              </div>
            </div>
            <div className="relative sketchy-rotate-2">
              <div className="sketchy-border border-4 border-black bg-blue-50 p-4">
                <Image
                  src="/images/hero-athlete.png"
                  alt="Athlete in motion"
                  width={500}
                  height={600}
                  className="w-full h-auto sketchy-image"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-300 px-4 py-2 sketchy-border border-3 border-black sketchy-rotate-3">
                <span className="font-bold text-black">LIMITLESS!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16 sketchy-rotate-1">
            <h2 className="text-3xl md:text-5xl font-black text-black sketchy-text mb-4">
              GEAR THAT <span className="sketchy-highlight">INSPIRES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto sketchy-text">
              From the streets to the stadium, our latest drops are designed for those who dare to be different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ULTRABOOST 23",
                price: "$180",
                image: "/images/ultraboost-shoe.png",
                badge: "BESTSELLER",
              },
              {
                title: "FORUM LOW",
                price: "$100",
                image: "/images/forum-low-shoe.png",
                badge: "CLASSIC",
              },
              {
                title: "NMD_R1",
                price: "$140",
                image: "/images/nmd-shoe.png",
                badge: "TRENDING",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className={`sketchy-border border-4 border-black bg-gray-50 sketchy-rotate-${(index % 3) + 1} hover:sketchy-rotate-hover transition-transform`}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover sketchy-image"
                    />
                    <div className="absolute -top-2 -right-2 bg-red-400 px-3 py-1 sketchy-border border-2 border-black sketchy-rotate-2">
                      <span className="text-xs font-bold text-black">{product.badge}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black sketchy-text mb-2">{product.title}</h3>
                  <p className="text-2xl font-black text-blue-600 sketchy-text mb-4">{product.price}</p>
                  <Button className="w-full sketchy-button-outline border-3 border-black text-black hover:bg-black hover:text-white font-bold">
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Mission */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="sketchy-rotate-1">
              <div className="sketchy-border border-4 border-blue-600 bg-white p-8">
                <Image
                  src="/images/athletes-training.png"
                  alt="Athletes training together"
                  width={500}
                  height={400}
                  className="w-full h-auto sketchy-image"
                />
              </div>
            </div>
            <div className="space-y-8 sketchy-rotate-2">
              <div className="inline-flex items-center gap-2 bg-yellow-300 px-4 py-2 sketchy-border border-2 border-black">
                <Target className="h-5 w-5" />
                <span className="font-bold text-black">OUR MISSION</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-black sketchy-text leading-tight">
                THROUGH SPORT,
                <br />
                WE HAVE THE
                <br />
                <span className="text-blue-600">POWER TO</span>
                <br />
                <span className="sketchy-highlight">CHANGE LIVES</span>
              </h2>
              <p className="text-lg text-gray-700 sketchy-text">
                We believe that sport has the power to change lives. That's why we're committed to creating products
                that help athletes of all levels achieve their goals and express their unique style.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Sustainability", "Innovation", "Community", "Performance"].map((value, index) => (
                  <div
                    key={index}
                    className={`bg-white px-4 py-2 sketchy-border border-2 border-gray-800 sketchy-rotate-${(index % 2) + 1}`}
                  >
                    <span className="font-bold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16 sketchy-rotate-1">
            <h2 className="text-3xl md:text-5xl font-black text-black sketchy-text mb-4">
              REAL STORIES,
              <br />
              <span className="sketchy-highlight">REAL PEOPLE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto sketchy-text">
              Hear from the athletes, creators, and dreamers who make our community amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maya Chen",
                role: "Street Dancer",
                story: "These shoes give me the confidence to express myself on any surface. The grip is incredible!",
                rating: 5,
                image: "/images/maya-dancer.png",
              },
              {
                name: "Jake Rodriguez",
                role: "Marathon Runner",
                story: "I've run 3 marathons in these. The comfort and support are unmatched. Game changer!",
                rating: 5,
                image: "/images/jake-runner.png",
              },
              {
                name: "Zara Ahmed",
                role: "Basketball Player",
                story: "From practice to the streets, these adapt to my style. Love the bold design!",
                rating: 5,
                image: "/images/zara-basketball.png",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className={`sketchy-border border-4 border-black bg-gray-50 sketchy-rotate-${(index % 3) + 1} hover:sketchy-rotate-hover transition-transform`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={200}
                      height={200}
                      className="w-20 h-20 rounded-full mx-auto sketchy-border border-3 border-black sketchy-image"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 sketchy-text italic">"{story.story}"</p>
                  <h4 className="font-bold text-black sketchy-text">{story.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{story.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8 sketchy-rotate-1">
            <h2 className="text-3xl md:text-6xl font-black sketchy-text leading-tight">
              READY TO
              <br />
              <span className="text-blue-400">MAKE YOUR</span>
              <br />
              <span className="sketchy-highlight-white">MARK?</span>
            </h2>
            <p className="text-xl text-gray-300 sketchy-text">
              Join millions of athletes who trust adidas to fuel their passion and push their limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="sketchy-button bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-bold border-4 border-white">
                <Users className="mr-2 h-5 w-5" />
                JOIN THE COMMUNITY
              </Button>
              <Button
                variant="outline"
                className="sketchy-button-outline px-8 py-6 text-lg font-bold border-4 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
              >
                <Zap className="mr-2 h-5 w-5" />
                EXPLORE COLLECTION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t-4 border-white sketchy-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="sketchy-rotate-1">
              <h3 className="text-2xl font-bold mb-4 sketchy-text">adidas</h3>
              <p className="text-gray-400 sketchy-text">
                Impossible is Nothing. We create products that help athletes achieve their goals.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 sketchy-text">PRODUCTS</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Clothing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sketchy-text">SUPPORT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sketchy-text">COMPANY</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white sketchy-underline">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center sketchy-border">
            <p className="text-gray-400 sketchy-text">
              © {new Date().getFullYear()} adidas. All rights reserved. Impossible is Nothing.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .sketchy-border {
          border-radius: 15px 5px 20px 8px / 8px 20px 5px 15px;
        }
        
        .sketchy-rotate-1 {
          transform: rotate(-0.5deg);
        }
        
        .sketchy-rotate-2 {
          transform: rotate(0.8deg);
        }
        
        .sketchy-rotate-3 {
          transform: rotate(-1.2deg);
        }
        
        .sketchy-rotate-hover:hover {
          transform: rotate(0deg) scale(1.02);
        }
        
        .sketchy-text {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          text-shadow: 1px 1px 0px rgba(0,0,0,0.1);
        }
        
        .sketchy-button {
          border-radius: 12px 4px 15px 6px / 6px 15px 4px 12px;
          transform: rotate(-0.3deg);
          transition: all 0.2s ease;
        }
        
        .sketchy-button:hover {
          transform: rotate(0deg) scale(1.05);
        }
        
        .sketchy-button-outline {
          border-radius: 12px 4px 15px 6px / 6px 15px 4px 12px;
          transform: rotate(0.3deg);
          transition: all 0.2s ease;
          background: white;
        }
        
        .sketchy-button-outline:hover {
          transform: rotate(0deg) scale(1.05);
        }
        
        .sketchy-underline {
          position: relative;
        }
        
        .sketchy-underline:hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: currentColor;
          border-radius: 50px;
          transform: rotate(-0.5deg);
        }
        
        .sketchy-highlight {
          background: linear-gradient(120deg, #fbbf24 0%, #fbbf24 100%);
          background-repeat: no-repeat;
          background-size: 100% 40%;
          background-position: 0 80%;
          transform: rotate(-0.3deg);
          display: inline-block;
        }
        
        .sketchy-highlight-white {
          background: linear-gradient(120deg, #60a5fa 0%, #60a5fa 100%);
          background-repeat: no-repeat;
          background-size: 100% 40%;
          background-position: 0 80%;
          transform: rotate(-0.3deg);
          display: inline-block;
        }
        
        .sketchy-image {
          filter: contrast(1.1) brightness(1.05);
        }
        
        @media (max-width: 768px) {
          .sketchy-rotate-1,
          .sketchy-rotate-2,
          .sketchy-rotate-3 {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}
