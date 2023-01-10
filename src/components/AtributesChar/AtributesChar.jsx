import React, { useState } from "react"
import './AtributesChar.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function AtributesChar({ atb }) {
  const [points, setPoints] = useState(1);

  const handleIncrement = () => {
    if (points <= 10){
    setPoints(points + 1);
    }
  };

  const handleDecrement = () => {
    if (points >= 2)
    setPoints(points - 1);
  };

  return (
    <>
      <List className="list__atributes">
        <ListItem>
          <ListItem>
            <ListItemText primary={atb} />
              <ListItemText className="atb__char" primary={points} />
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                size="small"
              >
                <Button onClick={handleDecrement}>-</Button>
                <Button onClick={handleIncrement}>+</Button>
              </ButtonGroup>
          </ListItem>
        </ListItem>
      </List>

    </>
  )
}
