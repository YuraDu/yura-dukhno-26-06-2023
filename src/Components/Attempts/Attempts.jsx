import PropTypes from "prop-types";

const Attempts = ({ text }) => {
  return <div>{text}: 6</div>;
};

Attempts.propTypes = {
  text: PropTypes.string,
};

export default Attempts;
