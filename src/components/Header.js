import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ auth, user }) {
  const classes = useStyles();
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ position: "fixed" }}>
        <Toolbar>
          <QuestionAnswerIcon />
          <Typography variant="h6" className={classes.title}>
            Chat Room
          </Typography>
          {user ? (
            <Button color="inherit" onClick={signOut}>
              Sign Out
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
