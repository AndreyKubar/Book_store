import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import PrivateRoute, { PrivateRouteProps } from "../PrivateRoute/PrivateRoute";
import Layout from "../Layout/Layout";
import Auth from "../Auth/Auth";


import { useDispatch } from "react-redux";
import { useAppSelector } from "../../utils/reduxHooks";
import { tokenAuthThunk } from "../../redux/user/userAuth/userAuthThunk";
import { getUserDataThunk } from "../../redux/user/userData/userDataThunk";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isSignIn, isCompleted } = useAppSelector((state) => state.userAuth);
  const state = useAppSelector(state => state.userData)
  // const location = useLocation();
  // console.log("location", location);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(tokenAuthThunk(token));
    dispatch(getUserDataThunk(state));
  }, []);

  if (!isCompleted) {
    return null;
  }

  const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    isAuthenticated: isSignIn,
    authenticationPath: "/auth",
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="auth" element={<Auth />} />

      </Route>

      <Route path="*" element={<Layout />}>
      </Route>
    </Routes>
  );
};

export default App;