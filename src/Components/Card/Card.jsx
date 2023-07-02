import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import PropTypes from "prop-types";
import { OFF } from "../../Data/consts";
import { addError, setFalseStart } from "../../Redux/reducers/generalSlice";
import { useTranslation } from "react-i18next";

const Card = ({ flipped, handleFlip, card, container }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const active = useSelector(state => state.general.gameActive);
  const selected = useSelector(state => state.general.selected);
  const pause = useSelector(state => state.general.pause);
  const attemptsPool = useSelector(state => state.general.attemptsPool);
  const trueInPool = attemptsPool.some(
    item => item.name === card.name && item.concurrence === true
  );

  const handleClick = () => {
    if (trueInPool) {
      dispatch(addError(t("flip-back-error")));
    }
    if (pause) {
      dispatch(addError(t("pause-error")));
      return;
    }
    if (!active) {
      dispatch(setFalseStart(true));
      const timeout = setTimeout(() => {
        dispatch(setFalseStart(false));
      }, 250);
      return () => clearTimeout(timeout);
    } else if (selected.container === container) {
      dispatch(addError(t("row-error")));
    }
  };

  return (
    <div onClick={handleClick}>
      <div
        style={
          trueInPool || pause || !active || selected.container === container
            ? OFF
            : {}
        }
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
