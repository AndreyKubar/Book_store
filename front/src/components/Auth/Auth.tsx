import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  signinThunk,
  signupThunk,
} from "../../redux/user/userAuth/userAuthThunk";
import { Location, useLocation, useNavigate } from "react-router-dom";

import { Button, Grid, TextField, Link } from "@mui/material";
import { Box } from "@mui/system";
import { AuthDiv, AuthHeader } from "./Auth.styled";
import { signinApi } from "../../api/user.api";


function Auth() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    dob: "",
    password: "",
  });
  const [authUi, setAuthUi] = useState({ isLogin: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    if (authUi.isLogin) {
      const res = await dispatch(signinThunk({ email: data.email, password: data.password }));
      console.log(res);
      

    } else {
      const res = await dispatch(signupThunk(data));
      console.log(res);
      
    }
    navigate("/");

  };
  


  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setData({ ...data, [ev.currentTarget.name]: ev.currentTarget.value });
  };

  const handleAuthType: React.MouseEventHandler<HTMLAnchorElement> = () => {
    setAuthUi({ isLogin: !authUi.isLogin });
  };

  return (
    <Box
      className="wrapper"
      sx={{
        width: "100%",
        // height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <AuthHeader className="login__header">
          <AuthDiv>Bookstore Name</AuthDiv>
          <AuthDiv>{authUi.isLogin ? "Вход" : "Регистрация"}</AuthDiv>
        </AuthHeader>
        <Box
          className="login__form"
          component="form"
          sx={{
            margin: "auto auto",
            maxWidth: "500px",
            width: "100%",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
          onSubmit={handleSubmit}
        >
          {!authUi.isLogin && (
            <>
              <TextField
                className="form__input"
                margin="normal"
                fullWidth
                id="fullname"
                label="Ваше Имя"
                name="fullname"
                autoComplete="off"
                autoFocus
                onChange={handleInputChange}

              />
              <TextField
                className="form__input"
                margin="normal"
                fullWidth
                id="dob"
                label="Ваша дата рождения"
                name="dob"
                autoComplete="off"

                onChange={handleInputChange}
              />
            </>
          )}
          <TextField
            className="form__input"
            margin="normal"
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"

            autoComplete="off"
            onChange={handleInputChange}

          />
          <TextField
            className="form__input"
            margin="normal"
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="off"
            onChange={handleInputChange}

          />
          <Button
            className="form__button"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {authUi.isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
          <Grid container>
            {authUi.isLogin && (
              <Grid item xs>
                <Link
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  className="auth__link"
                >
                  Забыли пароль?
                </Link>
              </Grid>
            )}
            <Grid item>
              <Link
                sx={{ cursor: "pointer" }}
                variant="body2"
                className="auth__link"
                onClick={handleAuthType}
              >
                {authUi.isLogin
                  ? "Зарегистрироваться"
                  : "Уже зарегистрированы?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Auth;