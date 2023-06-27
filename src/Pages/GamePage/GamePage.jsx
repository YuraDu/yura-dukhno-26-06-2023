import Dashboard from "./../../Components/DashBoard/DashBoard";
import GameBoard from "./../../Components/GameBoard/GameBoard";

import cards from "./../../Data/Cards";

import "./GamePage.css";

export default function GamePage() {
  return (
    <div className="game__container">
      <Dashboard />
      <GameBoard cards={cards} />
    </div>
  );
}
