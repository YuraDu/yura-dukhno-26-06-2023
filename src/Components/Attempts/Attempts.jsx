import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const Attempts = React.memo(({ text, attempts }) => {
  return <div>{`${text}: ${attempts}`}</div>;
});

Attempts.propTypes = {
  text: PropTypes.string,
  attempts: PropTypes.number,
};

export default Attempts;
