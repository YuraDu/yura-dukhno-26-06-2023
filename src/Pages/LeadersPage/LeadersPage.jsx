import { useSelector } from "react-redux";

const LeadersPage = () => {
  const leaders = useSelector(state => state.general.leaders);

  const sortedLeaders = [...leaders].sort(
    (a, b) => a.attempts - b.attempts || a.time - b.time
  );

  return (
    <div>
      <h2>Leader</h2>
      <ul>
        {sortedLeaders.map((leader, index) => (
          <li key={index}>
            {leader.nickname} - Attempts: {leader.attempts}, Time: {leader.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadersPage;
