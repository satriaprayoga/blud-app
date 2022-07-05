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
            'kode'=>'1.02.0.00.0.00.01.0006',
            'nama'=>'RSUD CIBINONG',
            'singkatan'=>'RSUDCIB',
            'nama_kepala_unit'=>'dr. Wahyu Eko Widiharso, Sp. OT, MARS',
            'nip_kepala_unit'=>'196402111990011001',
            'jabatan_kepala_unit'=>'Direktur',
            'satker_id'=>1
        ]);
        DB::table('units')->insert([
            'kode'=>'1.02.0.00.0.00.01.0007',
            'nama'=>'RSUD CIAWI',
            'singkatan'=>'RSUDCIA',
            'nama_kepala_unit'=>'dr. M. Tsani Musyafa, M.Kes, Sp.OT',
            'nip_kepala_unit'=>'197504252005021003',
            'jabatan_kepala_unit'=>'Direktur',
            'satker_id'=>1
        ]);
        DB::table('units')->insert([
            'kode'=>'1.02.0.00.0.00.01.0008',
            'nama'=>'RSUD LEUWILIANG',
            'singkatan'=>'RSUDLEW',
            'nama_kepala_unit'=>'drg. Hesti Iswandari, M.Kes',
            'nip_kepala_unit'=>'196304081992122001',
            'jabatan_kepala_unit'=>'Direktur',
            'satker_id'=>1
        ]);
        DB::table('units')->insert([
            'kode'=>'1.02.0.00.0.00.01.0009',
            'nama'=>'RSUD CILEUNGSI',
            'singkatan'=>'RSUDCIL',
            'nama_kepala_unit'=>'Dr. Kusnadi',
            'nip_kepala_unit'=>'196611152002121002',
            'jabatan_kepala_unit'=>'Direktur',
            'satker_id'=>1
        ]);
    }
}
