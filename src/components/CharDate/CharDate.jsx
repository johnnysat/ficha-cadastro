import React, { useState } from 'react';
import AtributesChar from '../Atributes/Atributes'
import Specs from '../Specs/Specs'
import Percs from '../Percs/Percs'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import './CharDate.css'



export default function CharDate() {
  const [rank, setRank] = useState('Gennin');
  const [attributesTotal, setAttributesTotal] = useState(16);

  function handleRankChange(event) {
    setRank(event.target.value);

    if (event.target.value === 'Gennin') {
      setAttributesTotal(16);
    } else if (event.target.value === 'Chunnin') {
      setAttributesTotal(26);
    } else if (event.target.value === 'Jounnin') {
      setAttributesTotal(36);
    } else if (event.target.value === 'Tokubetsu') {
      setAttributesTotal(46);
    } else if (event.target.value === 'Sannin') {
      setAttributesTotal(56);
    }
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box className="container__box" sx={{ bgcolor: '#', height: '61vh' }}>
          <div className="container__header">
            <TextField id="outlined-basic" size="small" label="Nome do Personagem" variant="outlined"
            className="name__char"/>
<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Rank</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={rank}
        onChange={handleRankChange}
      >
        <FormControlLabel value="Gennin" control={<Radio />} label="Gennin" />
        <FormControlLabel value="Chunnin" control={<Radio />} label="Chunnin" />
        <FormControlLabel value="Jounnin" control={<Radio />} label="Jounnin" />
        <FormControlLabel value="Tokubetsu" control={<Radio />} label="Tokubetsu" />
        <FormControlLabel value="Sannin" control={<Radio />} label="Sannin" />
      </RadioGroup>
      <p>Pontos: Pontos/{attributesTotal}</p>
    </FormControl>
          </div>
          <div className="container__body">
            <div className="atributes__char">
              <AtributesChar atb={'Força'}/>
              <AtributesChar atb={'Destreza'}/>
              <AtributesChar atb={'Chakra'}/>
              <AtributesChar atb={'Canalização'}/>
              <AtributesChar atb={'Controle'}/>
              <AtributesChar atb={'Percepção'}/>
            </div>
            <Specs /> 
            <Percs /> 
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}