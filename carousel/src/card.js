import React from "react";
import "./Card.css"; // Make sure to create a CSS file with your styles

const Card = () => {
  return (
    <div className="Card">
      <h2 className="Card-title">Card Title</h2>
      <img
        className="Card-image"
        src="https://via.placeholder.com/150" // Replace with your image URL
        alt="Card"
      />
      <p className="Card-small">This is some small italicized text.</p>
    </div>
  );
};

export default Card;
