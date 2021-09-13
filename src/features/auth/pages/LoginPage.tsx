import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(3),
  },
}));

const LoginPage = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Paper elevation={3} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button variant="contained" color="primary" fullWidth>
            Fake login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
