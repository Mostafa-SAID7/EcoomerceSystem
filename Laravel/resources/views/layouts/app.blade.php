<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'eCommerce')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
@if(app()->getLocale() == 'ar')
  <link href="{{ asset('css/bootstrap.rtl.min.css') }}" rel="stylesheet">
@else
  <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
@endif
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
@if(app()->getLocale() == 'ar')
  <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', sans-serif; }
  </style>
@endif
</head>
<body class="d-flex flex-column min-vh-100">
    @include('partials.header')

    <main class="flex-grow-1 py-4">
        @yield('content')
    </main>

    @include('partials.footer')

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/theme-toggle.js') }}"></script>
</body>
</html>
