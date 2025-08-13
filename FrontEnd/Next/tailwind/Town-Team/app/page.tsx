import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function TownTeamLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b-2 border-charcoal bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-charcoal rounded-sm transform rotate-3 group-hover:rotate-6 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-brick-red/50"></div>
              <span className="text-2xl font-black text-charcoal tracking-tight font-almarai hover:text-brick-red transition-all duration-500 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl transform hover:scale-105">
                تاون تيم
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-almarai">
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-all duration-500 hover:scale-110 hover:drop-shadow-lg relative group transform hover:-rotate-1"
              >
                متجر | SHOP
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brick-red to-denim-blue transition-all duration-500 group-hover:w-full shadow-sm"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brick-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
              </Link>
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-all duration-500 hover:scale-110 hover:drop-shadow-lg relative group transform hover:rotate-1"
              >
                ستايل | STYLE
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brick-red to-denim-blue transition-all duration-500 group-hover:w-full shadow-sm"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brick-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
              </Link>
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-all duration-500 hover:scale-110 hover:drop-shadow-lg relative group transform hover:-rotate-1"
              >
                عننا | ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brick-red to-denim-blue transition-all duration-500 group-hover:w-full shadow-sm"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brick-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
              </Link>
              <Link
                href="#"
                className="text-charcoal font-bold hover:text-brick-red transition-all duration-500 hover:scale-110 hover:drop-shadow-lg relative group transform hover:rotate-1"
              >
                تواصل | CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brick-red to-denim-blue transition-all duration-500 group-hover:w-full shadow-sm"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brick-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
              </Link>
            </div>
            <Button className="bg-charcoal text-white hover:bg-brick-red transform hover:rotate-1 hover:scale-110 transition-all duration-500 font-almarai shadow-xl hover:shadow-2xl hover:shadow-brick-red/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <lord-icon
                src="https://cdn.lordicon.com/pbrgppbb.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#b22222"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
                className="relative z-10"
              ></lord-icon>
              <span className="relative z-10">السلة | CART</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-concrete-gray via-sand-beige to-concrete-gray py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        {/* CSS-based animated shapes instead of Lottie */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
          <div className="w-full h-full border-4 border-brick-red rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-denim-blue rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-20 left-20 w-24 h-24 opacity-25">
          <div className="w-full h-full bg-gradient-to-r from-brick-red to-denim-blue transform rotate-45 animate-bounce-subtle"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-brick-red to-denim-blue text-white font-bold px-6 py-3 transform -rotate-1 font-almarai shadow-2xl hover:shadow-3xl hover:shadow-brick-red/50 hover:scale-110 transition-all duration-500 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <lord-icon
                    src="https://cdn.lordicon.com/xjovhxra.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#1e3f66"
                    style={{ width: "20px", height: "20px", marginRight: "8px" }}
                    className="relative z-10"
                  ></lord-icon>
                  <span className="relative z-10">كولكشن جديد | NEW COLLECTION</span>
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black text-charcoal leading-tight transform -rotate-1 font-almarai drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-700 animate-slide-in-left hover:scale-105 cursor-default">
                  <span className="bg-gradient-to-r from-charcoal via-denim-blue to-charcoal bg-clip-text text-transparent hover:from-brick-red hover:via-charcoal hover:to-denim-blue transition-all duration-1000">
                    أسلوب يتحرك
                  </span>
                  <br />
                  <span className="text-brick-red hover:text-denim-blue transition-colors duration-700 drop-shadow-2xl hover:animate-pulse">
                    معك
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-charcoal to-denim-blue bg-clip-text text-transparent hover:from-brick-red hover:to-charcoal transition-all duration-1000">
                    TOWN TEAM
                  </span>
                </h1>
                <p className="text-xl text-charcoal font-medium max-w-md font-almarai drop-shadow-lg animate-fade-in-up animation-delay-300 hover:text-denim-blue transition-colors duration-500">
                  أزياء عصرية للرجل المصري الحديث. جريء، واثق، وذكي في الشارع.
                  <br />
                  <span className="text-base opacity-80 hover:opacity-100 transition-opacity duration-300">
                    Urban fashion for the modern Egyptian man. Bold, confident, and street-smart.
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-charcoal to-denim-blue text-white hover:from-brick-red hover:to-charcoal transform hover:rotate-1 hover:scale-110 transition-all duration-500 font-bold text-lg px-8 py-4 font-almarai shadow-2xl hover:shadow-3xl hover:shadow-brick-red/50 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">اكتشف الإطلالة | DISCOVER THE LOOK</span>
                  <lord-icon
                    src="https://cdn.lordicon.com/zmkotitn.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#b22222"
                    style={{ width: "20px", height: "20px", marginLeft: "8px" }}
                    className="relative z-10"
                  ></lord-icon>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-charcoal text-charcoal hover:bg-gradient-to-r hover:from-charcoal hover:to-denim-blue hover:text-white transform hover:-rotate-1 hover:scale-110 transition-all duration-500 font-bold text-lg px-8 py-4 bg-white/90 backdrop-blur-sm font-almarai shadow-xl hover:shadow-2xl hover:shadow-charcoal/50 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <lord-icon
                    src="https://cdn.lordicon.com/wloilxuq.json"
                    trigger="hover"
                    colors="primary:#1a1a1a,secondary:#b22222"
                    style={{ width: "20px", height: "20px", marginRight: "8px" }}
                    className="relative z-10"
                  ></lord-icon>
                  <span className="relative z-10">شاهد القصة | WATCH STORY</span>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-denim-blue via-brick-red to-charcoal rounded-lg transform rotate-3 opacity-20 blur-lg shadow-2xl animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-brick-red via-denim-blue to-charcoal rounded-lg opacity-10 blur-2xl animate-spin-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent rounded-lg transform rotate-1 shadow-inner"></div>
              <Image
                src="/images/hero-urban-man.png"
                alt="Urban fashion sketch - confident man in Cairo cityscape"
                width={500}
                height={600}
                className="relative z-10 w-full h-auto transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-700 drop-shadow-2xl hover:drop-shadow-3xl cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* Enhanced Decorative elements with CSS animations */}
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-sand-beige to-concrete-gray transform -rotate-12 opacity-50 animate-bounce-subtle shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-denim-blue to-brick-red rounded-full opacity-20 animate-float shadow-lg"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-charcoal transform rotate-45 opacity-20 hover:opacity-40 hover:rotate-90 hover:scale-125 transition-all duration-700 shadow-lg animate-pulse"></div>
      </section>

      {/* Featured Outfits */}
      <section className="py-20 bg-gradient-to-b from-white via-concrete-gray/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sand-beige/10 to-transparent"></div>
        {/* CSS animated background elements */}
        <div className="absolute top-20 right-20 w-20 h-20 opacity-10">
          <div className="w-full h-full border-2 border-denim-blue rounded-full animate-spin-slow"></div>
          <div
            className="absolute top-2 left-2 w-16 h-16 border-2 border-brick-red rounded-full animate-spin-slow"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4 transform -rotate-1 font-almarai drop-shadow-2xl hover:drop-shadow-3xl hover:scale-105 transition-all duration-500 cursor-default">
              <span className="bg-gradient-to-r from-charcoal via-denim-blue to-brick-red bg-clip-text text-transparent hover:from-brick-red hover:via-charcoal hover:to-denim-blue transition-all duration-1000">
                إطلالات مميزة
              </span>
              <br />
              <span className="text-2xl bg-gradient-to-r from-brick-red to-denim-blue bg-clip-text text-transparent hover:from-denim-blue hover:to-brick-red transition-all duration-700">
                FEATURED LOOKS
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-brick-red via-denim-blue to-charcoal mx-auto transform rotate-1 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "محارب المدينة",
                nameEn: "URBAN WARRIOR",
                price: "١٢٠٠ جنيه",
                priceEn: "EGP 1,200",
                category: "جاكيت",
                categoryEn: "JACKET",
                image: "/images/urban-warrior-jacket.png",
              },
              {
                name: "ملك الشارع",
                nameEn: "STREET KING",
                price: "٨٠٠ جنيه",
                priceEn: "EGP 800",
                category: "قميص",
                categoryEn: "SHIRT",
                image: "/images/street-king-shirt.png",
              },
              {
                name: "ماشي المدينة",
                nameEn: "CITY WALKER",
                price: "٩٥٠ جنيه",
                priceEn: "EGP 950",
                category: "جينز",
                categoryEn: "JEANS",
                image: "/images/city-walker-jeans.png",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 border-charcoal transform hover:rotate-1 hover:scale-110 transition-all duration-700 bg-white shadow-2xl hover:shadow-3xl hover:shadow-brick-red/30 group animate-fade-in-up relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sand-beige/10 to-brick-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.name} - ${item.nameEn}`}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-brick-red to-denim-blue text-white font-bold transform -rotate-3 font-almarai shadow-xl group-hover:rotate-0 group-hover:scale-125 transition-all duration-500 hover:shadow-2xl">
                      {item.category} | {item.categoryEn}
                    </Badge>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <lord-icon
                        src="https://cdn.lordicon.com/ulnswmkk.json"
                        trigger="hover"
                        colors="primary:#b22222,secondary:#1e3f66"
                        style={{ width: "24px", height: "24px" }}
                        className="cursor-pointer"
                      ></lord-icon>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-black text-charcoal mb-2 font-almarai group-hover:text-brick-red transition-colors duration-500 drop-shadow-sm group-hover:drop-shadow-lg">
                      {item.name}
                      <br />
                      <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {item.nameEn}
                      </span>
                    </h3>
                    <p className="text-2xl font-bold text-brick-red mb-4 font-almarai drop-shadow-sm group-hover:drop-shadow-lg group-hover:scale-110 transition-all duration-300">
                      {item.price}
                      <br />
                      <span className="text-sm opacity-70">{item.priceEn}</span>
                    </p>
                    <Button className="w-full bg-gradient-to-r from-charcoal to-denim-blue text-white hover:from-brick-red hover:to-charcoal transform hover:rotate-1 hover:scale-105 transition-all duration-500 font-bold font-almarai shadow-xl hover:shadow-2xl hover:shadow-brick-red/50 group/btn relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      <lord-icon
                        src="https://cdn.lordicon.com/pbrgppbb.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#b22222"
                        style={{ width: "16px", height: "16px", marginRight: "8px" }}
                        className="relative z-10"
                      ></lord-icon>
                      <span className="relative z-10">أضف للسلة | ADD TO CART</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Town Team */}
      <section className="py-20 bg-gradient-to-br from-sand-beige via-concrete-gray/20 to-sand-beige relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal/10 to-transparent"></div>
        </div>
        {/* CSS animated background elements */}
        <div className="absolute bottom-10 left-10 w-28 h-28 opacity-15">
          <div className="w-full h-full bg-gradient-to-r from-brick-red to-denim-blue rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-charcoal rounded-full animate-spin-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-brick-red via-denim-blue to-charcoal rounded-lg opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent rounded-lg shadow-inner"></div>
                <Image
                  src="/images/brand-story-timeline.png"
                  alt="Town Team Story - Cairo urban landscape sketch"
                  width={600}
                  height={500}
                  className="relative z-10 w-full h-auto transform rotate-1 hover:-rotate-1 hover:scale-110 transition-all duration-700 drop-shadow-2xl hover:drop-shadow-3xl cursor-pointer filter hover:brightness-110"
                />
              </div>
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 transform -rotate-1 font-almarai drop-shadow-2xl hover:drop-shadow-3xl hover:scale-105 transition-all duration-500 cursor-default">
                  <span className="bg-gradient-to-r from-charcoal via-denim-blue to-brick-red bg-clip-text text-transparent hover:from-brick-red hover:via-charcoal hover:to-denim-blue transition-all duration-1000">
                    قصة تاون تيم
                  </span>
                  <br />
                  <span className="text-brick-red hover:text-denim-blue transition-colors duration-500">THE STORY</span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-brick-red via-denim-blue to-charcoal transform rotate-2 mb-6 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500"></div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    iconSrc: "https://cdn.lordicon.com/surcxhka.json",
                    color: "from-brick-red to-denim-blue",
                    title: "مولود في القاهرة | BORN IN CAIRO",
                    description: "من شوارع عاصمة مصر المزدحمة، نحن نفهم الأسلوب الحضري.",
                    descriptionEn: "From the bustling streets of Egypt's capital, we understand urban style.",
                  },
                  {
                    iconSrc: "https://cdn.lordicon.com/dxjqoygy.json",
                    color: "from-denim-blue to-charcoal",
                    title: "للرجل العصري | FOR THE MODERN MAN",
                    description: "مصمم للرجال الذين لا يخافون من التميز وإبداء رأيهم.",
                    descriptionEn: "Designed for men who aren't afraid to stand out and make a statement.",
                  },
                  {
                    iconSrc: "https://cdn.lordicon.com/abfverha.json",
                    color: "from-charcoal to-brick-red",
                    title: "أناقة خالدة | TIMELESS EDGE",
                    description: "قطع كلاسيكية بلمسة عصرية لا تخرج من الموضة أبداً.",
                    descriptionEn: "Classic pieces with a contemporary twist that never goes out of style.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 group-hover:scale-125 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}
                    >
                      <lord-icon
                        src={item.iconSrc}
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#ffffff"
                        style={{ width: "20px", height: "20px" }}
                      ></lord-icon>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal mb-2 font-almarai group-hover:text-brick-red transition-colors duration-500 drop-shadow-sm group-hover:drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-charcoal font-almarai group-hover:text-charcoal/90 transition-colors duration-300">
                        {item.description}
                        <br />
                        <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {item.descriptionEn}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Looks */}
      <section className="py-20 bg-gradient-to-b from-white via-concrete-gray/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sand-beige/10 to-transparent"></div>
        {/* CSS animated decorative elements */}
        <div className="absolute top-1/2 right-1/4 w-16 h-16 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-denim-blue to-brick-red transform rotate-45 animate-bounce-subtle"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4 transform rotate-1 font-almarai drop-shadow-2xl hover:drop-shadow-3xl hover:scale-105 transition-all duration-500 cursor-default">
              <span className="bg-gradient-to-r from-charcoal via-denim-blue to-brick-red bg-clip-text text-transparent hover:from-brick-red hover:via-charcoal hover:to-denim-blue transition-all duration-1000">
                ستايل الشارع
              </span>
              <br />
              <span className="text-2xl bg-gradient-to-r from-brick-red to-denim-blue bg-clip-text text-transparent hover:from-denim-blue hover:to-brick-red transition-all duration-700">
                STREET STYLE
              </span>
            </h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto font-almarai hover:text-denim-blue transition-colors duration-500">
              شوف إزاي مجتمعنا بيلبس قطع تاون تيم في الواقع
              <br />
              <span className="text-base opacity-70 hover:opacity-100 transition-opacity duration-300">
                See how our community rocks Town Team pieces in the real world
              </span>
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-brick-red via-denim-blue to-charcoal mx-auto mt-4 transform -rotate-1 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد م.",
                nameEn: "AHMED M.",
                location: "القاهرة",
                locationEn: "CAIRO",
                rating: 5,
                image: "/images/customer-ahmed.png",
                testimonial: "تاون تيم فاهم ستايلي. قطع عالية الجودة تخليني أحس بثقة في الشارع.",
                testimonialEn: "Town Team gets my style. Quality pieces that make me feel confident on the streets.",
              },
              {
                name: "عمر ك.",
                nameEn: "OMAR K.",
                location: "الإسكندرية",
                locationEn: "ALEXANDRIA",
                rating: 5,
                image: "/images/customer-omar.png",
                testimonial: "أزياء حقيقية للرجل المصري. تصميمات عملية وأنيقة في نفس الوقت.",
                testimonialEn: "Real fashion for Egyptian men. Practical and elegant designs at the same time.",
              },
              {
                name: "حسان أ.",
                nameEn: "HASSAN A.",
                location: "الجيزة",
                locationEn: "GIZA",
                rating: 5,
                image: "/images/customer-hassan.png",
                testimonial: "جودة ممتازة وأسعار معقولة. ده اللي كنت بدور عليه.",
                testimonialEn: "Excellent quality and reasonable prices. This is what I was looking for.",
              },
            ].map((customer, index) => (
              <Card
                key={index}
                className="border-2 border-charcoal transform hover:-rotate-1 hover:scale-110 transition-all duration-700 bg-white shadow-2xl hover:shadow-3xl hover:shadow-brick-red/30 group animate-fade-in-up relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sand-beige/10 to-brick-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={customer.image || "/placeholder.svg"}
                      alt={`${customer.name} street style`}
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover transform rotate-1 group-hover:rotate-0 group-hover:scale-125 transition-all duration-700 filter group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 border-2 border-charcoal transform rotate-12 group-hover:rotate-6 group-hover:scale-125 transition-all duration-500 shadow-xl hover:shadow-2xl">
                      <div className="flex">
                        {[...Array(customer.rating)].map((_, i) => (
                          <lord-icon
                            key={i}
                            src="https://cdn.lordicon.com/xyboiuok.json"
                            trigger="hover"
                            colors="primary:#b22222,secondary:#1e3f66"
                            style={{
                              width: "16px",
                              height: "16px",
                              animationDelay: `${i * 100}ms`,
                            }}
                          ></lord-icon>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-black text-charcoal font-almarai group-hover:text-brick-red transition-colors duration-500 drop-shadow-sm group-hover:drop-shadow-lg">
                      {customer.name}
                      <br />
                      <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {customer.nameEn}
                      </span>
                    </h3>
                    <p className="text-sm text-charcoal font-medium font-almarai mb-2 group-hover:text-denim-blue transition-colors duration-300">
                      {customer.location} | {customer.locationEn}
                    </p>
                    <p className="text-sm text-charcoal mt-2 italic font-almarai group-hover:text-charcoal/90 transition-colors duration-300">
                      "{customer.testimonial}"
                      <br />
                      <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        "{customer.testimonialEn}"
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-denim-blue to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brick-red/20 via-transparent to-brick-red/20"></div>
        {/* CSS animated background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <div className="w-full h-full border-4 border-white/30 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brick-red/30 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 opacity-15">
          <div className="w-full h-full bg-gradient-to-r from-white/20 to-brick-red/20 transform rotate-45 animate-bounce-subtle"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 transform -rotate-1 font-almarai drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-700 hover:scale-105 cursor-default">
              <span className="bg-gradient-to-r from-white via-concrete-gray to-white bg-clip-text text-transparent hover:from-brick-red hover:via-white hover:to-denim-blue transition-all duration-1000">
                مستعد تكون
              </span>
              <br />
              <span className="text-brick-red hover:text-white transition-colors duration-500 drop-shadow-2xl">
                راجل؟
              </span>
              <br />
              <span className="text-2xl opacity-80 bg-gradient-to-r from-white to-concrete-gray bg-clip-text text-transparent hover:opacity-100 transition-opacity duration-300">
                READY TO MAN UP?
              </span>
            </h2>
            <p className="text-xl text-concrete-gray max-w-2xl mx-auto font-almarai drop-shadow-lg hover:text-white transition-colors duration-500">
              انضم لمجتمع تاون تيم واكتشف أسلوبك الحضري المميز
              <br />
              <span className="text-base opacity-70 hover:opacity-100 transition-opacity duration-300">
                Join the Town Team community and discover your signature urban style
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brick-red to-denim-blue text-white hover:from-white hover:to-concrete-gray hover:text-charcoal transform hover:rotate-1 hover:scale-125 transition-all duration-500 font-bold text-lg px-8 py-4 font-almarai shadow-2xl hover:shadow-3xl hover:shadow-white/50 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <lord-icon
                  src="https://cdn.lordicon.com/xjovhxra.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#1e3f66"
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                  className="relative z-10"
                ></lord-icon>
                <span className="relative z-10">تسوق الآن | SHOP NOW</span>
                <lord-icon
                  src="https://cdn.lordicon.com/zmkotitn.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#b22222"
                  style={{ width: "20px", height: "20px", marginLeft: "8px" }}
                  className="relative z-10"
                ></lord-icon>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-gradient-to-r hover:from-white hover:to-concrete-gray hover:text-charcoal transform hover:-rotate-1 hover:scale-125 transition-all duration-500 font-bold text-lg px-8 py-4 bg-transparent backdrop-blur-sm font-almarai shadow-2xl hover:shadow-3xl hover:shadow-white/50 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <lord-icon
                  src="https://cdn.lordicon.com/ulnswmkk.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#b22222"
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                  className="relative z-10"
                ></lord-icon>
                <span className="relative z-10">تابعنا | FOLLOW US</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-white via-concrete-gray/10 to-white border-t-4 border-charcoal py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-charcoal to-denim-blue rounded-sm transform rotate-3 group-hover:rotate-6 group-hover:scale-125 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-brick-red/50"></div>
                <span className="text-2xl font-black text-charcoal font-almarai group-hover:text-brick-red transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-xl">
                  تاون تيم
                </span>
              </div>
              <p className="text-charcoal font-almarai hover:text-denim-blue transition-colors duration-300">
                أزياء حضرية للرجل المصري العصري
                <br />
                <span className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300">
                  Urban fashion for the modern Egyptian man
                </span>
              </p>
            </div>
            {[
              {
                title: "متجر | SHOP",
                links: ["وصل حديثاً | New Arrivals", "جاكيتات | Jackets", "قمصان | Shirts", "جينز | Jeans"],
              },
              {
                title: "دعم | SUPPORT",
                links: ["دليل المقاسات | Size Guide", "الشحن | Shipping", "الإرجاع | Returns", "تواصل معنا | Contact"],
              },
              {
                title: "تواصل | CONNECT",
                links: ["إنستجرام | Instagram", "فيسبوك | Facebook", "تيك توك | TikTok", "النشرة | Newsletter"],
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <h3 className="text-lg font-black text-charcoal mb-4 font-almarai hover:text-brick-red transition-colors duration-500 drop-shadow-sm hover:drop-shadow-lg cursor-default">
                  {section.title}
                </h3>
                <ul className="space-y-2 font-almarai">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-charcoal hover:text-brick-red transition-all duration-500 hover:translate-x-2 hover:drop-shadow-sm inline-block hover:scale-105 transform"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-charcoal mt-8 pt-8 text-center animate-fade-in-up animation-delay-500">
            <p className="text-charcoal font-medium font-almarai hover:text-brick-red transition-colors duration-500 cursor-default">
              © ٢٠٢٤ تاون تيم. جميع الحقوق محفوظة. صنع بـ ❤️ في مصر
              <br />
              <span className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300">
                © 2024 Town Team. All rights reserved. Made with ❤️ in Egypt
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
