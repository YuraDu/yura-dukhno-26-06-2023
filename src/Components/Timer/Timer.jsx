import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Timer = ({ text }) => {
  const timeRemaining = useSelector(state => state.general.timeRemaining);
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
