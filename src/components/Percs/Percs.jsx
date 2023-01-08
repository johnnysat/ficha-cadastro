import React from 'react';
import "./Percs.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Perícias
      </Typography>
      <Typography variant="body2">
        Perícia 1 <br />
        Perícia 1 <br />
        Perícia 1 <br />
        Perícia 1 <br />
        Perícia 1 <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Percs() {
  return (
        <Box sx={{ width: 250, display: 'inline-block', position: 'absolute', top: 165, right: 80}}>
          <Card variant="outlined">{card}</Card>
        </Box>
    )
  }