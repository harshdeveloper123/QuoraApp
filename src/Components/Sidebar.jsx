//this is sidebar.jsx file in which the code for sidebar list is written.
import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
      <div className="Sidebar">
        <ul className='SidebarList'>
          {/* creation of links in list in the sidebar of the application */}
            <li><a href="#CreateSpaces">+Create Space</a></li>
            <li><a href="#Meals">Meals</a></li>
            <li><a href="#Restraunts">Restraunts</a></li>
            <li><a href="#Sports">Sports</a></li>
            <li><a href="#Economy">Economy</a></li>
            <li><a href="#FilmIndustry">Film Industry</a></li>
            <li><a href="#Startups">Startups</a></li>
        </ul>
      </div>
  )
}

export default Sidebar