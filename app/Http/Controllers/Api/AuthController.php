<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginAdminRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;

class AuthController extends Controller
{

    public function signup(SignupRequest $request) {
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password']),
            'role'=>'user',
        ]);

        $token = $user->createToken('main')->plainTextToken;

        // return response([
        //     'user'=>$user,
        //     'token'=>$token
        // ]);

        return response(compact('user','token'));
    }

    public function login(LoginRequest $request) {
        $credentials = $request->validated();
        if (!Auth::attempt(($credentials))) {
            return response([
                'message' => 'Provided email address or password is incorrect'
            ], 422);
        }
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        // return response([
        //     'user'=>$user,
        //     'token'=>$token
        // ]);

        return response(compact('user','token'));

    }

    public function loginAdmin(LoginAdminRequest $request) {
        $credentials = $request->validated();
        if (!Auth::attempt(($credentials))) {
            return response([
                'message' => 'Provided email address or password is incorrect'
            ], 422);
        }
        /** @var \App\Models\User $user */
        $user = Auth::user();
        
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }

    public function logout(Request $request) {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->tokens()->where('id',$user->currentAccessToken()->id)->delete();
        // $user->currentAccessToken()->delete();
        return response('', 204);
    }

    
}
