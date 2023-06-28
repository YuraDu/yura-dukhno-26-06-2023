import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import PropTypes from "prop-types";
import { OFF } from "../../Data/consts";
import { addError, setFalseStart } from "../../Redux/reducers/generalSlice";

const Card = ({ flipped, handleFlip, card, container }) => {
  const dispatch = useDispatch();
  const active = useSelector(state => state.general.gameActive);
  const selected = useSelector(state => state.general.selected);

  const handleClick = () => {
    if (!active) {
      dispatch(setFalseStart(true));
      const timeout = setTimeout(() => {
        dispatch(setFalseStart(false));
      }, 250);
      return () => clearTimeout(timeout);
    } else if (selected.container === container) {
      dispatch(addError("Should select card from second row!"));
    }
  };

  return (
    <div onClick={handleClick}>
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
