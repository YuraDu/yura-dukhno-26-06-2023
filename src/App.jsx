import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import StartPage from "./Pages/StartPage/StartPage";
import GamePage from "./Pages/GamePage/GamePage";
import LeadersPage from "./Pages/LeadersPage/LeadersPage";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/start-page" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/leaders" element={<LeadersPage />} />
      </Routes>
    </>
  );
}

export default App;
