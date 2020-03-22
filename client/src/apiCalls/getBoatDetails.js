import axios from "axios";
import errorHandling from "../utils/errorHandling";

const getBoatDetails = async (id, setDetailsBoat, history) => {
  try {
    const getDetails = await axios.get(
      `/api/v1/boats/${id}`
    );

    const { name, description } = getDetails.data;

    setDetailsBoat({ name, description });
  } catch (e) {
    errorHandling(e, "Boat", history);
  }
};

export default getBoatDetails;
