import useStyles from './style';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import memories from "./images/memories.png"
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts /* setCurrentId={setCurrentId} */ />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form /* currentId={currentId} setCurrentId={setCurrentId} */ />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
