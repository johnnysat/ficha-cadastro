import React, { useState } from "react"
import './Atributes.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Atributes from '../Atributes/Atributes'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function AtributesChar({ atb }) {
  const [points, setPoints] = useState(1);

  const handleIncrement = () => {
    setPoints(points + 1);
  };

  const handleDecrement = () => {
    setPoints(points - 1);
  };

  return (
    <>
      <List className="list__atributes">
        <ListItem>
          <ListItem>
            <ListItemText primary={`${atb} - ${points}`} />
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
              size="small"
            >
              <Button onClick={handleIncrement}>+</Button>
              <Button onClick={handleDecrement}>-</Button>
            </ButtonGroup>
          </ListItem>
        </ListItem>
      </List>

    </>
  )
}
