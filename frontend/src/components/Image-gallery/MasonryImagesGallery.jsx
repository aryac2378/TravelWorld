
import React from 'react';
import './MasonryImagesGallery.css'; // Import CSS for styling
import galleryImages from './galleryImage'

const MasonryImagesGallery = () => {
  return (
    <div className="masonry-gallery">
      {galleryImages.map((image, index) => (
        <img 
          src={image} 
           alt={`Gallery image ${index + 1}`} 
          className="masonry__img" 
          key={index} 
        />
      ))}
    </div>
  );
}

export default MasonryImagesGallery;
