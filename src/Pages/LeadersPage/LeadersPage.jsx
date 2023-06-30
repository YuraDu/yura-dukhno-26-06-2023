// import { useSelector } from "react-redux";

const LeadersPage = () => {
  // const leaderboardData = useSelector(state => state.general.leaderboard);

  // Sort the leaderboard entries based on finishing time and number of attempts
  // const sortedEntries = [...leaderboardData].sort((a, b) => {
  //   if (a.finishingTime === b.finishingTime) {
  //     return a.attempts - b.attempts;
  //   }
  //   return a.finishingTime - b.finishingTime;
  // });

  return (
    <div>
      <h2>Leaders Board</h2>
      <ol>
        <li>
          <span>Name</span>
          <span>Finishing Time: 20</span>
          <span>Attempts: 6</span>
        </li>
        {/* {sortedEntries.map((entry, index) => (
          <li key={index}>
            <span>{entry.name}</span>
            <span>Finishing Time: {entry.finishingTime}</span>
            <span>Attempts: {entry.attempts}</span>
          </li>
        ))} */}
      </ol>
    </div>
  );
};

export default LeadersPage;
