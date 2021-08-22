import React from "react";
import { Route } from "react-router";
import Submit from "./Submit";
import NoAccess from "./NoAccess";

const PrivateSubmit = (event) => {


    console.log(event)
  return (event !== "") ? (
    <Route>
      <Submit />
    </Route>
  ) : (
    <Route>
      <NoAccess />
    </Route>
  );
};

export default PrivateSubmit;
