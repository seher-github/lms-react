import React from 'react'
import './dashboard.css'
import { BsArchiveFill, BsCart3, BsFillGearFill, BsFillGrid3X2GapFill, BsGrid1X2Fill, BsListCheck, BsPeopleFill } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <>
      <aside id='sidebar'>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/> Buy Courses
            </div>
            <span className='icon close-icon'></span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                  <a href="">
                    <BsGrid1X2Fill  className='icon'/> Dashboard
                  </a>
            </li>
            <li className='sidebar-list-item'>
                  <a href="">
                    <BsArchiveFill  className='icon'/> Courses
                  </a>
            </li>
            <li className='sidebar-list-item'>
                  <a href="">
                    <BsFillGrid3X2GapFill  className='icon'/> Categories
                  </a>
            </li>
            <li className='sidebar-list-item'>
                  <a href="">
                    <BsPeopleFill  className='icon'/> Students
                  </a>
            </li>
            <li className='sidebar-list-item'>
                  <a href="">
                    <BsListCheck  className='icon'/> Instructors
                  </a>
            </li>
            <li className='sidebar-list-item'>
                  <a href="">
                    <BsFillGearFill  className='icon'/> Settings
                  </a>
            </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
