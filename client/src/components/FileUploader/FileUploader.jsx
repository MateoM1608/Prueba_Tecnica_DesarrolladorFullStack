import React, {useState } from 'react'
import './FileUploader.css'
import image from '../../image/image_uploader.JPG'


const FileUploader = () =>{

    const [ imageRader , setImageRader ] = useState("")

    const handlerChanges = e => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImageRader(reader.result)
        }
    }

    return(
        <div>
            
            <div className="flieHome">
            <div className="fileUploader">
                <h1 className="fileTitle-upload">SUBE TU IMAGEN</h1>
                <p className="fileTxt_be">El archivo debe ser Jpeg, Png...</p>
                <div className="fileDisplay_image">
                    <img className="fileImage" src={ !imageRader ? image: imageRader} alt="img"/>
                </div>
                <div className="file-select">
                    <input  type="file" onChange={e => handlerChanges(e)}/>
                </div>
            </div>
            </div>
        </div>
        
        
    )
}

export default FileUploader
