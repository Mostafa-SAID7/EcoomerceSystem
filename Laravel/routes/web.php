<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Product;
use App\Http\Controllers\LangController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Auth::routes();
// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/', function () {
//     return view('frontend.home');
// })->name('home');

// Route::get('/shop', [ShopController::class, 'index'])->name('shop');

Route::get('/shop', function () {
    return view('frontend.shop');
})->name('shop');

// Route::get('/product/{id}', function ($id) {
//     return view('frontend.product');
// })->name('product.detail');

  Route::get('/', [Product::class, 'index']);
  Route::get('/product', function () {
    return view('frontend.product');
  });
  Route::get('/product', [Product::class, 'show'])->name('product.show');
// Route::get('/', function (){
//     return view('frontend.home');
// });

Route::post('/language-switch', [LangController::class, 'switch'])->name('lang.switch');

