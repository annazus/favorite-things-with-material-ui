import React, { useState } from "react";
import {
  withStyles,
  Typography,
  TextField,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { Delete as DeleteIcon } from "@material-ui/icons";

const App = ({ classes }) => {
  const mobileSize = useMediaQuery("max-width:650px");
  const [title, setTitle] = useState("");
  const [favorites, setFavorites] = useState([]);
  const handleFormSubmit = event => {
    event.preventDefault();
    if (title.trim()) {
      setFavorites([...favorites, { id: Date.now(), thing: title.trim() }]);
      setTitle("");
    }
  };
  const handleChange = event => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDeleteExercise = id => {
    const newExercises = favorites.filter(exe => exe.id !== id);
    setFavorites(newExercises);
  };

  return (
    <>
      <Paper className={mobileSize ? classes.root : classes.rootMobile}>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          A few of my Favorite Things
        </Typography>
        <form onSubmit={handleFormSubmit} className={classes.form}>
          <TextField
            name="title"
            value={title}
            onChange={handleChange}
            margin="none"
            placeholder="Favorite Thing"
          />
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </form>
        <List>
          {favorites.map((thing, i) => (
            <ListItem key={thing.id}>
              <ListItemText primary={thing.thing} />
              <ListItemSecondaryAction>
                <IconButton
                  color="secondary"
                  onClick={() => handleDeleteExercise(thing.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
};

const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: unit * 3,
    padding: unit * 3,
    maxWidth: 650
  },
  rootMobile: {
    margin: unit * 2,
    padding: unit * 2,
    maxWidth: 400
  },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  }
});

export default withStyles(styles)(App);
