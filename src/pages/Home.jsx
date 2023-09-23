import React, { useEffect, useState } from "react";
// import icon from "../assets/upload_file_FILL0_wght400_GRAD0_opsz24.svg";
import boxer from "../assets/boxer.jpg";
import design from "../assets/design.jpg";
import fwork from "../assets/femaleWork.jpg";
import gym from "../assets/gym.jpg";
import home from "../assets/Home.jpg";
import home2 from "../assets/homework.jpg";
import love from "../assets/love.jpg";
import office from "../assets/officeWork.jpg";
import party from "../assets/party.jpg";
import pray from "../assets/pray.jpg";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterImg, setFilterImg] = useState([]);
  const [images, setImages] = useState([
    { src: boxer, id: 1, tags: ["gym", "workout"] },
    {
      src: design,
      id: 2,
      tags: ["work", "tech"],
    },

    {
      src: fwork,
      id: 3,
      tags: ["workout", "gym", "women"],
    },
    {
      src: gym,
      id: 4,
      tags: ["gym", "men", "workout"],
    },
    {
      src: home,
      id: 5,
      tags: ["work", "remote", "home"],
    },
    {
      src: home2,
      id: 6,
      tags: ["work", "remote", "home"],
    },
    {
      src: love,
      id: 7,
      tags: ["love", "romance", "home"],
    },
    {
      src: office,
      id: 8,
      tags: ["work", "office", "money"],
    },
    {
      src: pray,
      id: 9,
      tags: ["work", "hope", "pray"],
    },
    {
      src: party,
      id: 10,
      tags: ["party", "fun"],
    },
  ]);
  // functions
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("imageId", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const imageId = e.dataTransfer.getData("imageId");
    const newImages = [...images];

    const draggedImage = newImages.find((img) => img.id.toString() === imageId);
    const targetImage = newImages.find((img) => img.id.toString() === targetId);

    const draggedIndex = newImages.indexOf(draggedImage);
    const targetIndex = newImages.indexOf(targetImage);

    newImages[draggedIndex] = targetImage;
    newImages[targetIndex] = draggedImage;
    setImages(newImages);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilterImg([]);
    } else {
      const filtered = images.filter((img) =>
        img.tags.some((tag) => tag.toLowerCase().includes(query))
      );
      setFilterImg(filtered);
    }
  };
  const displayImages = filterImg.length > 0 ? filterImg : images;

  return (
    <div>
      <input
        type="text"
        placeholder="Search Images by Tags"
        onChange={handleSearchInputChange}
        value={searchQuery}
        className="mx-auto w-[90%] block  rounded-lg h-10 my-7 px-5 outline-none"
      />

      <div className=" h-fit p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full mt-5 gap-5 auto-rows-fr">
        {displayImages.map((img, i) => (
          <div
            key={i}
            className="shadow-xl rounded-xl overflow-hidden object-cover cursor-pointer relative"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, img.id.toString())}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, img.id.toString())}
          >
            <img
              src={img.src}
              loading="lazy"
              alt={`Image ${img.id}`}
              className="object-cover h-[95%] w-full"
            />
            <ul className="flex mb-5  w-fit mx-auto text-white font-bold">
              {img.tags.map((tag, i) => (
                <li
                  key={i}
                  className="capitalize mr-3 hover:text-purple-900 cursor-pointer"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
