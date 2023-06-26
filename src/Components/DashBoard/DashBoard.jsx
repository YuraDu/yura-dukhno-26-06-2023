import Timer from "./../Timer/Timer";
import PauseIcon from "@mui/icons-material/Pause";
import Attempts from "./../Attempts/Attempts";
import { useTranslation } from "react-i18next";

import "./DashBoard.css";

export default function DashBoard() {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <div className="timer__container">
        <Timer duration={60} text={t("time-left")} />
        <PauseIcon />
      </div>
      <div className="attempts__container">
        <Attempts text={t("attempts-left")} />
      </div>
    </div>
  );
}
