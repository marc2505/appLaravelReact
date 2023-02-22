<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prestation', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user');
            $table->foreignId('id_cat');
            $table->string('nom')->nullable();
            $table->string('description')->nullable();
            $table->string('photo')->nullable();
            $table->string('contrainte')->nullable();
            $table->string('type_facturation')->nullable();
            $table->decimal('prix_type_facturation')->nullable();
            $table->integer('duree')->nullable();
            $table->integer('personne_min')->nullable();
            $table->integer('personne_max')->nullable();
            $table->integer('heure_min')->nullable();
            $table->integer('heure_max')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prestation');
    }
};
