const findElementToEdit = (boatData, id) => {
  const findById = boatData.some(element => element.id === id);

  return findById
};

export default findElementToEdit
