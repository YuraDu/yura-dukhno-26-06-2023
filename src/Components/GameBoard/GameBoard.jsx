import { shuffleArray } from "../../Services/GameBoardServise";
import { withConfig } from "../Card/withConfig";
import Card from "./../Card/Card";
import "./GameBoard.css";
import PropTypes from "prop-types";

const GameBoard = ({ cards }) => {
  const firstShuffledCards = shuffleArray(cards);
  const secondShuffledCards = shuffleArray(cards);

  const UpdatedCard = withConfig(Card);

  return (
    <div className="game-board__container">
      <div className="cards-row left-row">
        {firstShuffledCards.map(card => (
          <UpdatedCard key={card.figure} card={card} container="first" />
        ))}
      </div>
      <div className="cards-row right-row">
        {secondShuffledCards.map(card => (
          <UpdatedCard key={card.figure} card={card} container="second" />
        ))}
      </div>
    </div>
  );
};

GameBoard.propTypes = {
  cards: PropTypes.array,
};

export default GameBoard;
