import { useState, useEffect } from "react";
import "./StartCounter.css";
import { useDispatch } from "react-redux";
import { setGameActive } from "./../../Redux/reducers/generalSlice";

const StartCounter = () => {
  const [count, setCount] = useState(3);
  const [displayText, setDisplayText] = useState("");
  const [hidden, setHidden] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const countdown = setInterval(() => {
      if (count > 1) {
        setCount(count - 1);
      } else if (count === 1) {
        setDisplayText("START");
        dispatch(setGameActive(true));
        setCount(count - 1);
      } else {
        setHidden(true);
        clearInterval(countdown);
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [count]);

  return (
    <div className="start-counter__container">
      {!hidden && <div>{displayText || count}</div>}
    </div>
  );
};
export default StartCounter;
