import axios from "axios";
import errorHandling from "../utils/errorHandling";
import notification from "../utils/notification";

const signIn = async (email, password, history) => {
  try {
    const loginUser = await axios.post(
      "/api/v1/login",
      {
        user: {
          email,
          password
        }
      }
    );

    const loginMessage = "you have successfully signed in";

    notification("Authentication", loginMessage, "success");

    history.push("/boats");

    return loginUser;
  } catch (e) {
    errorHandling(e, "Authentication", history);
  }
};

export default signIn;
