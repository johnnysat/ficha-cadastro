import React, { useState } from 'react';
import "./Percs.css"
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const pericias = [
  'Nenhuma',
  'Precisão',
  'Atleta',
  'Tolerância à Dor',
  'Memória',
  'Observador',
  'Herbologia',
  'Zoologia',
  'Anatomia',
  'Quimica',
  'Rastrear',
  'Assassino',
  'Tortura',
  'Culinária',
  'Resiliente',
  'Especialista em Veneno',
  'Resistência a Veneno',
  'Geneticista',
  'Furtivo',
  'Fôlego',
  'Ambidestria',
  'Carisma',
  'Combatente',
  'Tecnologia',
];

const selectLimit = 4;

export default function Percs() {
  const [pericia, setPericia] = React.useState('Nenhuma');
  const [addedSelects, setAddedSelects] = React.useState([]);

  const handleChangePericia = (event) => {
    setPericia(event.target.value);
  };

  const handleAddSelect = () => {
    if (addedSelects.length < selectLimit) {
      setAddedSelects([...addedSelects, {}]);
    }
  };

  const handleRemoveSelect = (index) => {
    const newAddedSelects = [...addedSelects];
    newAddedSelects.splice(index, 1);
    setAddedSelects(newAddedSelects);
  };

  const card = (
    <React.Fragment>
      <CardContent sx={{ minHeight: 230, maxHeight: 'auto' }}>
        <Typography variant="h5" component="div">
          Perícias
        </Typography>
          <Box display="flex" alignItems="center">
            <InputLabel className='input__pericia'></InputLabel>
            <FormControl>
              <Select size="small" className='input__perc' value={pericia} onChange={handleChangePericia}>
                {pericias.map(pericia => (
                  <MenuItem key={pericia} value={pericia}>
                    {pericia}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button size="small" onClick={handleAddSelect} disabled={addedSelects.length >= selectLimit}>+</Button>
        </Box>
        {addedSelects.map((select, index) => (
          <Box display="flex" alignItems="center" key={index}>
            <FormControl>
              <Select className='input__spec' size="small">
                {pericias.map(pericia => (
                  <MenuItem key={pericia} value={pericia}>
                    {pericia}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button size="small" onClick={() => handleRemoveSelect(index)}>-</Button>
          </Box>
        ))}
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 250, display: 'inline-block', position: 'absolute', top: 165, right: 80 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}