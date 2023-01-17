import React from 'react';
import './Ficha.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import pergaminho from '../../images/pergaminho_naruto.png';

export default function Ficha() {
  const [clan, setClan] = React.useState('');

  const handleChangeClan = (event) => {
    setClan(event.target.value);
  };

  const clans = [
    'Nenhum',
    'Aburame',
    'Akimichi',
    'Hozuki',
    'Hyuuga',
    'Inuzuka',
    'Kaguya',
    'Koori',
    'Kugutsu',
    'Nara',
    'Senju',
    'Uchiha',
    'Yamanaka',
  ]

  return (
    <div>

      <Card sx={{ height: '75vh', minHeight: 380 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={pergaminho}
          title="Naruto com Pergaminho"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Atualização de Ficha
          </Typography>
          <Typography variant="body2" color="text.secondary" className="ficha__db">
            <Box display="inline-block" alignItems="center">
              <TextField id="outlined-basic" size="small" label="Nome do Personagem" variant="outlined"
                className="name__char" />
                <Box display="flex">
              <InputLabel  className='input__clan'>Clã: </InputLabel>
              <FormControl>
                <Select sx={{width: 110}} size="small" value={clan} onChange={handleChangeClan}>
                  {clans.map(clan => (
                    <MenuItem key={clan} value={clan}>
                      {clan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button size="small">Add</Button>
              </Box>
            </Box>
          </Typography>
        </CardContent>

      </Card>

    </div>
  )
}
