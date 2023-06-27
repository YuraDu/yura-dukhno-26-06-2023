import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const withConfig = Component => {
  // eslint-disable-next-line react/display-name
  return props => {
    const [flipped, setFlipped] = useState(false);

    const active = useSelector(state => state.general.gameActive);

    const handleFlip = () => {
      setFlipped(!flipped);
    };

    Component.propTypes = {
      card: PropTypes.object,
    };

    useEffect(() => {
      if (!active) setFlipped(false);
    }, [active]);

    return <Component flipped={flipped} handleFlip={handleFlip} {...props} />;
  };
};
