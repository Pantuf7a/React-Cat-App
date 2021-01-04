import React from 'react';

import './CardList.css';

import { Card } from '../card/Card';


export const CardList = props => (
  <div className="card__list">
    {props.cats.map(cat => ( 
      <Card key={cat.id} cat={cat} />
      ))
    }
  </div>
)



