<?php

namespace App\Models;


class SubUnit
{
    private static $sub_unit_list=[
        [
            "kode"=>"1.02.0.00.0.00.01.0006",
            "nama"=>"RSUD Cibinong",
            "kode_satker"=>"1.02.0.00.0.00.01.0000"
        ],
        [
            "kode"=>"1.02.0.00.0.00.01.0007",
            "nama"=>"RSUD Ciawi",
            "kode_satker"=>"1.02.0.00.0.00.01.0000"
        ],
        [
            "kode"=>"1.02.0.00.0.00.01.0008",
            "nama"=>"RSUD Leuwiliang",
            "kode_satker"=>"1.02.0.00.0.00.01.0000"
        ],
        [
            "kode"=>"1.02.0.00.0.00.01.0009",
            "nama"=>"RSUD Cileungsi",
            "kode_satker"=>"1.02.0.00.0.00.01.0000"
        ]
    ];

    public static function all(){
        return self::$sub_unit_list;
    }
}
