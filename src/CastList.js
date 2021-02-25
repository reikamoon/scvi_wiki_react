import React from 'react';
import CharaDetails from './CharaDetails'
import './CastList.css';
import data from './scvi.json';

function CastList() {

  const spaces = data.map((obj) => {
    return (
      <CharaDetails
        name={obj.name}
        title={obj.title}
        img={obj.img}
        weapontype={obj.weapontype}
        difficulty={obj.difficulty}
      />
    )
  })

  return (
    <div className="CastList">
      { spaces }
    </div>
  )
}

export default CastList