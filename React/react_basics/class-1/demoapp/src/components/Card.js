import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>

    <div>Card</div>
    {props.children}
    </div>
  )
}

export default Card
