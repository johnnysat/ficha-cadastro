import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './CharDate.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

export default function CharDate() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box className="container__box" sx={{ bgcolor: '#', height: '61vh' }}>
          <div className="container__header">
        <TextField id="outlined-basic" label="Nome do Personagem" variant="outlined" />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Rank</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Gennin" control={<Radio />} label="Gennin" />
              <FormControlLabel value="Chunnin" control={<Radio />} label="Chunnin" />
              <FormControlLabel value="Jounnin" control={<Radio />} label="Jounnin" />
              <FormControlLabel value="Tokubetsu" control={<Radio />} label="Tokubetsu" />
              <FormControlLabel value="Sannin" control={<Radio />} label="Sannin" />
            </RadioGroup>
          </FormControl>
          </div>
          
          
        
        </Box>
      </Container>
    </React.Fragment>
  );
}