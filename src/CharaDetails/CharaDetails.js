import React from 'react'
import data from '../scvi.json'
import { Link } from 'react-router-dom'

function CharaDetails(props) {
  const { name, img, title, weapontype, difficulty, quote, id } = props
   return (
    <div className="CharaDetails">
    <Link to={`/details/${id}`}>
    <img src={`${process.env.PUBLIC_URL}/Images/${img}`} width="350" height="400" alt="Cast" />
    </Link> 
      <h1>{name}, {title}</h1>
      <div>"{quote}"</div>
      <h3>Weapon: {weapontype}</h3>
      <h3>Difficulty: {difficulty}</h3>
    </div>
  )
}

export default CharaDetails