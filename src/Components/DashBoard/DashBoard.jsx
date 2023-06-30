import Timer from "./../Timer/Timer";
import PauseIcon from "@mui/icons-material/Pause";

import Attempts from "./../Attempts/Attempts";
import { useTranslation } from "react-i18next";

import "./DashBoard.css";
import StartButton from "../StartButton/StartButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setAlert,
  setGameActive,
  setGameStatus,
  setPause,
  setRetry,
  setShuffle,
  setStart,
} from "../../Redux/reducers/generalSlice";
import { useEffect, useState } from "react";
import { checkConsecutiveTrue, checkConsecutiveFalse } from "../../Utils";

export default function DashBoard() {
  const { t } = useTranslation();
  const [noTimeLeft, setNoTimeLeft] = useState(false);

  const dispatch = useDispatch();

  const start = useSelector(state => state.general.start);
  const falseStart = useSelector(state => state.general.falseStart);
  const attempts = useSelector(state => state.general.attempts);
  const pairs = useSelector(state => state.general.pairs);
  const attemptsPool = useSelector(state => state.general.attemptsPool);

  useEffect(() => {
    switch (true) {
      case checkConsecutiveTrue(attemptsPool):
        dispatch(setAlert(t("great-job")));
        break;
      case checkConsecutiveFalse(attemptsPool):
        dispatch(setAlert(t("better-luck")));
        break;
      default:
        break;
    }
  }, [attemptsPool]);

  useEffect(() => {
    const won = pairs.every(pair => pair.concurrence === true);

    if (won) {
      dispatch(setGameStatus("won"));
      dispatch(setRetry());
      dispatch(setGameActive(false));
    }

    if (!attempts) dispatch(setGameStatus("lost"));
  }, [pairs, attempts]);

  const handleStartGame = () => {
    let setShuffleTimeOut;
    switch (start) {
      case false:
        dispatch(setStart(true));
        dispatch(setGameActive(true));
        dispatch(setAlert("start"));
        break;
      case true:
        dispatch(setRetry());
        dispatch(setAlert("start"));
        setShuffleTimeOut = setTimeout(() => {
          dispatch(setShuffle());
        }, 500);
        return () => clearTimeout(setShuffleTimeOut);
      default:
        break;
    }
  };

  const handlePause = () => {
    dispatch(setPause(true));
  };

  return (
    <div className="dashboard">
      <div
        className={`timer__container dashboard-item button ${
          noTimeLeft ? "error" : ""
        }`}
      >
        <Timer
          duration={60}
          text={t("time-left")}
          setNoTimeLeft={setNoTimeLeft}
        />
        <PauseIcon onClick={handlePause} />
      </div>
      <div
        onClick={handleStartGame}
        className={`start-button__container dashboard-item button ${
          falseStart ? "error" : ""
        }`}
      >
        <StartButton
          start={start}
          text={!start ? t("start-game") : t("retry")}
        />
      </div>
      <div
        className={`attempts__container dashboard-item ${
          !attempts ? "error" : ""
        }`}
      >
        <Attempts attempts={attempts} text={t("attempts-left")} />
      </div>
    </div>
  );
}
