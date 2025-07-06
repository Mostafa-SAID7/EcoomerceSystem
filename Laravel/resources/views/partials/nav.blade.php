<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="{{ route('home') }}">Shop</a>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="{{ route('shop') }}">Products</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Cart</a></li>
      <li class="nav-item"><a class="nav-link" href="{{ route('login') }}">Login</a></li>
    </ul>
    <button id="darkToggle" class="btn btn-sm btn-outline-secondary ms-3">🌓</button>
  </div>
</nav>

