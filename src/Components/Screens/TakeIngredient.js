import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppToolBar from "../Reusable/AppToolBar";
import Style from "./AddScreen.module.css";
import { takeStock } from "../../Action/stockAction";

function TakeIngredient() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.storeReducer);
  const availableItems = useSelector((state) => state.stockReducer);
  const [toast, setToast] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [item, setItem] = useState({ id: 0, name: "", quantity: "" });
  const [availableQuantity, setAvailableQuantity] = useState();
  return (
    <div className={Style.container}>
      <AppToolBar title="Take Stock" />
      <div className={Style.form_style}>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Ingredients
          </InputLabel>
          <Select
            onChange={(event) => {
              setSelectedValue(event.target.value);
              setItem({ ...item, name: event.target.value });
              const stockItem = availableItems.find(
                (e) => e.name === event.target.value
              );
              if (stockItem !== undefined) {
                setAvailableQuantity(stockItem.quantity);
              }
            }}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedValue}
            label="Ingredients"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {items.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          {console.log(availableQuantity)}
          {availableQuantity !== undefined ? (
            <div
              style={{
                textAlign: "centconst [toast, setToast] = useState(false);x",
                flexDirection: "column",
                alignItems: "center",
                color: availableQuantity === 0 ? "red" : "green",
                justifyContent: "center",
              }}
            >
              <div>Available Quantity</div>
              <div>
                {availableQuantity}
                {items.find((item) => item.name === selectedValue).quantityType}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className={Style.quantity}>
            <TextField
              label="Quantity"
              onChange={(event) => {
                setItem({ ...item, quantity: event.target.value });
              }}
            />
          </div>
          <div className={Style.btn}>
            <Button
              disabled={
                (item.quantity =
                  0 ||
                  item.name.length <= 0 ||
                  item.quantity > availableQuantity
                    ? true
                    : false)
              }
              variant="contained"
              color="primary"
              onClick={() => {
                if (availableQuantity >= item.quantity) {
                  dispatch(takeStock(item));
                  setToast(true);
                  setTimeout(() => setToast(false), 2000);
                } else alert("Stock doesn't enough quantity ");
              }}
            >
              Take Stock
            </Button>
          </div>
        </FormControl>
      </div>
      <div className={Style.toast_container}>
        {toast && (
          <Alert className={Style.toast} severity="success" color="info">
            Stock taken from the store.
          </Alert>
        )}
      </div>
    </div>
  );
}

export default TakeIngredient;
