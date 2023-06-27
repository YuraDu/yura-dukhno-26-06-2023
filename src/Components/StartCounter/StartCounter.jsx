import { useState, useEffect } from "react";
import "./StartCounter.css";

const StartCounter = () => {
  const [count, setCount] = useState(3);
  const [displayText, setDisplayText] = useState("");
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (count > 1) {
        setAnimation(true);
        setCount(count - 1);
      } else if (count === 1) {
        setDisplayText("Start");
        setCount(count - 1);
      } else {
        setAnimation(false);
        clearInterval(countdown);
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [count]);

  return (
    <div className="start-counter__container">
      <div
        className={`counter ${animation ? "animated" : !count ? "hidden" : ""}`}
      >
        {displayText || count}
      </div>
    </div>
  );
};
export default StartCounter;
