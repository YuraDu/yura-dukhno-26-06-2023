import PropTypes from "prop-types";

const StartButton = ({ text }) => {
  return <div>{text}</div>;
};

StartButton.propTypes = {
  text: PropTypes.string,
};

export default StartButton;
