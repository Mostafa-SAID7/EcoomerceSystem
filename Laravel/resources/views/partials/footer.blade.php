<footer class="bg-gray-900 text-gray-200 pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Part 1: About + Subscribe -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 class="text-xl font-semibold mb-3">About Us</h2>
                <p class="text-sm text-gray-400 mb-4">
                    We’re a modern online store offering a wide range of products with unbeatable prices and top-notch support.
                </p>
            </div>
            <div>
                <h2 class="text-xl font-semibold mb-3">Subscribe</h2>
                <form class="flex flex-col sm:flex-row items-center">
                    <input type="email" placeholder="Enter your email"
                        class="w-full sm:w-auto flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none mb-2 sm:mb-0 sm:mr-2">
                    <button type="submit"
                        class="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition">Subscribe</button>
                </form>
            </div>
        </div>

        <!-- Part 2: Footer Links -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm mb-10">
            <div>
                <h3 class="text-lg font-semibold mb-2">Main Links</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="hover:text-white">Home</a></li>
                    <li><a href="#" class="hover:text-white">About</a></li>
                    <li><a href="#" class="hover:text-white">Products</a></li>
                    <li><a href="#" class="hover:text-white">Blog</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-2">Help</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="hover:text-white">FAQ</a></li>
                    <li><a href="#" class="hover:text-white">Contact</a></li>
                    <li><a href="#" class="hover:text-white">Returns</a></li>
                    <li><a href="#" class="hover:text-white">Shipping</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-2">Account</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="hover:text-white">Login</a></li>
                    <li><a href="#" class="hover:text-white">Register</a></li>
                    <li><a href="#" class="hover:text-white">Wishlist</a></li>
                    <li><a href="#" class="hover:text-white">Orders</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-2">More</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-white">Terms of Use</a></li>
                    <li><a href="#" class="hover:text-white">Sitemap</a></li>
                    <li><a href="#" class="hover:text-white">Careers</a></li>
                </ul>
            </div>
        </div>

        <!-- Part 3: Bottom Bar -->
        <div class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <div class="mb-3 md:mb-0">
                &copy; {{ date('Y') }} MyBrand. All rights reserved.
            </div>
            <div class="flex items-center space-x-4">
                <img src="{{ asset('images/visa.png') }}" alt="Visa" class="h-6">
                <img src="{{ asset('images/mastercard.png') }}" alt="MasterCard" class="h-6">
                <img src="{{ asset('images/paypal.png') }}" alt="PayPal" class="h-6">
                <img src="{{ asset('images/amex.png') }}" alt="Amex" class="h-6">
            </div>
        </div>
    </div>
</footer>
