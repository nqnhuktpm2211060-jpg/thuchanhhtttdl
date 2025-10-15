<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RestaurantController;

// ✅ Khi vào http://127.0.0.1:8000 → Laravel tự redirect sang /restaurants
Route::get('/', function () {
    return redirect('/restaurants');
});

Route::get('/restaurants', [RestaurantController::class, 'index']);
Route::get('/restaurants/{id}', [RestaurantController::class, 'show']);
Route::get('/restaurants', [RestaurantController::class, 'index'])->name('restaurants.index');
Route::get('/restaurants/{id}', [RestaurantController::class, 'show'])->name('restaurants.show');
