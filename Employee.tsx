import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Employee() {
    const { Id } = useParams(); 
  return (
    <div>
        <h1>{Employee.name}</h1>
        <Link to="/">Home</Link>
        </div>
  )
}

export default Employee