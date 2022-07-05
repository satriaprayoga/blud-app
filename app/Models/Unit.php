<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    public function satker(){
        return $this->belongsTo(Satker::class,'satker_id');
    }

    public function subunits(){
        return $this->hasMany(Subunit::class);
    }
}
