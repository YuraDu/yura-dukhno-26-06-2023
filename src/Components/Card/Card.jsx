import { useSelector } from "react-redux";
import "./Card.css";
import PropTypes from "prop-types";
import { OFF } from "../../Data/consts";

const Card = ({ flipped, handleFlip, card, container }) => {
  const active = useSelector(state => state.general.gameActive);
  const selected = useSelector(state => state.general.selected);

  return (
    <div
      style={!active || selected.container === container ? OFF : {}}
      onClick={() => handleFlip(card.name, container)}
      className={`card ${flipped ? "flipped" : ""}`}
    >
      <div className="card-pattern"></div>
      <div className="card-content">
        <img src={card.image} alt="" />
      </div>
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
