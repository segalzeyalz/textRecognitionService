import React, { useState } from "react";
import Typography from "@material-ui/core//Typography";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
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
  setHeight: {
    margin: theme.spacing(2),
    height: "300px",
    width: "400px",
    wordWrap: "break-word"
  }
})).bind(this, theme);

const App = ({ classes }) => {
  const [url, changeUrl] = useState("");
  const [imageText, updateImageText] = useState("");
  const getText = url => {
    axios.post("/api/image", { url: url }).then(res => {
      console.log(res);
      updateImageText(res.data);
    });
  };
  //TODO validation on types
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
      <Button
        onClick={() => getText(url)}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Get Text
      </Button>
      <Paper className={classes.setHeight}>
        <Typography component="div">{imageText}</Typography>
      </Paper>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
