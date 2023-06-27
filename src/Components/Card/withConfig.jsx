import { useState } from "react";
import PropTypes from "prop-types";

export const withConfig = Component => {
  // eslint-disable-next-line react/display-name
  return props => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
      setFlipped(!flipped);
    };

    Component.propTypes = {
      card: PropTypes.object,
    };

    return <Component flipped={flipped} handleFlip={handleFlip} {...props} />;
  };
};
