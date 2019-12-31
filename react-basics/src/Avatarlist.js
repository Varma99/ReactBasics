import React from 'react';
import './Avatar.css'

const Avatarlist = (props) => {
    return (
        <div className = "avatarstyle ma4 dib pa3 grow shadow-4">
          <img src = {`https://joeschmoe.io/api/v1/${props.name}`} alt = "Image"/>
          <h1 className = "tc">{props.name}</h1>
          <p className = "tc">{props.work}</p>
        </div>
    )
}

export default Avatarlist;