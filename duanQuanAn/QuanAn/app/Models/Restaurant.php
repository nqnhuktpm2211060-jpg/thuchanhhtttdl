<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $fillable = [
    'ten_nha_hang',
    'loai_am_thuc',
    'dia_chi',
    'toa_do',
    'mon_noi_bat',
    'gia_trung_binh',
];
}
