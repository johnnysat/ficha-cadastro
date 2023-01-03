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
import pergaminho from '../../images/pergaminho_naruto.png';


export default function Ficha() {

  const [clan, setClan] = React.useState('');
  const [spec, setSpec] = React.useState('');

  const handleChange = (event) => {
    setClan(event.target.value);
    setSpec(event.target.value);
    setSpec(event.target.value);
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

  const specs = [
    'Nenhuma',
    'Genjutsu',
    'Ninjutsu',
    'Taijutsu',
    'Doton',
    'Fuuton',
    'Katon',
    'Raiton',
    'Suiton',
    'Fuuinjutsu',
  ];

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

  return (
    <div>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={pergaminho}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Atualização de Ficha
          </Typography>
          <Typography variant="body2" color="text.secondary" className="ficha__db">
            <Box display="flex" alignItems="center">
              <InputLabel>Clã: </InputLabel>
              <FormControl>
                <Select value={clan} onChange={handleChange}>
                  {clans.map(clan => (
                    <MenuItem key={clan} value={clan}>
                      {clan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button size="small">Add</Button>
            </Box>

            <Box display="flex" alignItems="center">
              <InputLabel>Especialização:</InputLabel>
              <FormControl>
                <Select value={clan} onChange={handleChange}>
                  {clans.map(clan => (
                    <MenuItem key={clan} value={clan}>
                      {clan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button size="small">Add</Button>
            </Box>

            <Box display="flex" alignItems="center">
              <InputLabel>Clã: </InputLabel>
              <FormControl>
                <Select value={clan} onChange={handleChange}>
                  {clans.map(clan => (
                    <MenuItem key={clan} value={clan}>
                      {clan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button size="small">Add</Button>
            </Box>

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Atualizar</Button>
          <Button size="small">Limpar</Button>
        </CardActions>
      </Card>

    </div>
  )
}
