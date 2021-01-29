var stocks = [
  { id: 1, name: "sugar", quantity: 0, quantityType: "KG" },
  { id: 2, name: "rice", quantity: 0, quantityType: "KG" },
  { id: 3, name: "tomoto", quantity: 0, quantityType: "KG" },
  { id: 4, name: "milk", quantity: 0, quantityType: "LI" },
];

const stockReducer = (state = stocks, action) => {
  switch (action.type) {
    case "GETSTOCK":
      return state;
    case "ADDSTOCK":
      const stockItem = stocks.find((e) => e.name === action.payload.name);
      if (stockItem !== undefined) {
        stockItem.quantity = parseInt(action.payload.quantity);
        state = stocks;
      } else {
        stocks.push(action.payload);
      }

      state = stocks;

      return state;
    case "TAKESTOCK":
      const stockItems = stocks.find((e) => e.name === action.payload.name);
      if (stockItems !== undefined) {
        stockItems.quantity =
          stockItems.quantity - parseInt(action.payload.quantity);
        state = stocks;
      }
      return state;
    default:
      return state;
  }
};

export default stockReducer;
