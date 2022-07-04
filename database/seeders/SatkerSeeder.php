<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SatkerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('satkers')->insert([
            'kode'=>'1.02.0.00.0.00.01.0000',
            'nama'=>'DINAS KESEHATAN',
            'nama_kepala'=>'Drg. MIKE KALTARINA, MARS',
            'nip_kepala'=>'196407111991032009',
            'jabatan_kepala'=>'Kepala Dinas Kesehatan',
            'gol_kepala'=>'IV C'
        ]);
    }
}
