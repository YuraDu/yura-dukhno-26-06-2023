import { useDispatch, useSelector } from "react-redux";
import "./Alert.css";
import { useEffect } from "react";
import { setAlert } from "../../Redux/reducers/generalSlice";
import { useTranslation } from "react-i18next";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.general.alert);
  const { t } = useTranslation();

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      dispatch(setAlert(""));
    }, 1500);
    return () => {
      clearTimeout(alertTimeout);
    };
  }, [alert]);

  return (
    <div
      style={alert === "" ? { padding: "0" } : { pointerEvents: "none" }}
      className="alert__container"
    >
      <div className={`alert-message ${alert}`}>{t(alert)}</div>
    </div>
  );
};
export default Alert;
