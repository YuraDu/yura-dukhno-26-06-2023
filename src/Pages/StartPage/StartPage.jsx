import { useTranslation } from "react-i18next";
import "./StartPage.css";

const StartPage = () => {
  const { t } = useTranslation();

  return (
    <div className="rules-container">
      <div className="rules">
        <h2 className="rules-heading">{t("goal")}</h2>
        <ul className="rules-list">
          {t("rules", { returnObjects: true }).map((rule, index) => (
            <>
              <li key={index} className="rule-item">
                {rule}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StartPage;
