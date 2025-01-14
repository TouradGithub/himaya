<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/save', [App\Http\Controllers\UserController::class, 'store'])->name('admin.users.store');
Route::get('/index', [App\Http\Controllers\UserController::class, 'index'])->name('admin.users.index');
Route::get('/create', [App\Http\Controllers\UserController::class, 'create'])->name('admin.users.create');
