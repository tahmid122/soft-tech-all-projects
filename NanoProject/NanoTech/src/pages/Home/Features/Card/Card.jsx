import React from "react";
const Card = ({ card }) => {
  return (
    <div className="card">
      {/* card logo */}
      <div className="logo" style={{ backgroundColor: card.color }}>
        {card.icon}
      </div>
      {/* card logo */}
      {/* card description */}
      <div className="description">
        {/* card title */}
        <h4>{card.title}</h4>
        {/* card details */}
        <p>{card.description}</p>
      </div>
      {/* card description */}
    </div>
  );
};

export default Card;
