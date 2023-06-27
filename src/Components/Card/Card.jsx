import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ flipped, handleFlip, card, container }) => {
  console.log("🚀 ~ file: Card.jsx:5 ~ Card ~ card:", card, container, flipped);
  return (
    <div onClick={handleFlip} className={`card ${flipped ? "flipped" : ""}`}>
      <div className="card-pattern"></div>
      <div className="card-content">Content</div>
    </div>
  );
};

Card.propTypes = {
  flipped: PropTypes.bool,
  handleFlip: PropTypes.func,
  card: PropTypes.object,
  container: PropTypes.string,
};

export default Card;
