<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PrestationController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        // dd($request->user());
        return $request->user();
    });

    Route::get('/user/name', function (Request $request) {
        // dd($request->query());
        return $request->user();
    });

    Route::get('/user/{id}/getName', function (Request $request) {
        $id = $request->id;
        $nom = DB::table('users')->where('id',$id)->value('name');
        return response($nom, 201);
    });

    Route::get('/user/{id}/getPrestataire', function (Request $request) {
        $id = $request->id;
        $prestataire = DB::table('users')->where('id',$id)->first();
        return $prestataire;
    });

    Route::get('/user/{id}/getPrestations', function (Request $request) {
        $id = $request->id;
        $prestations = DB::table('prestation')->where('id_user',$id)->get();
        return $prestations;
    });

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);

    Route::get('/prestation', function(Request $request) {
        return $request->prestation();
    }); 

    Route::apiResource('/prestations', PrestationController::class);

    Route::post('/addPrestation', [PrestationController::class, 'addPrestation']);

    Route::get('/delete/prestation/{idParam}', [PrestationController::class, 'deletePrestation']);

    Route::get('/getPrestation/{idParam}', [PrestationController::class, 'getPrestation']);

    Route::post('/updatePrestation/{idParam}', [PrestationController::class, 'updatePrestation']);

    Route::apiResource('/categories', CategoryController::class);

    Route::get('/category', function(Request $request) {
        return $request->category();
    }); 

    Route::get('/getCategories', function () {
        $cat = DB::table('categorie')->get();
        return $cat;
    });

    Route::post('/addCategory', [CategoryController::class, 'addCategory']);

    Route::get('/delete/category/{idParam}', [CategoryController::class, 'deleteCategory']);

    Route::get('/getCategory/{idParam}', [CategoryController::class, 'getCategory']);

    Route::post('/updateCategory/{idParam}', [CategoryController::class, 'updateCategory']);

    Route::get('/getCategorieNom/{catId}', function(Request $request) {
        $catId = $request->catId;
        // dd($catId);
        $catNom = DB::table('categorie')->where('id', $catId)->value('name');
        // dd($catNom);
        // $catNom = DB::table('categorie')->where('id',$catId)->get();
        return response($catNom, 201);
    });
});

Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/loginAdmin', [AuthController::class, 'loginAdmin']);

Route::post('/login', [AuthController::class, 'login']);