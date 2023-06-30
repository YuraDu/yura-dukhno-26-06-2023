import { useDispatch, useSelector } from "react-redux";
import "./Alert.css";
import { useEffect } from "react";
import { setAlert } from "../../Redux/reducers/generalSlice";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.general.alert);

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      dispatch(setAlert(""));
    }, 500);
    return () => {
      clearTimeout(alertTimeout);
    };
  }, [alert]);

  return (
    <div className="alert__container">
      <div className="alert-message">{alert}</div>
    </div>
  );
};
export default Alert;
