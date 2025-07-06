@extends('layouts.app')

@section('title', 'Product Detail')

@section('content')
<div class="container py-5">
    <div class="row">
        <div class="col-md-6">
            <img src="https://source.unsplash.com/600x400/?product" class="img-fluid rounded" alt="Product Image">
        </div>
        <div class="col-md-6">
            <h2 class="fw-bold">Sample Product</h2>
            <p class="text-muted">Vendor: Example Vendor</p>
            <h4 class="text-primary">$199.00</h4>
            <p class="mt-3">This is a sample product description.</p>
            <button class="btn btn-success btn-lg">Add to Cart</button>
        </div>
    </div>
</div>
@endsection
