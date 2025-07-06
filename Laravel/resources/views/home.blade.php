@extends('layouts.app')

@section('title', 'Welcome')

@section('content')
<div class="container text-center py-5">
    <h1 class="display-4">Welcome to Our Store</h1>
    <p class="lead">Discover amazing deals from multiple vendors.</p>
    <a href="{{ route('shop') }}" class="btn btn-primary btn-lg mt-3">Shop Now</a>
</div>
@endsection
