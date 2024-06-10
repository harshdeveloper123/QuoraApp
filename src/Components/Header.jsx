//creation of header or nav bar of quora app.
import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LanguageIcon from '@mui/icons-material/Language';
import './Header.css'
//open the dialog box when the user clicking on the Ask Question button.
const Header = ({handleOpen}) => {
  return (
    <div className='Header'>
        <div className="header_logo">Quora
        </div>
        {/* nav bar icons */}
        <div className="header_icons">   
               <Link to="/"> <button title='Home'><HomeIcon/></button></Link>
                <button title='Answer'><BorderColorIcon/></button>
                <button title='Create post'><CalendarTodayIcon/></button>
                <Link to="/notifications"><button title='Notification'><NotificationsIcon /></button></Link>
                <button title='Create Spaces'><PeopleAltIcon/></button>
             </div>
             {/* search bar in quoraApp */}
        <div className="header_search">
            <input type="text" placeholder='Search Quora' />
            </div>
            <div className="Quoraplus">
              <button> Try Quora+</button>
            </div>
            <div className="glob">
              <button><LanguageIcon/></button>
            </div>
            <div className="addQuestion">
              <button onClick={handleOpen}>Add Question</button></div>
             
        
    </div>
  )
}

export default Header;