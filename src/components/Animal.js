import React from 'react'
import { useState } from 'react';

function Animal({img, details}) {

    const [visibility, setVisibility] = useState(true);

  function changeVisibility(){
    setVisibility(!visibility);
  }

  return (
    <div className='showAnimal' onClick={changeVisibility}>

        {
    visibility? <img src={img} alt="animal" /> : <p>{details}</p>
        }

    </div>
  )
}

export default Animal

