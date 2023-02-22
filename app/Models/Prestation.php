<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestation extends Model
{
    use HasFactory;

    protected $table = 'prestation';

    protected $fillable = [
        'id_user',
        'id_cat',
        'nom',
        'description',
        'photo',
        'contrainte',
        'type_facturation',
        'prix_type_facturation',
        'duree',
        'personne_min',
        'personne_max',
        'heure_min',
        'heure_max',
        'created_at',
    ];
}
