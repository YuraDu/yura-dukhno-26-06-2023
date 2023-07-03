import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import "./LeadersPage.css";

const LeadersPage = () => {
  const leaders = useSelector(state => state.general.leaders);

  const { t } = useTranslation();

  const sortedLeaders = [...leaders].sort(
    (a, b) => a.attempts - b.attempts || a.time - b.time
  );

  return (
    <div className="leaders__container">
      <div className="leaders">
        <h2 className="leaders-header">{`${t("leaders")}:`}</h2>
        <ul className="leaders-list">
          {sortedLeaders.map((leader, index) => (
            <li className="leaders-item" key={index}>
              {`${leader.nickname.toUpperCase()} - ${t("spent")} ${
                leader.attempts
              } ${t("attempts-for")} ${leader.time} ${t("seconds")}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeadersPage;
