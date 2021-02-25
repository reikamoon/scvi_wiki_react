import React from 'react'
import { useHistory } from 'react-router-dom'
import './RandomSpace.css';
import data from '../scvi.json';

function RandomSpace() {
    const history = useHistory()
  return (
        <button onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            history.push(`/details/${id}`)
        }}>Random Character</button>
  )
}

export default RandomSpace