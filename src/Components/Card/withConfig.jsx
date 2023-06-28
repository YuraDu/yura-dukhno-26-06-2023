/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveAttempt,
  setConcurrence,
  setSelected,
} from "../../Redux/reducers/generalSlice";

export const withConfig = Component => {
  // eslint-disable-next-line react/display-name
  return props => {
    const [flipped, setFlipped] = useState(false);

    const dispatch = useDispatch();

    const active = useSelector(state => state.general.gameActive);
    const selected = useSelector(state => state.general.selected);
    const activeAttempt = useSelector(state => state.general.activeAttempt);
    const pairs = useSelector(state => state.general.pairs);

    const handleSelect = (name, container) => {
      setFlipped(!flipped);
      if (!selected.name) dispatch(setActiveAttempt(true));
      if (selected.name === name) {
        dispatch(setConcurrence(name));
        dispatch(setActiveAttempt(false));
      } else {
        if (activeAttempt) {
          dispatch(setActiveAttempt(false));
          dispatch(setSelected({ name: "", container: "" }));
        } else dispatch(setSelected({ name, container }));
      }
    };

    Component.propTypes = {
      card: PropTypes.object,
      container: PropTypes.string,
    };

    useEffect(() => {
      if (!active) setFlipped(false);
      else if (!activeAttempt) {
        const card = pairs.some(pair => pair.cardName === props.card.name);
        if (!card) {
          const timeout = setTimeout(() => {
            setFlipped(false);
          }, 1000);
          return () => clearTimeout(timeout);
        }
      }
    }, [active, activeAttempt]);

    return <Component flipped={flipped} handleFlip={handleSelect} {...props} />;
  };
};
