<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PrestationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
          'id'=>$this->id,
          'id_user'=>$this->id_user,
          'id_cat'=>$this->id_cat,
          'nom'=>$this->nom,
          'description'=>$this->description,
          'photo'=>$this->photo,
          'contrainte'=>$this->contrainte,
          'type_facturation'=>$this->type_facturation,
          'prix_type_facturation'=>$this->prix_type_facturation,
          'duree'=>$this->duree,
          'personne_min'=>$this->personne_min,
          'personne_max'=>$this->personne_max,
          'heure_min'=>$this->heure_min,
          'heure_max'=>$this->heure_max
        ];
    }
}
