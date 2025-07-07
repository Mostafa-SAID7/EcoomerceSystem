<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4">

      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="{{ asset('images/logo.png') }}" alt="Logo" class="w-10 h-10 rounded-full shadow-sm">
        <span class="text-xl font-bold text-gray-800">MyBrand</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <a href="{{ url('/') }}" class="text-gray-700 hover:text-blue-600 transition hover:shadow-sm px-2 py-1 rounded">{{ __('messages.home') }}</a>
        <a href="{{ url('/about') }}" class="text-gray-700 hover:text-blue-600 transition hover:shadow-sm px-2 py-1 rounded">{{ __('messages.about') }}</a>
        <a href="{{ url('/contact') }}" class="text-gray-700 hover:text-blue-600 transition hover:shadow-sm px-2 py-1 rounded">{{ __('messages.contact') }}</a>
        <a href="{{ url('/blog') }}" class="text-gray-700 hover:text-blue-600 transition hover:shadow-sm px-2 py-1 rounded">{{ __('messages.blog') }}</a>
        <a href="{{ url('/products') }}" class="text-gray-700 hover:text-blue-600 transition hover:shadow-sm px-2 py-1 rounded">{{ __('messages.products') }}</a>
      </nav>

      <!-- User Actions -->
      <div class="flex items-center space-x-4 text-lg">
        <a href="{{ route('login') }}" title="Login" class="text-gray-700 hover:text-blue-600 transition">
          <i class="bi bi-box-arrow-in-right"></i>
        </a>
        <a href="{{ route('register') }}" title="Register" class="text-gray-700 hover:text-blue-600 transition">
          <i class="bi bi-person-plus"></i>
        </a>
        <a href="{{ url('/wishlist') }}" title="Wishlist" class="relative text-gray-700 hover:text-pink-500 transition">
          <i class="bi bi-heart"></i>
          <span class="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </a>
        <a href="{{ url('/cart') }}" title="Cart" class="relative text-gray-700 hover:text-green-600 transition">
          <i class="bi bi-cart3"></i>
          <span class="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full px-1">3</span>
        </a>

        <!-- RTL and Dark Mode Toggles -->
        <form action="{{ route('lang.switch') }}" method="POST" class="ms-3">
  @csrf
  <select name="lang" onchange="this.form.submit()" class="form-select form-select-sm">
    <option value="en" {{ app()->getLocale() == 'en' ? 'selected' : '' }}>EN</option>
    <option value="ar" {{ app()->getLocale() == 'ar' ? 'selected' : '' }}>ع</option>
  </select>
</form>
        <button id="rtlToggle" title="Toggle RTL"
          class="w-8 h-8 border border-gray-300 text-gray-600 hover:text-gray-900 rounded-md flex items-center justify-center transition">
          <i class="bi bi-layout-sidebar-inset-reverse"></i>
        </button>
        <button id="darkToggle" title="Toggle Dark Mode"
          class="w-8 h-8 border border-gray-300 text-gray-600 hover:text-gray-900 rounded-md flex items-center justify-center transition">
          <i class="bi bi-circle-half"></i>
        </button>
      </div>

    </div>
  </div>
</header>
