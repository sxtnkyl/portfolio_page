import React from "react";

//holds array of img src strings
const Preload = () => {
  const images = [
    { id: 0, src: "img1", description: "words" },
    { id: 1, src: "img2", description: "describing" },
    { id: 2, src: "img3", description: "pictures" }
  ];

  const mappedimages = images.map(i => {
    return <img key={i.id} src={i.src} alt={i.description} />;
  });

  return <div id="preload">{mappedimages}</div>;
};

export default Preload;
