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

      <div>
      <label>Especializações:</label>
      <select name="specs" id="specs" >
        {specs.map(specs => (
          <option key={specs} value={specs}>
            {specs}
          </option>
        ))}
      </select>
      </div>

      <div>
      <label>Perícias:</label>
      <select name="pericias" id="pericias" >
        {pericias.map(pericias => (
          <option key={pericias} value={pericias}>
            {pericias}
          </option>
        ))}
      </select>
      </div>


    </div>
  )
}
