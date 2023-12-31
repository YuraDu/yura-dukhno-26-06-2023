// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { shuffleArray } from "../../Services/GameBoardServise";
import { withConfig } from "../Card/withConfig";
import ErrorsPopUp from "../ErrorsPopUp/ErrorsPopUp";
import Card from "./../Card/Card";
import "./GameBoard.css";
import PropTypes from "prop-types";
import StatusModal from "../StatusModal/StatusModal";

const GameBoard = () => {
  const firstShuffledCards = useSelector(state => state.general.firstRow);
  const secondShuffledCards = useSelector(state => state.general.secondRow);

  const UpdatedCard = withConfig(Card);

  return (
    <div style={{ minHeight: "80vh" }}>
      <StatusModal />
      <div className="game-board__container">
        <div className="cards-row left-row">
          {firstShuffledCards.map((card, index) => (
            <UpdatedCard
              card={card}
              container="first"
              index={index}
              key={`${index}-${card.figure}`}
            />
          ))}
        </div>
        <div className="cards-row right-row">
          {secondShuffledCards.map((card, index) => (
            <UpdatedCard
              index={index}
              card={card}
              container="second"
              key={`${index}-${card.figure}`}
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
