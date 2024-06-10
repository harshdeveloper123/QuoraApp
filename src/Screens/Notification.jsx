//this is notification screen. so the components related to notification screen imported.
import React from 'react'
import Header from '../Components/Header'
import NotificationFilter from '../Components/NotificationFilter'
import NotificationPanel from '../Components/NotificationPanel'
const Notification = () => {
  return (
    <>
    
    <Header/>
    <div className="NotificationBody">

   
    <NotificationFilter/>
    
    <NotificationPanel/>
    </div>
    </>
  )
}

export default Notification