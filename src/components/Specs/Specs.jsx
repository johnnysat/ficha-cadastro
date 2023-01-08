import * as React from 'react';
import './Specs.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Especializações
      </Typography>
      <Typography variant="body2">
        Spec 1 <br />
        Spec 2 <br />
        Spec 3 <br />
        Spec 4 <br />
        Spec 5 <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Specs() {
  return (
    <Box sx={{ width: 250, display: 'inline-block', position: 'absolute', top: 165, right: 350}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}