<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->string('ten_nha_hang');
            $table->string('loai_am_thuc');
            $table->string('dia_chi');
            $table->string('toa_do')->nullable();
            $table->string('mon_noi_bat')->nullable();
            $table->decimal('gia_trung_binh', 10, 2)->nullable();
            $table->timestamps();
    });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
           Schema::create('restaurants', function (Blueprint $table) {
        $table->id();
        $table->string('ten_nha_hang');
        $table->string('loai_am_thuc');
        $table->string('dia_chi');
        $table->string('toa_do')->nullable();
        $table->string('mon_noi_bat')->nullable();
        $table->decimal('gia_trung_binh', 10, 2)->nullable();
        $table->timestamps();
    });
    }
};
