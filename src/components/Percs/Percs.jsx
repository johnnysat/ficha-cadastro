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

export default function Percs() {
  const [pericia, setPericia] = React.useState('Nenhuma');

  const handleChangePericia = (event) => {
    setPericia(event.target.value);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Perícias
        </Typography>
        <Typography variant="body2">
          <Box display="flex" alignItems="center">
            <InputLabel className='input__pericia'></InputLabel>
            <FormControl>
              <Select size="small" value={pericia} onChange={handleChangePericia}>
                {pericias.map(pericia => (
                  <MenuItem key={pericia} value={pericia}>
                    {pericia}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button size="small">Add</Button>
          </Box>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 250, display: 'inline-block', position: 'absolute', top: 165, right: 80 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}