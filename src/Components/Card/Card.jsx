import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import PropTypes from "prop-types";
import { OFF } from "../../Data/consts";
import { addError, setFalseStart } from "../../Redux/reducers/generalSlice";
import { useTranslation } from "react-i18next";

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { isTruePair } from "../../Services/GameBoardServise";

const Card = ({ flipped, handleFlip, card, container, index }) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [percents, setPercents] = useState();

  const { t } = useTranslation();

  const springs = useSpring({
    from: { x: 0, y: 0 },
    to: { x, y },
  });

  // const springs = useSpring({
  //   from: { y: 0 },
  //   to: card.name === "Card 5" ? { y: 90 } : { y: 0 },
  // });

  const dispatch = useDispatch();
  const active = useSelector(state => state.general.gameActive);
  const selected = useSelector(state => state.general.selected);
  const pause = useSelector(state => state.general.pause);
  const attemptsPool = useSelector(state => state.general.attemptsPool);
  const shuffleCards = useSelector(state => state.general.shuffleCards);
  const thisCard = shuffleCards[container]?.find(
    item => item["originalIndex"] === index
  );
  const secondCard = shuffleCards[container]?.find(
    item => item["originalIndex"] !== index
  );

  useEffect(() => {
    if (thisCard) {
      if (window.innerWidth > 540) {
        if (thisCard.originalIndex < secondCard.originalIndex) {
          setX(percents * (secondCard.originalIndex - thisCard.originalIndex));
        } else if (thisCard.originalIndex > secondCard.originalIndex) {
          setX(
            -(percents * (thisCard.originalIndex - secondCard.originalIndex))
          );
        }
      } else {
        if (thisCard.originalIndex < secondCard.originalIndex) {
          setY(percents * (secondCard.originalIndex - thisCard.originalIndex));
        } else if (thisCard.originalIndex > secondCard.originalIndex) {
          setY(
            -(percents * (thisCard.originalIndex - secondCard.originalIndex))
          );
        }
      }
    }
  }, [shuffleCards]);

  const handleClick = () => {
    if (isTruePair(attemptsPool, card.name)) {
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

  useEffect(() => {
    switch (true) {
      case window.innerWidth < 541:
        setPercents(90);
        break;
      case window.innerWidth < 769:
        setPercents(110);
        break;
      default:
        setPercents(150);
        break;
    }
  }, []);

  return (
    <animated.div onClick={handleClick} style={{ ...springs }}>
      <div
        style={
          isTruePair(attemptsPool, card.name) ||
          pause ||
          !active ||
          selected.container === container
            ? OFF
            : {}
        }
        onClick={() => handleFlip(card.name, container, index)}
        className={`card ${flipped ? "flipped" : ""}`}
      >
        <div className="card-pattern"></div>
        <div className="card-content">
          <img src={card.image} alt="" />
        </div>
      </div>
    </animated.div>
  );
};

Card.propTypes = {
  flipped: PropTypes.bool,
  handleFlip: PropTypes.func,
  card: PropTypes.object,
  container: PropTypes.string,
  index: PropTypes.number,
};

export default Card;
