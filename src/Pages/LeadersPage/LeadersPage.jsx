import { useSelector } from "react-redux";

import "./LeadersPage.css";

const LeadersPage = () => {
  const leaders = useSelector(state => state.general.leaders);

  const sortedLeaders = [...leaders].sort(
    (a, b) => a.attempts - b.attempts || a.time - b.time
  );

  return (
    <div className="leaders__container">
      <h2 className="leaders-header">Leaders:</h2>
      <ul className="leaders-list">
        {sortedLeaders.map((leader, index) => (
          <li className="leaders-item" key={index}>
            {`${leader.nickname.toUpperCase()} - SPENT ${
              leader.attempts
            } ATTEMPTS FOR ${leader.time} SECONDS`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadersPage;
