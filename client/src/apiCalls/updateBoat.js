import axios from "axios";
import errorHandling from "../utils/errorHandling";
import notification from "../utils/notification";

const updateBoat = async (updateName, updateDescription, id, history) => {
  try {
    await axios.put(`/api/v1/boats/${id}`, {
      name: updateName,
      description: updateDescription
    });

    const message = "You have successfully updated a boat";

    notification("Boat", message, "success");
  } catch (e) {
    errorHandling(e, "Boat", history);
  }
};

export default updateBoat;
