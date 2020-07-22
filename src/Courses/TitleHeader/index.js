import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #000066 30%, #000066 90%)",
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 100,
    width: "100%",
  },
  p: {
    padding: "15px",
    color: "#fff",
    margin: "10px",
  },
});

export default function (props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="container">
        <h1 className={classes.p}> {props.title} </h1>{" "}
      </div>{" "}
    </div>
  );
}
