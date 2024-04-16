import React from 'react'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom';
import './Home.css'
import Masthead from '../molecules/Masthead';

export default function Home() {
  return (
    <div>
      <Masthead/>
      Home
      <Button fn={()=>{alert("yes");}} id="alert"/>
      <Link to="table">Table</Link>
    </div>
  )
}
