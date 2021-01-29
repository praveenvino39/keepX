const getItems = () => {
  return {
    type: "GETITEMS",
  };
};
const addItem = (item) => {
  return {
    type: "ADDITEM",
    payload: item,
  };
};

export { getItems };
export { addItem };
