<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CategoryResource::collection(
            Category::query()->orderBy('id', 'desc')->paginate(10)
        ); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();

        $cat = Category::create($data);

        return response(new CategoryResource($cat), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data = $request->validated();
        
        $category->update($data);

        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return response('', 204);
    }

    public function addCategory(Request $request) {
        $cat = new Category();
        $cat->id = $request->id;
        $cat->name = $request->name;
        $cat->description = $request->description;
        if ($request->image != 'null') {
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image,0,$strpos);
            $ex = explode('/', $sub)[1];
            $nameImg = time().'.'.$ex;
            $img = Image::make($request->image)->resize(117,100);
            // $upload_path = public_path().'/upload/';
            $upload_path = 'C://Users/41792/Desktop/Sites_Laravel/l-r-fullstack/react/public/upload/category/';
            $img->save($upload_path.$nameImg);
            $cat->image = $nameImg;
        } else {
            $cat->image = 'yumy.png';
        }
        // $cat->image = $nameImg;
        $cat->created_at = $request->created_at;
        // $cat->updated_at = $request->updated_at;
        $cat -> save();
    }

    public function deleteCategory($id) {
        $cat = Category::findOrFail($id);
        // $image_path = public_path().'/upload/';
        $image_path = 'C://Users/41792/Desktop/Sites_Laravel/l-r-fullstack/react/public/upload/category/';
        $image = $image_path.$cat->image;
        if(file_exists($image)) {
            @unlink($image);
        }
        $cat->delete();
    }

    public function getCategory($idParam) {
        $cat = Category::find($idParam);
        return response()->json([
            'category'=>$cat
        ],200);
    }

    public function updateCategory(Request $request, $idParam) {
        $cat = Category::find($idParam);

        $cat->name = $request->name;
        $cat->description = $request->description;
        if($cat->image != $request->image) {
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image,0,$strpos);
            $ex = explode('/', $sub)[1];
            $name = time().'.'.$ex;
            $img = Image::make($request->image)->resize(117,100);
            // $upload_path = public_path().'/upload/';
            $upload_path = 'C://Users/41792/Desktop/Sites_Laravel/l-r-fullstack/react/public/upload/category/';
            $image = $upload_path.$cat->image;
            $img->save($upload_path.$name);
            if(file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = $cat->image;
        }
        $cat->image = $name;
        $cat->updated_at = $request->updated_at;
        $cat->save();
    }
}
