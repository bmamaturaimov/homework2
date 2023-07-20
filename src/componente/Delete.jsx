import React from 'react'
import './Delete.css'

const Delete = (props)=>{
  return (
    <div className='caunt'>
        <h1>{props.name}</h1>
        <button onClick={()=>{props.onDelete (props.id)}}>Delete</button>
    </div>
  )
}

export default Delete