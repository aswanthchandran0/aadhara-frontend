import axios from "axios";

const  API_BASE_URL = import.meta.env.VITE_BASE_URL

export const uploadImages = async(frontImage: File, backImage: File) =>{
    const formData = new FormData()
    formData.append('image1',frontImage)
    formData.append('image2',backImage)
    console.log('form data',formData)
    console.log('base url',API_BASE_URL)
    try{
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
    }catch{
        throw new Error('Upload failed');
    }
}