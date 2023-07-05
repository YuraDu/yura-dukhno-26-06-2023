import { useDispatch, useSelector } from "react-redux";
import "./ErrorsPopUp.css";
import { useEffect } from "react";
import { addError } from "../../Redux/reducers/generalSlice";
import { useSpring, animated } from "@react-spring/web";

const ErrorsPopUp = () => {
  const [springs, api] = useSpring(() => ({
    from: {
      x: 0,
      y: 0,
    },
  }));
  const dispatch = useDispatch();
  const error = useSelector(state => state.general.error);

  useEffect(() => {
    if (error) {
      api.start({
        from: {
          x: -160,
          y: 0,
        },
        to: {
          x: -160,
          y: -70,
        },
      });
    }
    const timeOut = setTimeout(() => {
      if (error) {
        api.start({
          from: {
            x: -160,
            y: -70,
          },
          to: {
            x: -160,
            y: 0,
          },
        });
      }
    }, 2000);
    const errorTimeout = setTimeout(() => {
      dispatch(addError(""));
    }, 3000);
    return () => {
      clearTimeout(timeOut);
      clearTimeout(errorTimeout);
    };
  }, [error]);

  return (
    <animated.div style={{ ...springs }} className="errors__container">
      <div className="error">{error}</div>
    </animated.div>
  );
};
export default ErrorsPopUp;
