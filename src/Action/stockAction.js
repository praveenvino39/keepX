const getStock = () => {
  return {
    type: "GETSTOCKS",
  };
};

const addStock = (stockItem) => {
  return {
    type: "ADDSTOCK",
    payload: stockItem,
  };
};

const takeStock = (stockItem) => {
  return {
    type: "TAKESTOCK",
    payload: stockItem,
  };
};

export { getStock, addStock, takeStock };
