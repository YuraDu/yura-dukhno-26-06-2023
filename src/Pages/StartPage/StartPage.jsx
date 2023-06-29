import { useTranslation } from "react-i18next";
import "./StartPage.css";

const StartPage = () => {
  const { t } = useTranslation();

  return (
    <div className="rules-container">
      <h2 className="rules-heading">{t("goal")}</h2>
      <ul className="rules-list">
        {t("rules", { returnObjects: true }).map((rule, index) => (
          <li key={index} className="rule-item">
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StartPage;
