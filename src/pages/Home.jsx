import React, { useState } from "react";
import icon from "../assets/upload_file_FILL0_wght400_GRAD0_opsz24.svg";

export default function Home() {
  const [imgRef, setImgRef] = useState([]);

  const handleImageUpload = (files) => {
    if (files && files.length > 0) {
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImgRef((prevImg) => [...prevImg, newImages]);
    }
  };
  console.log(imgRef);

  const handleInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleImageUpload(files);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageUpload(Array.from(e.dataTransfer.files));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <label
        htmlFor="img-file"
        className="w-fit p-28 bg-white rounded-lg shadow-2xl flex flex-col  items-center justify-center cursor-pointer mt-10"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          onChange={handleInputChange}
          type="file"
          accept="image/*"
          multiple
          id="img-file"
          hidden
        />
        <img src={icon} alt="icon" />
        <p className="text-center capitalize ">
          Drag and Drop any image <br /> or click here to upload
        </p>
      </label>
      <div className=" h-fit p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full mt-5 gap-5 auto-rows-fr">
        {imgRef.map((img, i) => (
          <div
            key={i}
            className="shadow-xl rounded-xl overflow-hidden object-cover"
          >
            <img
              src={img}
              alt={i}
              className="object-cover h-full "
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
