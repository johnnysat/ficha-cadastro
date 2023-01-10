import * as React from 'react';
import './Specs.css';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
export default function Specs() {
  const [spec, setSpec] = React.useState('Nenhuma');
  const handleChangeSpec = (event) => {
    setSpec(event.target.value);
  };

  const card = (
    <React.Fragment>
      <CardContent>
      <Typography variant="h5" component="div">
          Especialização
        </Typography>
      <Box display="flex" alignItems="center">
              <InputLabel className='input__spec'></InputLabel>
              <FormControl>
                <Select size="small" value={spec} onChange={handleChangeSpec}>
                  {specs.map(spec => (
                    <MenuItem key={spec} value={spec}>
                      {spec}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button size="small">Add</Button>
            </Box>
      </CardContent>
    </React.Fragment>
  );

  return (
<Box sx={{ width: 250, display: 'inline-block', position: 'absolute', top: 165, right: 350 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}