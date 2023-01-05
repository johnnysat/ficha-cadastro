import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './CharDate.css'

export default function CharDate() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box className ="container__box" sx={{ bgcolor: '#', height: '61vh' }} />
      </Container>
    </React.Fragment>
  );
}