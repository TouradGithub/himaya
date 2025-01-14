<?php

namespace Database\Seeders;
use App\Models\UserType;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::create([
            'name' => 'Test Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
            'type_user_id' =>'1',
        ]);

        UserType::create(['name' => 'Admin']);
        UserType::create(['name' => 'User']);
    }
}
