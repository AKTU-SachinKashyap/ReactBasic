// import './App.css';
import './Gallery.css'
import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleClick(image)}
          />
        </div>
      ))}
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal" >
            <img src={selectedImage} alt="Selected Image"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
