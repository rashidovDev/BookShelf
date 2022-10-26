import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Books : React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <p>12222222</p>
      </Grid>
      <Grid item xs={6}>
        <p>12222222</p>
      </Grid>
      <Grid item xs={6}>
        <p>12222222</p>
      </Grid>
      <Grid item xs={6}>
        <p>12222222</p>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Books