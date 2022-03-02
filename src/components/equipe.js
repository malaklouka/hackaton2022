import React from 'react';

import CardEq from './CardEq';
import { EquipeData } from './data';
import './equipe.css'


const Equipe = () => {
    const data= EquipeData;

  return (
  <div>  <h1 className='notreEq' > Notre Equipe</h1>

    <div className='equipe' >
          {data.map(e=><CardEq equipe={e} key={e.id}/>)}
    </div>
    </div>
  )
}

export default Equipe
