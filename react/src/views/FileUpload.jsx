import React, { useState } from 'react'
import axiosClient from '../axios-client'

export default function FileUpload() {
    const [images,setImages] = useState([])
    const [selectedImages, setSelectedImages] = useState([])
    // const [categorie,setCategorie] = useState('')
    console.log(images)
    const handleSubmit = () => {
        let formData = new FormData()
        // formData.append('categorie', categorie)
        Array.from(images).forEach(image=>{
            formData.append('products',image)
        })
        // axiosClient.post('',formData)
        .then(()=>{

        })
        .catch(()=>{

        })
    }
    const onSelectFile = (e) => {
        console.log('ok')
        const selectedFiles = e.target.files;
        const selectedFilesArray = Array.from(selectedFiles)
        const imagesArray = selectedFilesArray.map(file=>{
            return URL.createObjectURL(file)
        })
        // setSelectedImages(imagesArray)
        setSelectedImages(prevImages=>prevImages.concat(imagesArray))
    }
  return (
    <section>
        <label className='label'>
            + add images
            <br />
            <span className='span'>up to 10 images</span>
            <input 
                className='input'
                type="file"
                name='images'
                onChange={onSelectFile}
                multiple
                accept='image/png, image/jpeg, image/webp, image/jpg' 
            />
        {/* {
            Array.from(images).map((image,key)=>{
                return (
                    <span>
                        <img 
                            key={key}
                            style={{ padding:'10px' }}
                            width={150}
                            height={100}
                            src={image ? URL.createObjectURL(image):null} 
                        />
                    </span>
                )
            })
        } */}
        {/* <input 
            onChange={e=>{
                setImages(e.target.files)
            }}
            type="file" 
            multiple
        /> */}
        {/* <button onClick={handleSubmit}>SUBMIT</button> */}
        </label>
        <br />
        {
            selectedImages.length > 0 && 
            (selectedImages.length > 10 ? (
                <p className="error">You can't upload more than 10 images ... <br />
                <span>please delete <b>{selectedImages.length-10}</b> of them.</span>
                </p>
            ) : (
                <button 
                    className="upload-btn"
                    onClick={()=>{console.log('UPLOAD IMAGES')}}
                >
                    UPLOAD {selectedImages.length} IMAGE{selectedImages.length === 1 ? '' : 'S'}
                </button>
            ))
        }
        <div className="images">
            {
                selectedImages && 
                selectedImages.map((image,index)=>{
                    return (
                        <div key={index} className='image'>
                            <img className={'img'} src={image} height={200} />
                            <button 
                                onClick={()=>{
                                    setSelectedImages(selectedImages.filter((e)=>e!==image))
                                }}
                            >
                                delete image
                            </button>
                            <p>{index+1}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
