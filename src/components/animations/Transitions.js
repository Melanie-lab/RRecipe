import React from "react";
import { animated, useTransition } from "react-spring";
import { Switch, useLocation } from "react-router-dom";

const Transitions = ({ children }) => {
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.key, {
    from: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      transform: "translate3d(100%, 0, 0)",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" },
  });

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>{children}</Switch>
    </animated.div>
  ));
};

export default Transitions;
