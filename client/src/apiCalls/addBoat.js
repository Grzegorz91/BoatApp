import axios from "axios";
import errorHandling from "../utils/errorHandling";
import notification from "../utils/notification";

const addBoat = async (name, description, history) => {
  try {
    await axios.post(
      "/api/v1/boats",
      { name, description },
    );
    const message = "You have successfully created a boat";

    notification("Boat", message, "success");
  } catch (e) {
    errorHandling(e, "Boat", history);
  }
};

export default addBoat;
