import React from 'react'
import { Link } from 'react-router-dom'
import Masthead from '../molecules/Masthead'

export default function Table() {
  return (
    <div>
      <Masthead/>
      <Link to="/">Home</Link>
    </div>
  )
}
