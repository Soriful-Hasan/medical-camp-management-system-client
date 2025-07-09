import React from "react";

const UploadImage = async (imageFIle) => {
  const formData = new FormData();
  formData.append("image", imageFIle);

  const url = `https://api.imgbb.com/1/upload?expiration=600&key=${
    import.meta.env.VITE_imgApiKey
  }`;

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
};

export default UploadImage;
