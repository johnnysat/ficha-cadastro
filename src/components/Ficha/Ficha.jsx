import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Ficha() {

  const clans = [
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
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Atualização de Ficha
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className="ficha__clans">
              <label>Clã: </label>
              <select name="clans" id="clans" >
                {clans.map(clans => (
                  <option key={clans} value={clans}>
                    {clans}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Especializações: </label>
              <select name="specs" id="specs" >
                {specs.map(specs => (
                  <option key={specs} value={specs}>
                    {specs}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Perícias: </label>
              <select name="pericias" id="pericias" >
                {pericias.map(pericias => (
                  <option key={pericias} value={pericias}>
                    {pericias}
                  </option>
                ))}
              </select>
            </div>
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
