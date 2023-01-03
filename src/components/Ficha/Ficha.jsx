import React from 'react';
import './Ficha.css';

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

  return (
    <div>
      <h1>Atualização de Ficha</h1>

      <div className="ficha__clans">
        <label>Clã:</label>
        <select name="clans" id="clans" >
          {clans.map(clans => (
            <option key={clans} value={clans}>
              {clans}
            </option>
          ))}
        </select>
      </div>

      <label>Especializações:</label>
      <select name="specs" id="specs" >
        {specs.map(specs => (
          <option key={specs} value={specs}>
            {specs}
          </option>
        ))}
      </select>
    </div>
  )
}
