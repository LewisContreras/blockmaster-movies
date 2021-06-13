export const fileUpload = async (file) => {
    const cloudUrl = "https://api.cloudinary.com/v1_1/dfx4uggfe/image/upload"
    const formData = new FormData();
    formData.append("upload_preset", "journal-app")
    formData.append("file", file)

    try {
        const resp = await fetch(cloudUrl,{
            method: "POST",
            body:formData
        })
        if(resp.ok){
            const cloudRes = await resp.json()
            console.log(cloudRes);
            return cloudRes.secure_url
        }else{
            throw await resp.json()
        }
    } catch (error) {
        throw error
    }
}