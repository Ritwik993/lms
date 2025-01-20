import axios from 'axios'

const uploadFiles = async (files: File[] | null, token: string): Promise<string[]> => {
    if (!files) return [];
    
    const uploadedUrls: string[] = [];
  
    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
  
      const res = await axios.post(
        "http://localhost:8080/api/v1/assets/upload/image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      uploadedUrls.push(res.data.fileUrl);
    });
  
    await Promise.all(uploadPromises);
    return uploadedUrls;
  };
  

  export default uploadFiles;