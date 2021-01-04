import React from 'react'
import './Card.css'

export const Card = (props) => {
  return (
    <div className="card__container">
      <img src={`https://robohash.org/${props.cat.id}?set=set4`} alt="cat"/>
      <h2> {props.cat.name} </h2>
      <p> {props.cat.email} </p>
    </div>
  )
}
