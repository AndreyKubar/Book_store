import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import PrivateRoute, { PrivateRouteProps } from "./components/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";


import { useDispatch } from "react-redux";
import { useAppSelector } from "./utils/reduxHooks";
import { tokenAuthThunk } from "./redux/user/userAuth/userAuthThunk";
import { getUserDataThunk } from "./redux/user/userData/userDataThunk";
import UserCart from "./components/Userpage/Cart/UserCart";
import UserPage from "./components/Userpage/UserPage";
import UserProfile from "./components/Userpage/Profile/UserProfile";
import UserOrders from "./components/Userpage/Orders/UserOrders";
import UserWishlist from "./components/Userpage/Wishlist/UserWishlist";
import NotFound from "./components/NotFound/NotFound";
import { userGetData } from "./api/user.api";

// const  Home = () => <h1>Home</h1>

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

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await userGetData()
        console.log('>>DATA', response.data)
      } catch(er) {
        console.log(er)
      }

    }
  })

  // if (!isCompleted) {
  //   return <h2>Loading</h2>;
  // }

  const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    isAuthenticated: isSignIn,
    authenticationPath: "/auth",
  };
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<Auth />} />
          <Route
            path="userpage"
            element={
              <PrivateRoute {...defaultPrivateRouteProps} outlet={<UserPage />} />
            }
          >
            <Route
              path="profile"
              element={
                <PrivateRoute
                  {...defaultPrivateRouteProps}
                  outlet={<UserProfile />}
                />
              }
            />
            <Route
              path="orders"
              element={
                <PrivateRoute
                  {...defaultPrivateRouteProps}
                  outlet={<UserOrders />}
                />
              }
            />
            <Route
              path="wishlist"
              element={
                <PrivateRoute
                  {...defaultPrivateRouteProps}
                  outlet={<UserWishlist />}
                />
              }
            />
            <Route
              path="cart"
              element={
                <PrivateRoute
                  {...defaultPrivateRouteProps}
                  outlet={<UserCart />}
                />
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  };


export default App;