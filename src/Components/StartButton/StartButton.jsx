import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const StartButton = React.memo(({ text }) => {
  return <div>{text}</div>;
});

StartButton.propTypes = {
  text: PropTypes.string,
};

export default StartButton;
