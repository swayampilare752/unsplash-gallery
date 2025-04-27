import React from 'react';

function ImageCard({ image }) {
  return (
    <div className="border rounded shadow">
      <img src={image.urls.small} alt={image.alt_description} className="w-full h-48 object-cover rounded-t" />
      <div className="p-2">
        <h2 className="text-sm font-bold">{image.user.name}</h2>
        <p className="text-xs text-gray-600">{image.created_at.substring(0, 10)}</p>
      </div>
    </div>
  );
}

export default ImageCard;
