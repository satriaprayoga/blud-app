<?php

namespace App\Models;


class Unit 
{
   private static $unit_lists=[
    [
        "kode"=>"102010006",
        "nama"=>"BLUD RSUD Cibinong",
        "singkatan"=>"RSUDCBN",
        "sumber_anggaran"=>"BLUD RSUD CBN",
        "kode_sub_unit"=>"1.02.0.00.0.00.01.0006",
        "lokasi"=>"Cibinong",
        "bend_nama"=>"",
        "bend_nip"=>"",
        "bend_jabatan"=>"",
        "sp3b_nama"=>"",
        "sp3b_nip"=>"",
        "sp3b_jabatan"=>"",
        "sptjm_nama"=>"",
        "sptjm_nip"=>"",
        "sptjm_jabatan"=>""

    ]
   ];

   public static function all(){
        return self::$unit_lists;
   }
}
