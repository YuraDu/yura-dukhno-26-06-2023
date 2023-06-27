import { useSelector } from "react-redux";
import "./Card.css";
import PropTypes from "prop-types";
import { OFF } from "../../Data/consts";

const Card = ({ flipped, handleFlip, card, container }) => {
  const active = useSelector(state => state.general.gameActive);

  console.log(
    "🚀 ~ file: Card.jsx:5 ~ Card ~ card:",
    card,
    container,
    flipped,
    active
  );

  return (
    <div
      style={active ? {} : OFF}
      onClick={handleFlip}
      className={`card ${flipped ? "flipped" : ""}`}
    >
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
