import Timer from "./../Timer/Timer";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import Attempts from "./../Attempts/Attempts";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import "./DashBoard.css";
import StartButton from "../StartButton/StartButton";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAttemptsPool,
  setAlert,
  setFirstRow,
  setGameActive,
  setGameStatus,
  setNewGame,
  setPause,
  setSecondRow,
  setShuffleCards,
  setShuffleMode,
  setStart,
  setTimeRemaining,
} from "../../Redux/reducers/generalSlice";
import { useEffect, useState } from "react";
import { checkConsecutive } from "../../Utils";

import cards from "./../../Data/Cards";
import {
  findCardsToShuffle,
  shuffleArray,
} from "../../Services/GameBoardServise";
import { Tooltip } from "@mui/material";

export default function DashBoard() {
  const { t } = useTranslation();
  const [noTimeLeft, setNoTimeLeft] = useState(false);
  const [timerTimeOut, setTimerTimeOut] = useState("");

  const dispatch = useDispatch();

  const start = useSelector(state => state.general.start);
  const falseStart = useSelector(state => state.general.falseStart);
  const attempts = useSelector(state => state.general.attempts);
  const pairs = useSelector(state => state.general.pairs);
  const attemptsPool = useSelector(state => state.general.attemptsPool);
  const timeRemaining = useSelector(state => state.general.timeRemaining);
  const pause = useSelector(state => state.general.pause);
  const gameActive = useSelector(state => state.general.gameActive);
  const firstRow = useSelector(state => state.general.firstRow);
  const secondRow = useSelector(state => state.general.secondRow);
  const swapped = useSelector(state => state.general.swapped);
  const shuffle = useSelector(state => state.general.shuffle);

  const handleShuffle = () => {
    const newFirstShuffledCards = shuffleArray(cards);
    const newSecondShuffledCards = shuffleArray(cards);

    dispatch(setFirstRow(newFirstShuffledCards));
    dispatch(setSecondRow(newSecondShuffledCards));
  };

  const startTimer = () => {
    let tTimeOut;
    tTimeOut = setInterval(() => {
      dispatch(setTimeRemaining());
    }, 1000);
    setTimerTimeOut(tTimeOut);
  };

  const handleStartGame = () => {
    switch (start) {
      case false:
        startTimer();
        dispatch(setNewGame());
        dispatch(setStart(true));
        dispatch(setGameActive(true));
        dispatch(setAlert("start"));
        handleShuffle();
        break;
      case true:
        dispatch(setNewGame());
        handleShuffle();
        dispatch(setAlert("start"));
        dispatch(setGameActive(true));
        dispatch(resetAttemptsPool());
        break;
      default:
        break;
    }
  };

  const handlePause = () => {
    if (gameActive) {
      switch (pause) {
        case true:
          dispatch(setPause(false));
          startTimer();
          break;
        case false:
          dispatch(setPause(true));
          clearInterval(timerTimeOut);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    handleShuffle();
    setTimeRemaining(60);
  }, []);

  useEffect(() => {
    const trueGuessedCards = pairs.filter(pair => pair.concurrence === true);
    switch (true) {
      case checkConsecutive(attemptsPool, true, 2):
        if (
          shuffle &&
          firstRow?.length > 0 &&
          !swapped &&
          trueGuessedCards?.length < 4
        ) {
          const firstCards = findCardsToShuffle(attemptsPool, firstRow);
          const secCards = findCardsToShuffle(attemptsPool, secondRow);
          dispatch(setShuffleCards({ first: firstCards, second: secCards }));
        }
        break;
      case checkConsecutive(attemptsPool, true, 3):
        dispatch(setAlert(t("great-job")));
        break;
      case checkConsecutive(attemptsPool, false, 3):
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
      dispatch(setGameActive(false));
      clearTimeout(timerTimeOut);
    }

    if (!attempts) {
      clearTimeout(timerTimeOut);
      dispatch(setGameStatus("lost"));
    }
  }, [pairs, attempts]);

  useEffect(() => {
    if (timeRemaining === 0) {
      dispatch(setGameStatus("lost"));
      dispatch(setNewGame());
      clearTimeout(timerTimeOut);
    }
  }, [timeRemaining]);

  return (
    <div className="dashboard">
      <div
        className={`timer__container dashboard-item ${
          noTimeLeft ? "error" : ""
        }`}
      >
        <Timer
          duration={60}
          text={t("time-left")}
          setNoTimeLeft={setNoTimeLeft}
        />
        {pause ? (
          <PlayArrowIcon onClick={handlePause} />
        ) : (
          <PauseIcon onClick={handlePause} />
        )}
        <Tooltip title={t("shuffle-mode")}>
          <Switch onClick={() => dispatch(setShuffleMode())} />
        </Tooltip>
      </div>
      <div
        onClick={handleStartGame}
        className={`start-button__container dashboard-item button ${
          falseStart ? "error" : ""
        }`}
      >
        <StartButton text={!start ? t("start-game") : t("retry")} />
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
