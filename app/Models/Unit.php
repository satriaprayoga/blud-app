<?php

namespace App\Models;


class Unit 
{
   private static $unit_lists=[
    [
        "kode"=>"",
        "nama"=>"",
        "singkatan"=>"",
        "sumber_anggaran"=>"",
        "kode_sub_unit"=>"",
        "lokasi"=>"",
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
        return collect(self::$unit_lists);
   }
}
