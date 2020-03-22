import React from "react";
import { useHistory } from "react-router-dom";
import createUser from "../apiCalls/createUser";
import RegisterLayout from "../components/register/RegisterLayout";

const RegistrationUser = () => {
  const history = useHistory();

  const registerUser = async values => {
    const { email, password } = values;

    await createUser(email, password, history);
  };

  const changeUrl = () => {
    history.push(`/`);
  };

  return <RegisterLayout changeUrl={changeUrl} registerUser={registerUser} />;
};

export default RegistrationUser;
