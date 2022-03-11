
   
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signin, signup } from "../api/user.api";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE } from "../constants/notNamedYet";
import { useDispatch } from "react-redux";
import { setIsAuthAction, setUserAction } from "../redux/actions/userAction";
import { useAppSelector } from "../utils/reduxHooks";

type Inputs = {
  email: string;
  password: string;
  name: string;
};

const Auth = () => {
  const [loginError, setLoginError] = useState("");
  const { isAuth, user } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { email, password, name } = data;
      if (isLogin) {
        var responseUser = await signin(email, password);
      } else {
        var responseUser = await signup(email, password, name);
      }
      console.log(localStorage.getItem("accessToken"));
      console.log(responseUser);
      dispatch(setUserAction(responseUser));
      dispatch(setIsAuthAction(true));
      setTimeout(() => {
        navigate(-1);
        //navigate(HOME_ROUTE, { replace: false });
      }, 1000);
    } catch (e: any) {
      setLoginError(e.response.data.message);
    }
  };
  if (isAuth)
    return (
      <Cont>
        <div className="container">
          <h3>You are successfully authenticated!</h3>
        </div>
      </Cont>
    );
  else
    return (
      <Cont>
        <div className="container">
          {isLogin ? <h3>Log in</h3> : <h3>Registration</h3>}
          <form className="flex" onSubmit={handleSubmit(onSubmit)}>
            <label>Email:</label>
            <input
              type="email"
              {...register("email", {
                required: 'Field "Email" cannot be empty',
              })}
            />
            <div className="errors">
              {errors?.email && (
                <p>{errors?.email?.message || "Form filled out incorrectly"}</p>
              )}
            </div>
            <label>Password:</label>
            <input
              type="password"
              {...register("password", {
                required: 'Field "Password" cannot be empty',
                minLength: {
                  value: 3,
                  message: "Password must be longer than 3 characters",
                },
              })}
            />
            <div className="errors">
              {errors?.password && (
                <p>
                  {errors?.password?.message || "Form filled out incorrectly"}
                </p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  {...register("name", {
                    required: 'Field "Name" cannot be empty',
                  })}
                />
                <div className="errors">
                  {errors?.name && (
                    <p>
                      {errors?.name?.message || "Form filled out incorrectly"}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* {errors.email && errors.password && <p>Fill in all the fields</p>} */}
            <input type="submit" value={isLogin ? "Log in" : "Registration"} />
            <div className="errors">
              {loginError && isLogin && <p>Log in error: {loginError}</p>}
            </div>
          </form>

          <div>
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <NavLink to={REGISTRATION_ROUTE}>
                  <span>Register!</span>
                </NavLink>
              </p>
            ) : (
              <p>
                Have an account?{" "}
                <NavLink to={LOGIN_ROUTE}>
                  <span>Log in!</span>
                </NavLink>
              </p>
            )}
          </div>
        </div>
      </Cont>
    );
};

export default Auth;

const Cont = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;
  div {
    min-width: 100px;
    max-width: 450px;
  }
  h3 {
    font-size: 1.5em;
    color: blue;
    text-align: center;
  }
  span {
    color: #1717ee;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 0.5em;
    margin-top: 0.5em;
    background-color: #186183;

  }
  label {
    margin-top: 0.5em;
  }
`;