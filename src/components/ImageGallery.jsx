import React from 'react';
import ImageCard from './ImageCard';

function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
}

export default ImageGallery;
