import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  resetState,
  setGameActive,
  setShuffle,
  setStart,
} from "../../Redux/reducers/generalSlice";

const Timer = ({ duration, text, setNoTimeLeft }) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const gameActive = useSelector(state => state.general.gameActive);
  const retry = useSelector(state => state.general.retry);
  // const pause = useSelector(state => state.general.pause);

  const dispatch = useDispatch();

  useEffect(() => {
    let timerInterval = null;

    if (gameActive && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    }

    if (!gameActive) {
      setTimeRemaining(duration);
      dispatch(setShuffle());
    }

    if (timeRemaining < 15) {
      setNoTimeLeft(true);
    } else if (timeRemaining === duration) {
      setNoTimeLeft(false);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [gameActive, timeRemaining, retry]);

  useEffect(() => {
    if (timeRemaining === 0) {
      dispatch(setGameActive(false));
      dispatch(setStart(false));
      setTimeRemaining(duration);
      dispatch(resetState());
      console.log("Time's up!");
    }
  }, [timeRemaining]);

  useEffect(() => {
    // if (retry) {
    setTimeRemaining(duration);
    // }
  }, [retry]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div>
      <span>
        {text}: {formattedMinutes}:{formattedSeconds}
      </span>
    </div>
  );
};

Timer.propTypes = {
  duration: PropTypes.number,
  text: PropTypes.string,
  setNoTimeLeft: PropTypes.func,
};

export default Timer;
