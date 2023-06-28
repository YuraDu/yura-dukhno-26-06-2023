import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Attempts = ({ text }) => {
  const attempts = useSelector(state => state.general.attempts);
  return <div>{`${text}: ${attempts}`}</div>;
};

Attempts.propTypes = {
  text: PropTypes.string,
};

export default Attempts;
