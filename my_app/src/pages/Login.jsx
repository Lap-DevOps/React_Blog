import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import Mybutton from "../components/UI/button/Mybutton";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", true);
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Login"></MyInput>
        <MyInput type="password" placeholder="Password"></MyInput>
        <Mybutton>Login</Mybutton>
      </form>
    </div>
  );
};

export default Login;
