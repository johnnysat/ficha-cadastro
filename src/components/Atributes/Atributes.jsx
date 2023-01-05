import React from "react"
import './Atributes.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Atributes from '../Atributes/Atributes'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


export default function AtributesChar({ atb }) {
  return (
    <>
    <List className="list__atributes">
      <ListItem>
        <ListItemButton>
          <ListItemText primary={atb} />
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button>+</Button>
            <Button>-</Button>
          </ButtonGroup>
        </ListItemButton>
      </ListItem>
    </List>
    
    </>
  )
}