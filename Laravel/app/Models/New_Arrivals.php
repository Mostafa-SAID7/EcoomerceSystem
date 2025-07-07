<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class New_Arrivals extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
        'slug',
        'image',
    ];  
}
