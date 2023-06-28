import { useDispatch, useSelector } from "react-redux";
import "./ErrorsPopUp.css";
import { useEffect } from "react";
import { addError } from "../../Redux/reducers/generalSlice";

const ErrorsPopUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.general.error);

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      dispatch(addError(""));
    }, 3000);
    return () => clearTimeout(errorTimeout);
  }, [error]);

  return (
    <div className="errors__container">
      {error && <div className="error disappear">{error}</div>}
    </div>
  );
};
export default ErrorsPopUp;
