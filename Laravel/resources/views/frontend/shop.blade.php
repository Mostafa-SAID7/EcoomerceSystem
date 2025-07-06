@extends('layouts.app')

@section('title', 'Shop')

@section('content')
<div class="container py-4">
    <div class="row mb-4">
        <div class="col-md-3">
            <h5>Filter</h5>
            <form>
                <div class="mb-2">
                    <label class="form-label">Category</label>
                    <select class="form-select">
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Books</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label class="form-label">Price Range</label>
                    <input type="range" class="form-range">
                </div>
                <button class="btn btn-sm btn-outline-secondary">Apply</button>
            </form>
        </div>
        <div class="col-md-9">
            <div class="row">
                @for ($i = 0; $i < 6; $i++)
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="https://source.unsplash.com/300x200/?product" class="card-img-top" alt="Product">
                            <div class="card-body">
                                <h5 class="card-title">Product Title</h5>
                                <p class="card-text">$99.00</p>
                                <a href="#" class="btn btn-sm btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                @endfor
            </div>
        </div>
    </div>
</div>
@endsection
