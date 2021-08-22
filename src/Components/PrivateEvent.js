import React from "react";
import { Route } from "react-router";
import Event from "./Event";
import NoAccess from "./NoAccess";

const PrivateEvent = (players, event) => {
  return (event !== "") ? (
    <Route>
      <Event players={players} />
    </Route>
  ) : (
    <Route>
      <NoAccess />
    </Route>
  );
};

export default PrivateEvent;
