<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MOdels\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    public function index(){
        $users = User::paginate(10);
        return view('admin.users.index',['users' => $users]);
    }

    public function create(){
        return view('admin.users.create');
    }
    public function store(Request $request)
    {



        // Validate incoming data

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:255',
            'type_user' => 'required|string|in:1,0',
            'password' => 'required|string|min:8',
        ]);
        // dd("OK");

        // Create the user
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'type_user' => $request->type_user,
            'status' => $request->status??0,
            'password' => Hash::make($request->password),
        ]);

        // Redirect with a success message
        return redirect()->route('admin.users.index')->with('success', 'User created successfully.');
    }

}

