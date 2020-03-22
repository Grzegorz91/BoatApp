import updateBoat from "./updateBoat";
import getBoats from "./getBoats";

const updateRow = async (
  updateName,
  updateDescription,
  setEditMode,
  id,
  setBoatData,
  history
) => {
  if (updateName !== "" && updateDescription !== "") {
    await updateBoat(updateName, updateDescription, id, history);
    await getBoats(setBoatData, history);
  }

  setEditMode(false);
};

export default updateRow;
