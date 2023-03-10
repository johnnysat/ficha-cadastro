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
  'Kuchiyose',
  'Kekkei Genkai',
  'Bijuu',
];

const selectLimit = 4;

export default function Specs({ maxSpecs = 2 }) {
  const [spec, setSpec] = React.useState('Nenhuma');
  const [addedSelects, setAddedSelects] = React.useState([]);

  const handleChangeSpec = (event) => {
    setSpec(event.target.value);
  };

  const handleAddSelect = () => {
    if (addedSelects.length < maxSpecs) {
      setAddedSelects([...addedSelects, {}]);
    }
  };

  const handleRemoveSelect = (index) => {
    if (addedSelects.length > 0) {
      const newAddedSelects = [...addedSelects];
      newAddedSelects.splice(index, 1);
      setAddedSelects(newAddedSelects);
    }
  };

  const card = (
    <React.Fragment>
      <CardContent sx={{ minHeight: 230, maxHeight: 'auto' }}>
        <Typography variant="h5" component="div">
          Especialização
        </Typography>
        <Box display="flex" alignItems="center">
          <InputLabel></InputLabel>
          <FormControl>
            <Select className='input__spec' size="small" value={spec} onChange={handleChangeSpec}>
              {specs.map(spec => (
                <MenuItem key={spec} value={spec}>
                  {spec}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button size="small"onClick={handleAddSelect} disabled={addedSelects.length >= selectLimit}>+</Button>
        </Box>
        {addedSelects.map((select, index) => (
          <Box display="flex" alignItems="center" key={index}>
            <FormControl>
              <Select className='input__spec' size="small">
                {specs.map(spec => (
                  <MenuItem key={spec} value={spec}>
                    {spec}
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
    <Box sx={{ width: 250, display: 'inline-block', position: 'absolute', top: 165, right: 350 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

