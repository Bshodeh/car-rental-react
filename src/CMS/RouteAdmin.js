import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
// ACTIONS
import loggingInAction from "../../actions/loggingInAction";
import userDataAction from "../../actions/userDataAction";
//REDUX
import { useSelector, useDispatch } from "react-redux";
const RouteAdmin = () => {
  const { response } = useSelector((state) => state.adminLoggingIn);
  const ref = useRef();
  useEffect(() => {
    if (response === "sucess") {
      history.push("/");
    }
    if (response === "empty") {
      ref.current = <Wrong>You should insert data</Wrong>;
      console.log(ref.current);
    }
    if (response === "wrong") {
      ref.current = <Wrong>Wrong ID or Password</Wrong>;
    }
    if (response === "disabled") {
      ref.current = <Wrong>Your Account is disabled , contact the admin</Wrong>;
    }
  }, [response]);
  return <div>{ref.current}</div>;
};
const Wrong = styled.div`
  padding: 0.5em;
  margin: 0.5em 0;
  font-size: 1.1rem;
  color: red;
  background: rgb(0 0 0 /10%);
`;
export default RouteAdmin;
