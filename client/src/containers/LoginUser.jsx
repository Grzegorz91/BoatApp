import React from "react";
import signIn from "../apiCalls/signIn";
import LoginForm from "../components/login/LoginForm";
import { useHistory } from "react-router-dom";

const LoginUser = () => {
  const history = useHistory();

  const signInUser = async ({ email, password }) => {
    await signIn(email, password, history);
  };

  return <LoginForm signInUser={signInUser} />;
};

export default LoginUser;
