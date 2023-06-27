// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setGameActive } from "./../../Redux/reducers/generalSlice";
// import "./StartCounter.css";

// const StartCounter = () => {
//   const [count, setCount] = useState(3);
//   const [displayText, setDisplayText] = useState("");
//   const [hidden, setHidden] = useState(false);
//   console.log(
//     "🚀 ~ file: StartCounter.jsx:10 ~ StartCounter ~ hidden:",
//     hidden
//   );

//   const start = useSelector(state => state.general.start);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       if (start) {
//         if (count > 1) {
//           setCount(count - 1);
//         } else if (count === 1) {
//           setDisplayText("START");
//           setCount(count - 1);
//         } else {
//           dispatch(setGameActive(true));
//           setHidden(true);
//           clearInterval(countdown);
//         }
//       }
//     }, 1000);

//     return () => {
//       clearInterval(countdown);
//     };
//   }, [count, start, dispatch]);

//   return (
//     <div className="start-counter__container">
//       {start && !hidden && <div>{displayText || count}</div>}
//     </div>
//   );
// };

// export default StartCounter;
