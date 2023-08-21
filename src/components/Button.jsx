import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button
        className=""
    >
       {label}
       <img  src={iconURL}/>
    </button>
  ) 
}

export default Button