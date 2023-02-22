<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Prestation;
use App\Http\Requests\StorePrestationRequest;
use App\Http\Requests\UpdatePrestationRequest;
use App\Http\Resources\PrestationResource;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class PrestationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return PrestationResource::collection(
            Prestation::query()->orderBy('id','desc')->paginate()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePrestationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrestationRequest $request)
    {
        $data = $request->validated();

        $prestation = Prestation::create($data);

        return response(new PrestationResource($prestation), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prestation  $prestation
     * @return \Illuminate\Http\Response
     */
    public function show(Prestation $prestation)
    {
        return new PrestationResource($prestation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrestationRequest  $request
     * @param  \App\Models\Prestation  $prestation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrestationRequest $request, Prestation $prestation)
    {
        $data = $request->validated();

        $prestation->update($data);

        return new PrestationResource($prestation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prestation  $prestation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prestation $prestation)
    {
        $prestation->delete();

        return response('',204);
    }

    public function addPrestation(Request $request) {
        $prestation = new Prestation();
        $prestation->id_user = $request->userId;
        $prestation->id_cat = $request->catId;
        $prestation->nom = $request->nom;
        $prestation->description = $request->description;
        if ($request->photo != 'null') {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/', $sub)[1];
            $name = time().'.'.$ex;
            $img = Image::make($request->photo)->resize(117,100);
            // $upload_path = public_path().'/upload/';
            $upload_path = 'C://Users/41792/Desktop/Sites_Laravel/l-r-fullstack/react/public/upload/';
            $img->save($upload_path.$name);
            $prestation->photo = $name;
        } else {
            $prestation->photo = 'yumy.png';
        }
        // $prestation->photo = $name;
        $prestation->contrainte = $request->contraintes;
        $prestation->type_facturation = $request->typeFacturation;
        $prestation->prix_type_facturation = $request->prixFacturation;
        $prestation->duree = $request->duree;
        $prestation->personne_min = $request->nbPersMin;
        $prestation->personne_max = $request->nbPersMax;
        $prestation->heure_min = $request->heureMin;
        $prestation->heure_max = $request->heureMax;
        $prestation->created_at = $request->createdAt;

        $prestation->save();

    }

    public function deletePrestation($id) {
        $prestation = Prestation::findOrFail($id);
        // $image_path = public_path().'/upload/';
        $image_path = 'C://Users/41792/Desktop/Sites_Laravel/l-r-fullstack/react/public/upload/';
        $image = $image_path.$prestation->photo;
        if(file_exists($image)) {
            @unlink($image);
        }
        $prestation->delete();
    }

    public function getPrestation($idParam) {
        $prestation = Prestation::find($idParam);
        return response()->json([
            'prestation'=>$prestation
        ],200);
    }

    public function updatePrestation(Request $request, $idParam) {
        $prestation = Prestation::find($idParam);

        $prestation->nom = $request->nom;
        $prestation->description = $request->description;
        if($prestation->photo != $request->photo) {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/', $sub)[1];
            $name = time().'.'.$ex;
            $img = Image::make($request->photo)->resize(117,100);
            // $upload_path = public_path().'/upload/';
            $upload_path = 'C://Users/41792/Desktop/Sites_Laravel/l-r-fullstack/react/public/upload/';
            $image = $upload_path.$prestation->photo;
            $img->save($upload_path.$name);
            if(file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = $prestation->photo;
        }
        $prestation->photo = $name;
        $prestation->contrainte = $request->contraintes;
        $prestation->type_facturation = $request->typeFacturation;
        $prestation->prix_type_facturation = $request->prixFacturation;
        $prestation->duree = $request->duree;
        $prestation->personne_min = $request->nbPersMin;
        $prestation->personne_max = $request->nbPersMax;
        $prestation->heure_min = $request->heureMin;
        $prestation->heure_max = $request->heureMax;
        $prestation->updated_at = $request->updatedAt;
        $prestation->save();
    }
}
