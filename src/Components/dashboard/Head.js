import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'
import './dashboard.css'

const Head = () => {
  return (
    <>
    <div className="header">
        <div className="menu-icon">
            <BsJustify className='icon'/>
        </div>
        <div className="header-left">
            <BsSearch className='icon'/>
        </div>
        <div className="header-rig">
            <BsFillBellFill />
            <BsFillEnvelopeFill />
            <BsPersonCircle  className='icon'/>
        </div>
    </div>

      
    </>
  )
}

export default Head
