import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Style from "./MainScreen.module.css";

function MainScreen() {
  return (
    <div className={Style.container}>
      <Link className={Style.btn} to="/addingredient">
        <Button className={Style.btn} variant="contained" color="primary">
          Add Ingredient
        </Button>
      </Link>
      <Link className={Style.btn} to="/addstock">
        <Button className={Style.btn} variant="contained" color="primary">
          Add Stock
        </Button>
      </Link>
      <Link className={Style.btn} to="/takestock">
        <Button className={Style.btn} variant="contained" color="primary">
          Take Stock
        </Button>
      </Link>

      <Link className={Style.btn} to="/viewavailable">
        <Button className={Style.btn} variant="contained" color="primary">
          Available Stock
        </Button>
      </Link>
      <Link className={Style.btn} to="/viewavailable">
        <Button className={Style.btn} variant="contained" color="primary">
          Generate Report
        </Button>
      </Link>
    </div>
  );
}

export default MainScreen;
