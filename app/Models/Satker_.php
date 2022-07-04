<?php

namespace App\Models;



class Satker 
{
    private static $all_satker=[
        [
            "kode"=>"1.02.0.00.0.00.01.0000",
            "nama"=>"DINAS KESEHATAN"
        ]
    ];

    public static function all(){
        return self::$all_satker;
    }


}
