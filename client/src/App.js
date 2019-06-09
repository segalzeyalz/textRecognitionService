import React, { useState, useEffect } from "react";
import Typohraphy from "@material-ui/core//Typography";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";

const theme = createMuiTheme();

const styles = theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.dark,
    position: "sticky",
    top: 0
  }
});

const App = ({ classes }) => {
  return (
    <Paper className="App" className={classes.wrapper}>
      <Typohraphy variant="h1">Input</Typohraphy>
    </Paper>
  );
};

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles(theme))(App);
