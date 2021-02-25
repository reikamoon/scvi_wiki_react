import React from 'react';
import CharaDetails from './CharaDetails'
import './CastList.css';
import data from './scvi.json';

function CastList() {

  const spaces = data.map(( { name, title, img, quote, weapontype, difficulty, key }, i) => {
    return (
      <CharaDetails
        id={i}
        key={key} // The title could be a key
        name={name}
        title={title}
        img={img}
        quote={quote}
        weapontype={weapontype}
        difficulty={difficulty}
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