import React, { useState } from "react";
import Typography from "@material-ui/core//Typography";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";

const theme = createMuiTheme();

const styles = (theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "stretch",
    alignItems: "center"
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.dark,
    position: "sticky",
    top: 0
  }
})).bind(this, theme);

const App = ({ classes }) => {
  const [url, changeUrl] = useState("");
  return (
    <div className="App" className={classes.wrapper}>
      <Typography variant="h2" gutterBottom>
        Text Recognizer
      </Typography>
      <TextField
        label="URL"
        placeholder="place url of image with text"
        fullWidth
        value={url}
        onChange={e => changeUrl(e.target.value)}
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
