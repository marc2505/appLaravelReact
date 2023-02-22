<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categorie';

    protected $fillable = [
        'name',
        'description',
        'image',
        'created_at',
        'updated_at',
    ];
}
