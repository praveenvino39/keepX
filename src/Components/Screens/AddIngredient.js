import { Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AppToolBar from "../Reusable/AppToolBar";
import Style from "./AddIngredient.module.css";
import { addItem } from "../../Action/storeAction";

function AddIngredient() {
  const [ingredient, setIngredient] = useState({ name: "", quantityType: "" });
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={Style.container}>
      <AppToolBar title="Add Ingredients" />
      <div className={Style.form_style}>
        <div className={Style.quantity}>
          <TextField
            inputProps={{
              autocomplete: "",
              form: {
                autocomplete: "off",
              },
            }}
            onChange={(event) =>
              setIngredient({ ...ingredient, name: event.target.value })
            }
            label="Name"
          />
        </div>
        <div className={Style.quantity}>
          <TextField
            autocomplete={false}
            style={{ marginTop: "20px" }}
            onChange={(event) =>
              setIngredient({ ...ingredient, quantityType: event.target.value })
            }
            label="Quantity Type"
          />
        </div>
        <Button
          style={{ marginTop: "20px" }}
          className={Style.btn}
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(addItem(ingredient));
            setToast(true);
            setTimeout(() => {
              setToast(false);
            }, 2000);
          }}
        >
          Add Ingredient
        </Button>
        {toast && (
          <Alert className={Style.toast} severity="success" color="info">
            Ingredient added to the store.
          </Alert>
        )}
      </div>
    </div>
  );
}

export default AddIngredient;
