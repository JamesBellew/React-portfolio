import { Grid, ListItem, containerClasses } from '@mui/material';

import * as MUI from '@mui/material';

import * as React from 'react';

const Linked = props=>{
return(
  <>
  <h1>Testing hai </h1>
    <Grid container spacing={2}>
    <Grid item xs={8}>
      <p>xs=8</p>
    </Grid>
    <Grid item xs={4}>
      <p>xs=4</p>
    </Grid>
    <Grid item xs={4}>
      <p>xs=4</p>
    </Grid>
    <Grid item xs={8}>
      <p>xs=8</p>
    </Grid>
  </Grid>
  </>
);
}

export default Linked;