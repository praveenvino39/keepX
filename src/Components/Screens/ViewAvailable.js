import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Style from "./ViewAvailable.module.css";

function ViewAvailable() {
  const items = useSelector((state) => state.stockReducer);
  return (
    <div className={Style.container}>
      <Typography variant="h5" gutterBottom>
        View Available
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span style={{ fontWeight: "700" }}>Indgredient</span>
              </TableCell>
              <TableCell align="right">
                <span style={{ fontWeight: "700" }}>Quantity</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewAvailable;
