//this code is totally dedicated to notification filters when the user clicks on the notification icon then the user redirects to notification page.
import React from 'react'
import './Notifi_Filter.css'
const NotificationFilter = () => {
  return (
    <>
      <div className="NotificationFilter">
    
        <ul className='FilterList'>
        <h3>Filter</h3>
        {/* list of the options that are present in the quora app on notification page. */}
            <li>All Notification</li>
            <li>Stories</li>
            <li>Question</li>
            <li>Spaces</li>
            <li>People Updates</li>
            <li>Upvotes</li>
            <li>Your content</li>
            <li>Your profile</li>
            <li>Announcements</li>
            <li>Earnings</li>
            <li>Subscriptions</li>
        </ul>
      </div>
    </>
  )
}

export default NotificationFilter