<?php

use App\Http\Controllers\SatkerController;
use App\Http\Controllers\SubUnitController;
use App\Http\Controllers\UnitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 */
#Route::resource('units',UnitController::class);
Route::resource('satker',SatkerController::class);
Route::resource('unit',UnitController::class);
//Route::resource('subunits',SubUnitController::class);
Route::get('subunits/satker/{kode}', [SubUnitController::class,'findBySatkerKode']);
Route::get('units/subunit/{kode_sub}',[UnitController::class,'findBySubunit']);
Route::get('units/{id}',[UnitController::class,'show']);