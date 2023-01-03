import React from 'react';
import './Ficha.css';

export default function Ficha(){

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
  ]

  return(
    <div>
      <h1>Atualização de Ficha</h1>
      <label>Clã:</label>
      <select name="clans" id="clans" >
        {clans.map(clans => (
          <option key={clans} value={clans}>
            {clans}
          </option>
        ))}
      </select>
    </div>
  )
}
