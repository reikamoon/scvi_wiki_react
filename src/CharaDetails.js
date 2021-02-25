import React from 'react'
import logo from './logo.svg'
import data from './scvi.json'

function CharaDetails(props) {
  const { name, img, title, weapontype, difficulty, } = props
   return (
    <div className="CharaDetails">
      <img 
        src={`${process.env.PUBLIC_URL}images/${img}`} 
        width="320" 
        height="390" 
        alt="Hello" 
      />
      <h1>{name}, {title}</h1>
      <h3>Weapon: {weapontype}</h3>
      <h3>Difficulty: {difficulty}</h3>
    </div>
  )
}

export default CharaDetails