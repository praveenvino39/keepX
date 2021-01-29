var items = [
  { id: 1, name: "sugar", quantityType: "KG" },
  { id: 2, name: "rice", quantityType: "KG" },
  { id: 3, name: "tomoto", quantityType: "KG" },
  { id: 4, name: "milk", quantityType: "LI" },
];

const storeReducer = (state = items, action) => {
  switch (action.type) {
    case "GETITEMS":
      return state;
    case "ADDITEM":
      action.payload["id"] = state.length + 1;
      items.push(action.payload);
      state = items;
      return state;
    default:
      return state;
  }
};

export default storeReducer;
