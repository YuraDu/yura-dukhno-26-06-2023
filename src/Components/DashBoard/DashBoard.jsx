import Timer from "./../Timer/Timer";
import PauseIcon from "@mui/icons-material/Pause";
import Attempts from "./../Attempts/Attempts";
import { useTranslation } from "react-i18next";

import "./DashBoard.css";
import StartButton from "../StartButton/StartButton";
import { useDispatch, useSelector } from "react-redux";
import { setGameActive, setStart } from "../../Redux/reducers/generalSlice";

export default function DashBoard() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const start = useSelector(state => state.general.start);

  const handleStartGame = () => {
    dispatch(setStart(true));
    dispatch(setGameActive(true));
  };

  return (
    <div className="dashboard">
      <div className="timer__container">
        <Timer duration={60} text={t("time-left")} />
        <PauseIcon />
      </div>
      <div onClick={handleStartGame} className="start-button__container button">
        <StartButton
          start={start}
          text={!start ? t("start-game") : t("retry")}
        />
      </div>
      <div className="attempts__container">
        <Attempts text={t("attempts-left")} />
      </div>
    </div>
  );
}
