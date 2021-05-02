import React from "react";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    paddingTop: 30,
  },
  title: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  bar: {
    position: "static",
    background: "none",
  },
  btn: {
    marginRight: 10,
    paddingLeft: 20,
    color: "inherit",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "17px",
    color: "#a6a6a6",
    display: "inline-block",
    overflow: "hidden",
    "&:hover, focus": {
      transform: "translate3d(0, -105%, 0)",
    },
  },
  btnDiv: {
    position: "absolute",
    right: 35,
  },
});

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <Button className={classes.btn}>
            Mohammad Erfan{" "}
            <span style={{ color: "white", marginLeft: "0.30em" }}>Karami</span>
          </Button>
          <div className={classes.btnDiv}>
            <Button className={classes.btn}>Home</Button>
            <Button className={classes.btn}>Resume</Button>
            <Button className={classes.btn}>Works</Button>
            <Button className={classes.btn}>Contacts</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
