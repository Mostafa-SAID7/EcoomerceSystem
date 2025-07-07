<?php

namespace App\Http\Controllers;

use App\Models\New_Arrivals;
use Illuminate\Http\Request;

class NewArrivalsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
  public function index()
    {
        //
        //  $products = cr::all();
         $newArrivals = collect([
    (object)[ 'name' => 'Velvet Drapes', 'description' => 'Luxurious and soft.', 'price' => 120, 'slug' => 'velvet-drapes', 'image' => 'prod1.jpg' ],
    (object)[ 'name' => 'Linen Curtains', 'description' => 'Breezy and light.', 'price' => 89.99, 'slug' => 'linen-curtains', 'image' => 'prod2.jpg' ],
    // Add more...
                            ]);
         return view('frontend.home',compact('newArrivals'));
        //  return "yigtfutghijujo8ui";
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(New_Arrivals $new_Arrivals)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(New_Arrivals $new_Arrivals)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, New_Arrivals $new_Arrivals)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(New_Arrivals $new_Arrivals)
    {
        //
    }
}
