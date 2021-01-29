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
import { useSelector, useDispatch } from "react-redux";
import { addStock } from "../../Action/stockAction";
import AppToolBar from "../Reusable/AppToolBar";
import Style from "./AddScreen.module.css";

function AddScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.storeReducer);
  const [toast, setToast] = useState(false);
  console.log(items);
  const [item, setItem] = useState({ id: 0, name: "", quantity: "" });
  const [selectedValue, setSelectedValue] = useState({});
  return (
    <div className={Style.container}>
      <AppToolBar title="Add Stock" />
      <div className={Style.form_style}>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Ingredients
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedValue}
            label="Ingredients"
            onChange={(event) => {
              setSelectedValue(event.target.value);
              setItem({ ...item, name: event.target.value });
            }}
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
          <div className={Style.quantity}>
            <TextField
              inputProps={{
                autocomplete: "",
                form: {
                  autocomplete: "off",
                },
              }}
              autoComplete={false}
              type="number"
              onChange={(event) =>
                setItem({ ...item, quantity: event.target.value })
              }
              id="standard-basic"
              label="Quantity"
            />
          </div>
          <div className={Style.btn}>
            <Button
              onClick={() => {
                dispatch(addStock(item));
                setToast(true);
                setTimeout(() => setToast(false), 2000);
              }}
              variant="contained"
              color="primary"
            >
              Add Stock
            </Button>
          </div>
        </FormControl>
      </div>
      <div className={Style.toast_container}>
        {toast && (
          <Alert className={Style.toast} severity="success" color="info">
            Stock added to the store.
          </Alert>
        )}
      </div>
    </div>
  );
}

export default AddScreen;
