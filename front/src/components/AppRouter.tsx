import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../utils/reduxHooks";
import Auth from "../layouts/Auth";
import Home from "../layouts/Home";
import Basket from "../layouts/Basket";


import {
  BASKET_ROUTE,
  BOOK_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  HOME_ROUTE,
} from "../constants/notNamedYet";

import Layout from "./Layout";

export const privateRoutes = [
  { path: BASKET_ROUTE, Component: Basket },
];

export const publicRoutes = [
  { path: HOME_ROUTE, Component: Home },
  { path: LOGIN_ROUTE, Component: Auth },
  { path: REGISTRATION_ROUTE, Component: Auth },
];

const AppRouter: React.FC = () => {
  const isAuth = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />

          <Route
            path={BASKET_ROUTE}
            element={
              <RequireAuth>
                <Basket />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Route>
      </Routes>
    </>
  );
};

function RequireAuth({ children }: { children: JSX.Element }) {
  let { isAuth } = useAppSelector((state) => state.user);
  let location = useLocation();
  if (!isAuth) {
    return <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />;
  }
  return children;
}

export default AppRouter;

