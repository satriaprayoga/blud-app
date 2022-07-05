<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubunitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subunits')->insert([
            'kode'=>'102010006',
            'nama'=>'BLUD RSUD Cibinong',
            'singkatan'=>'BLUD RSUD CBN',
            'lokasi'=>'Cibinong',
            'nama_bend'=>'Sri Mulyati. S. Sos',
            'nip_bend'=>'198102172006042014',
            'jabatan_bend'=>'Bendahara',
            'nama_sp2b'=>'dr. Wahyu Eko Widiharso, Sp. OT, MARS',
            'nip_sp2b'=>'196402111990011001',
            'jabatan_sp2b'=>'Direktur',
            'nama_sptjm'=>'dr. Wahyu Eko Widiharso, Sp. OT, MARS',
            'nip_sptjm'=>'196402111990011001',
            'jabatan_sptjm'=>'Direktur',
            'sumber_anggaran'=>'Anggran BLUD',
            'unit_id'=>1
        ]);
        DB::table('subunits')->insert([
            'kode'=>'102010007',
            'nama'=>'BLUD RSUD Ciawi',
            'singkatan'=>'BLUD RSUD CIAWI',
            'lokasi'=>'Ciawi',
            'nama_bend'=>'Solehat, SE',
            'nip_bend'=>'197901052009012002',
            'jabatan_bend'=>'Bendahara',
            'nama_sp2b'=>'dr. Wahyu Eko Widiharso, Sp. OT, MARS',
            'nip_sp2b'=>'196402111990011001',
            'jabatan_sp2b'=>'Direktur',
            'nama_sptjm'=>'dr. Wahyu Eko Widiharso, Sp. OT, MARS',
            'nip_sptjm'=>'196402111990011001',
            'jabatan_sptjm'=>'Direktur',
            'sumber_anggaran'=>'Anggran BLUD',
            'unit_id'=>2
        ]);
    }
}
