// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { shuffleArray } from "../../Services/GameBoardServise";
import { withConfig } from "../Card/withConfig";
import ErrorsPopUp from "../ErrorsPopUp/ErrorsPopUp";
import Card from "./../Card/Card";
import "./GameBoard.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
// import { useSelector } from "react-redux";

const GameBoard = ({ cards }) => {
  const firstShuffledCards = shuffleArray(cards);
  const secondShuffledCards = shuffleArray(cards);

  const shuffle = useSelector(state => state.general.shuffle);

  const UpdatedCard = withConfig(Card);

  // TODO Shuffle arrays

  useEffect(() => {
    console.log("skddskjfhskdhf");
  }, [shuffle]);

  return (
    <div>
      <div className="game-board__container">
        <div className="cards-row left-row">
          {firstShuffledCards.map((card, index) => (
            <UpdatedCard
              key={`${index}-${card.figure}`}
              card={card}
              container="first"
            />
          ))}
        </div>
        <div className="cards-row right-row">
          {secondShuffledCards.map((card, index) => (
            <UpdatedCard
              key={`${index}-${card.figure}`}
              index={index}
              card={card}
              container="second"
            />
          ))}
        </div>
      </div>
      <ErrorsPopUp />
    </div>
  );
};

GameBoard.propTypes = {
  cards: PropTypes.array,
};

export default GameBoard;
