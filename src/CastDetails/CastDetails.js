import React from 'react'
import data from '../scvi.json'
import Table from 'react-bootstrap/Table';
import './CastDetails.css';


function CastDetails(props) {
  const { id } = props.match.params // Location index
  const { key, name, title, quote, portrait, gender, birthplace, birthday, status, height, weight, bloodtype, weapontype, weaponname, fightstyle, difficulty, engva, jpva, debut, video } = data[id]

  return (
    <div>

       <style>
        {`
            body {
                overflow-y: scroll;
                overflow-x: hidden;
            }
        `}
       </style>


      <div className="Portrait">
        <img src={`${process.env.PUBLIC_URL}images/${portrait}`} width="392" height="696" alt="Image" />
        </div>

        <div className="Name">
        <h1>{name}, {title}</h1>
        </div>


         <div className="Bio">
         <h3>"{quote}" - {name}</h3>
         <h2>{name} is a playable character in SOULCALIBUR VI. First appearing in {debut}, {key} is recommended for {difficulty} players. In the most recent installment of the series, {key} wields a {weapontype}, "{weaponname}".
         
         </h2>
        
        </div>

        <div className="charatable">
        <Table>

        <thead>
            <tr>
            <th>Status</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Blood Type</th>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>{status}</td>
            <td>{gender}</td>
            <td>{height}</td>
            <td>{weight}</td>
            <td>{bloodtype}</td>
            </tr>
        </tbody>

        <thead>
         <tr>
            <th>Weapon</th>
            <th>Weapon Name</th>
            <th>Fighting Style</th> 
            <th>English Voice</th>
            <th>Japanese Voice</th>           
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>{weapontype}</td>
            <td>{weaponname}</td>
            <td>{fightstyle}</td>
            <td>{engva}</td>
            <td>{jpva}</td>
            </tr> 
        </tbody>

        </Table>
        </div>


        <div className="video">
        <iframe width="1400" height="750" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      
      </div>
  )
}

export default CastDetails