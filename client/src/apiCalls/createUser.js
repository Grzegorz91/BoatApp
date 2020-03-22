import axios from "axios";
import notification from "../utils/notification";
import errorHandling from "../utils/errorHandling";

const createUser = async (email, password, history) => {
  try {
    const registerUser = await axios.post(
      "/api/v1/signup",
      {
        user: {
          email,
          password
        }
      }
    );

    const message =
      "You have successfully created an account. You have been signed in automatically";

    notification("Authentication", message, "success");

    history.push("/boats");

    return registerUser;
  } catch (e) {
    errorHandling(e, "Authentication", history);
  }
};

export default createUser;
