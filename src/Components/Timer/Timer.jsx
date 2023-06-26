import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ duration, text }) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    let timerInterval = null;

    if (timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeRemaining]);

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
};

export default Timer;
