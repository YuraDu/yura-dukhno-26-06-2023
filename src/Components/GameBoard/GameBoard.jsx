import Card from "./../Card/Card";
import "./GameBoard.css";

const GameBoard = () => {
  return (
    <div className="game-board__container">
      <div className="cards-row left-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="cards-row right-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default GameBoard;
