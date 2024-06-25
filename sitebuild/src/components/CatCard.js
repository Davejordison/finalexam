// components/CatCard.js
import React from 'react';
import './CatCard.css'; // CSS for CatCard styling

const CatCard = ({ name, image, description }) => {
  return (
    <div className="cat-card">
      <img src={image} alt={name} />
      <div className="cat-details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CatCard;
