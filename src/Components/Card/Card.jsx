import { useState } from "react";
import "./Card.css";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div onClick={handleFlip} className={`card ${flipped ? "flipped" : ""}`}>
      <div className="card-pattern"></div>
      <div className="card-content">Content</div>
    </div>
  );
};

export default Card;
