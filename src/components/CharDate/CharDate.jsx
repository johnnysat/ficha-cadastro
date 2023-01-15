import React, { useState } from 'react';
import AtributesChar from '../AtributesChar/AtributesChar'
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
import './CharDate.css'



export default function CharDate(props) {
  const [rank, setRank] = useState('Gennin');
  const [attributesTotal, setAttributesTotal] = useState(16);
  const [specTotal, setSpecTotal] = useState(3);

  function handleRankChange(event) {
    setRank(event.target.value);

    if (event.target.value === 'Gennin') {
      setAttributesTotal(16);
      setSpecTotal(1);
    } else if (event.target.value === 'Chunnin') {
      setAttributesTotal(26);
      setSpecTotal(1);
    } else if (event.target.value === 'Jounnin') {
      setAttributesTotal(36);
      setSpecTotal(2);
    } else if (event.target.value === 'Tokubetsu') {
      setAttributesTotal(46);
      setSpecTotal(3);
    } else if (event.target.value === 'Sannin') {
      setAttributesTotal(56);
      setSpecTotal(4);
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box className="container__box" sx={{ height: '70vh' }}>
          <div className="container__header">

            <FormControl className="rank__char">
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
            <h1>Nome do Personagem</h1>
            <div className="atributes__char">
              <AtributesChar atb={'Força'} />
              <AtributesChar atb={'Destreza'} />
              <AtributesChar atb={'Chakra'} />
              <AtributesChar atb={'Canalização'} />
              <AtributesChar atb={'Controle'} />
              <AtributesChar atb={'Percepção'} />
            </div>
            <Specs selectLimit={specTotal} />
            <Percs />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}