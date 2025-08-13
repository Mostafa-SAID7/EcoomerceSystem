"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, ArrowRight, Play, Users, Award, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-orange-500 bg-clip-text text-transparent">
            APEX
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
              Products
            </Link>
            <Link href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
              Collections
            </Link>
            <Link href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-lime-400 to-orange-500 text-black hover:from-lime-500 hover:to-orange-600 rounded-full px-6">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Cart
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-athlete.png" alt="Athlete in motion" fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Badge className="mb-6 bg-gradient-to-r from-lime-400/20 to-orange-500/20 text-lime-400 border-lime-400/30 rounded-full px-4 py-2">
            New Collection 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              UNLEASH YOUR
            </span>
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              POTENTIAL
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium sportswear engineered for champions. Push beyond limits with gear that moves with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-lime-400 to-orange-500 text-black hover:from-lime-500 hover:to-orange-600 rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-lime-400 hover:text-lime-400 transition-all duration-300 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Story
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-lime-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our latest innovations in performance sportswear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "AeroFlex Pro",
                price: "$189",
                category: "Running Shoes",
                image: "/aeroflex-pro.png",
              },
              {
                name: "PowerLift Elite",
                price: "$159",
                category: "Training Gear",
                image: "/powerlift-elite.png",
              },
              {
                name: "FlexMotion Tee",
                price: "$79",
                category: "Performance Wear",
                image: "/flexmotion-tee.png",
              },
              {
                name: "SpeedCore Shorts",
                price: "$99",
                category: "Athletic Shorts",
                image: "/speedcore-shorts.png",
              },
              {
                name: "EnduranceMax Jacket",
                price: "$249",
                category: "Outerwear",
                image: "/endurancemax-jacket.png",
              },
              {
                name: "GripTech Gloves",
                price: "$49",
                category: "Accessories",
                image: "/griptech-gloves.png",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-lime-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-400/10 hover:-translate-y-2 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={`${product.image}`}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-lime-400 to-orange-500 text-black rounded-full">New</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-lime-400 font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-orange-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <Button className="bg-gradient-to-r from-lime-400 to-orange-500 text-black hover:from-lime-500 hover:to-orange-600 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-lime-400/20 to-orange-500/20 text-lime-400 border-lime-400/30 rounded-full px-4 py-2">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built for Champions
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                For over two decades, APEX has been at the forefront of athletic innovation. We don't just make
                sportswear—we engineer performance solutions that help athletes push beyond their limits and achieve
                greatness.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-white">2M+</div>
                  <div className="text-sm text-gray-400">Athletes</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Awards</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-lime-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-400">Innovations</div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-lime-400 to-orange-500 text-black hover:from-lime-500 hover:to-orange-600 rounded-full px-8 py-3">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/athletes-training.png"
                alt="Athletes training"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-lime-400 to-orange-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Athletes Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trusted by professionals and enthusiasts worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marathon Runner",
                review: "APEX gear has completely transformed my training. The comfort and performance are unmatched.",
                rating: 5,
                image: "/sarah-johnson.png",
              },
              {
                name: "Mike Chen",
                role: "CrossFit Athlete",
                review: "The durability and flexibility of APEX products help me push through the toughest workouts.",
                rating: 5,
                image: "/mike-chen.png",
              },
              {
                name: "Emma Rodriguez",
                role: "Tennis Pro",
                review: "Every piece of APEX gear I own has exceeded my expectations. Quality you can feel.",
                rating: 5,
                image: "/emma-rodriguez.png",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-lime-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/10"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Image
                      src={`${review.image}`}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-lime-400 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-lime-400/10 via-orange-500/10 to-red-500/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of athletes who trust APEX for their performance needs. Your journey to greatness starts here.
          </p>
          <Button
            size="lg"
            className="group bg-gradient-to-r from-lime-400 to-orange-500 text-black hover:from-lime-500 hover:to-orange-600 rounded-full px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105"
          >
            Shop Collection
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-orange-500 bg-clip-text text-transparent mb-4">
                APEX
              </div>
              <p className="text-gray-400 mb-4">
                Premium sportswear for champions. Engineered for performance, designed for life.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Running
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-400 transition-colors">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 APEX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
