import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updatePassword, updateUser } from "../api/user.api";
import { setIsAuthAction, setUserAction } from "../redux/actions/userAction";
import { useAppSelector } from "../utils/reduxHooks";

interface DataChangeInputs {
  name: string;
  files: FileList;
}
interface PasswordChangeInputs {
  oldPassword: string;
  newPassword: string;
}

const Admin: React.FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register: registerData,
    setValue: setValueData,
    handleSubmit: handleSubmitData,
    reset: resetData,
    formState: { errors: errorsData, isValid: isValidData },
  } = useForm<DataChangeInputs>({ mode: "onBlur" });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    reset: resetPassword,
    formState: { errors: errorsPassword, isValid: isValidPassword },
  } = useForm<PasswordChangeInputs>({ mode: "onBlur" });

  const onSubmitDataChange: SubmitHandler<DataChangeInputs> = async (data) => {
    try {
      const { name, files } = data;
      const responseUser = await updateUser(name, files[0]);
      dispatch(setUserAction(responseUser));
      console.log(files[0]);
      // resetData();
      alert("Data changed successfully");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };


  const onSubmitPasswordChange: SubmitHandler<PasswordChangeInputs> = async (
    data
  ) => {
    try {
      const { oldPassword, newPassword } = data;
      const responseUser = await updatePassword(oldPassword, newPassword);
      resetPassword();
      alert("Password changed successfully");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <Div>
      <div className="column">
        <h3>Change user data</h3>
        <form key={1} onSubmit={handleSubmitData(onSubmitDataChange)}>
          <label>Name:</label>
          <input
            defaultValue={user ? user.name : ""}
            {...registerData("name", {
              required: 'Field "name" cannot be empty',
            })}
          ></input>
          <label>Avatar:</label>
          <img
            width={200}
            src={
              user
                ? user.img
                  ? process.env.REACT_APP_API_URL + user.img
                  : process.env.REACT_APP_API_URL + "avatar.png"
                : ""
            }
          ></img>
          <input {...registerData("files")} type="file" />
          <input type="submit" value={"change"}></input>
        </form>
      </div>

      <div className="column">
        <h3>Change user password</h3>
        <form key={2} onSubmit={handleSubmitPassword(onSubmitPasswordChange)}>
          <label>Old password:</label>
          <input
            type="password"
            {...registerPassword("oldPassword", {
              required: 'Field "old password" cannot be empty',
            })}
          ></input>
          <label>New password:</label>
          <input
            type="password"
            {...registerPassword("newPassword", {
              required: 'Field "new password" cannot be empty',
            })}
          ></input>
          <input type="submit" value={"change"}></input>
        </form>
      </div>
    </Div>
  );
};

export default Admin;

const Div = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  .column {
    width: 500px;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 1.5em;
      color: blue;
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        margin-top: 0.5em;
      }
      input {
        margin: 10px 0;
        padding: 10px 15px;
        border: 2px solid gray;
        border-radius: 5px;
        font-size: 1em;
      }
      span {
        color: blue;
      }
      input[type="file"] {
      }
      input[type="submit"],
      input[type="file"] {
        border: 2px solid blue;
        background-color: white;
        cursor: pointer;
        :hover {
          background-color: gray;
          color: white;
          border-color: gray;
        }
      }
    }
  }
`;