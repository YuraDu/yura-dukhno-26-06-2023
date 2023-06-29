import Timer from "./../Timer/Timer";
import PauseIcon from "@mui/icons-material/Pause";
import Attempts from "./../Attempts/Attempts";
import { useTranslation } from "react-i18next";

import "./DashBoard.css";
import StartButton from "../StartButton/StartButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setGameActive,
  setRetry,
  setShuffle,
  setStart,
} from "../../Redux/reducers/generalSlice";
import { useState } from "react";

export default function DashBoard() {
  const { t } = useTranslation();
  const [noTimeLeft, setNoTimeLeft] = useState(false);

  const dispatch = useDispatch();

  const start = useSelector(state => state.general.start);
  const falseStart = useSelector(state => state.general.falseStart);
  const attempts = useSelector(state => state.general.attempts);

  const handleStartGame = () => {
    let setShuffleTimeOut;
    switch (start) {
      case false:
        dispatch(setStart(true));
        dispatch(setGameActive(true));
        break;
      case true:
        dispatch(setRetry());
        setShuffleTimeOut = setTimeout(() => {
          dispatch(setShuffle());
        }, 500);
        return () => clearTimeout(setShuffleTimeOut);
      default:
        break;
    }
  };

  return (
    <div className="dashboard">
      <div className={`timer__container ${noTimeLeft ? "error" : ""}`}>
        <Timer
          duration={60}
          text={t("time-left")}
          setNoTimeLeft={setNoTimeLeft}
        />
        <PauseIcon />
      </div>
      <div
        onClick={handleStartGame}
        className={`start-button__container button ${
          falseStart ? "error" : ""
        }`}
      >
        <StartButton
          start={start}
          text={!start ? t("start-game") : t("retry")}
        />
      </div>
      <div className={`attempts__container ${!attempts ? "error" : ""}`}>
        <Attempts text={t("attempts-left")} />
      </div>
    </div>
  );
}
