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
import Typography from '@mui/material/Typography';
import './CharDate.css'



export default function CharDate(props) {
  const [rank, setRank] = useState('Gennin');
  const [attributesTotal, setAttributesTotal] = useState(0);
  const [maxAttributes, setMaxAttributes] = useState(16);
  const [maxSpecs, setMaxSpecs] = useState(1);
  const [maxPercs, setMaxPercs] = useState(0);

  function handleRankChange(event) {
    setRank(event.target.value);

    if (event.target.value === 'Gennin') {
      setMaxAttributes(16);
      setMaxSpecs(1);
      setMaxPercs(0);
    } else if (event.target.value === 'Chunnin') {
      setMaxAttributes(26);
      setMaxSpecs(1);
      setMaxPercs(1);
    } else if (event.target.value === 'Jounnin') {
      setMaxAttributes(36);
      setMaxSpecs(2);
      setMaxPercs(2);
    } else if (event.target.value === 'Tokubetsu') {
      setMaxAttributes(46);
      setMaxSpecs(3);
      setMaxPercs(3);
    } else if (event.target.value === 'Sannin') {
      setMaxAttributes(56);
      setMaxSpecs(4);
      setMaxPercs(4);
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box className="container__box" sx={{ height: '75vh' }}>
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
              <Typography>{attributesTotal} / {maxAttributes}</Typography>
            </FormControl>
          </div>
          <div className="container__body">
            <div className="atributes__char">
              <AtributesChar atb="Força" attributesTotal={attributesTotal} setAttributesTotal={setAttributesTotal} maxAttributes={maxAttributes}/>
              <AtributesChar atb="Destreza" attributesTotal={attributesTotal} setAttributesTotal={setAttributesTotal} maxAttributes={maxAttributes}/>
              <AtributesChar atb="Chakra" attributesTotal={attributesTotal} setAttributesTotal={setAttributesTotal} maxAttributes={maxAttributes}/>
              <AtributesChar atb="Canalização" attributesTotal={attributesTotal} setAttributesTotal={setAttributesTotal} maxAttributes={maxAttributes}/>
              <AtributesChar atb="Controle" attributesTotal={attributesTotal} setAttributesTotal={setAttributesTotal} maxAttributes={maxAttributes}/>
              <AtributesChar atb="Percepção" attributesTotal={attributesTotal} setAttributesTotal={setAttributesTotal} maxAttributes={maxAttributes}/>
            </div>
            <Specs maxSpecs={maxSpecs} />
            <Percs maxPercs={maxPercs} />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}