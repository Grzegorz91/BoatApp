import { useEffect, useState } from "react";
import getBoatDetails from "../apiCalls/getBoatDetails";

export default (props, history) => {
  const [detailsBoat, setDetailsBoat] = useState({ name: "", description: "" });

  useEffect(() => {
    async function getDetails() {
      const id = props.match.params.id;

      await getBoatDetails(id, setDetailsBoat, history);
    }

    getDetails();
  }, [props.match.params.id]);

  return detailsBoat;
};
