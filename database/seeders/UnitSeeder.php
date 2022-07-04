<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->insert([
            'kode'=>'1.02.0.00.0.00.01.0000',
            'nama'=>'RSUD CIBINONG',
            'singkatan'=>'RSUDCBN',
            'nama_kepala_unit'=>'dr. Wahyu Eko',
            'nip_kepala_unit'=>'196407111991032009',
            'jabatan_kepala_unit'=>'Direktur',
            'gol_kepala'=>'IV C'
        ]);
    }
}
