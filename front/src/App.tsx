import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { check } from "./api/user.api";
import { setIsAuthAction, setUserAction } from "./redux/actions/userAction";
import AppRouter from "./components/AppRouter";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    check()
      .then((user) => {
        dispatch(setIsAuthAction(true));
        dispatch(setUserAction(user));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>load</h1>;
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;