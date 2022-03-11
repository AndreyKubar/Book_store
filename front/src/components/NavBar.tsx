import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../utils/reduxHooks";
import { setIsAuthAction } from "../redux/actions/userAction";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  BASKET_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
} from "../constants/notNamedYet";

const NavBar: React.FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Nav>
      <HeaderMain>
        <NavLink

          to={HOME_ROUTE}
          className={({ isActive }) => (isActive ? "link link--active" : "link")}
        >
          <HeaderLogo className="header__logo">
            <p className="header__text">Bookstore</p>
          </HeaderLogo>

        </NavLink>
        {isAuth ? (
          <Nav>
            <img
              src={
                user
                  ? user.img
                    ? process.env.REACT_APP_API_URL + user.img
                    : process.env.REACT_APP_API_URL + "avatar.png"
                  : ""
              }
            ></img>
            <h2>Welcome {user ? user.name : ""}! &#128512;</h2>
            <NavLink
              className={"link"}
              to={HOME_ROUTE}
              onClick={() => {
                dispatch(setIsAuthAction(false));
                localStorage.removeItem("accessToken");
              }}
            >
              <LogoutIcon
                fontSize="large"
                sx={{ color: "black", cursor: "pointer" }}
              ></LogoutIcon>
            </NavLink>
            <NavLink

              className={({ isActive }) =>
                isActive ? "link link--active" : "link"
              }
              to={BASKET_ROUTE}
            >
              <ShoppingCartIcon
                fontSize="large"
                sx={{ color: "black" }}
              ></ShoppingCartIcon>

            </NavLink>
          </Nav>
        ) : (
          <Nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link--active" : "link"
              }
              to={LOGIN_ROUTE}
            >
              <AccountCircleIcon sx={{ color: "black" }} fontSize="large" />
            </NavLink>
          </Nav>
        )}
      </HeaderMain>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  height: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  
`


const HeaderLogo = styled.div`
  box-sizing: border-box;
  margin-right: 10px;
  .header__text {
    font-family: "Rowdies", sans-serif;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    margin: auto 0;
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header__menu {
    display: flex;
  }
  .header__icons {
    margin-right: 20px;
    &:last-child {
      margin: 0;
    }
  }
`;