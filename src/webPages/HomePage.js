import React from "react";
import { Card, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  row: {
    backgroundColor: "blue",
  },
}));

function HomePage() {
  const Classes = useStyles();
  return (
    <div>
      <h1>Im in Home Page</h1>
      <Card className={Classes.row}>
        <Typography>Visit Tell</Typography>
        <Button>Click Me</Button>
      </Card>
    </div>
  );
}

export default HomePage;
