import axios from "axios";
import errorHandling from "../utils/errorHandling";

const getBoats = async (setBoatData, history) => {
  try {
    const { data } = await axios.get(
      "/api/v1/boats"
    );

    setBoatData(data.boats);
  } catch (e) {
    errorHandling(e, "Boat", history);
  }
};

export default getBoats;
