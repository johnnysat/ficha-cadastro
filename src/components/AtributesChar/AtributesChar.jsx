import React, { useState } from "react"
import './AtributesChar.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function AtributesChar({ atb, realAtb, attributesTotal, setAttributesTotal, maxAttributes }) {
  const [points, setPoints] = useState(0);

  const handleIncrement = () => {
    if (points <= 21 && attributesTotal < maxAttributes) {
      setPoints(points + 1);
      setAttributesTotal(attributesTotal + 1);
    }
  };

  const handleDecrement = () => {
    if (points >= 1) {
      setPoints(points - 1);
      setAttributesTotal(attributesTotal - 1);
    }
  };

  let pointCost;
  switch (points) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      pointCost = points;
      break;
    case 6:
      pointCost = 5;
      break;
    case 7:
      pointCost = 6;
      break;
    case 8:
      pointCost = 6;
      break;
    case 9:
      pointCost = 7;
      break;
    case 10:
      pointCost = 7;
      break;
    case 11:
      pointCost = 8;
      break;
    case 12:
      pointCost = 8;
      break;
    case 13:
      pointCost = 8;
      break;
    case 14:
      pointCost = 9;
      break;
    case 15:
      pointCost = 9;
      break;
    case 16:
      pointCost = 9;
      break;
    case 17:
      pointCost = 10;
      break;
    case 18:
      pointCost = 10;
      break;
    case 19:
      pointCost = 10;
      break;
    case 20:
      pointCost = 10;
      break;
    case 21:
      pointCost = 10;
      break;
    case 22:
      pointCost = 11;
      break;
    default:
      pointCost = 0;
  }


  return (
    <>
      <List className="list__atributes">
        <ListItem>
          <ListItem>
            <ListItemText primary={atb} />
            <ListItemText sx={{ display: 'flex' }} className="atb__char"
              primary={points} secondary={`(${pointCost})`} />
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
