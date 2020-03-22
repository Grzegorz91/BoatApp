import axios from "axios";
import errorHandling from "../utils/errorHandling";
import notification from "../utils/notification";

const deleteBoat = async (id, history) => {
  try {
    await axios.delete(`/api/v1/boats/${id}`);

    const message = "You have successfully deleted a boat";

    notification("Boat", message, "success");
  } catch (e) {
    errorHandling(e, "Boat", history);
  }
};

export default deleteBoat;
