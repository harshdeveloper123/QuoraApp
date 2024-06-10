//this code is totally dedicated to home screen. All the components related to home screen imported then view on the web page.
import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import AskQuestion from '../Components/AskQuestion'
import Feed from '../Components/Feed'
import DialogBox from '../Components/DialogBox'
import './HomePage.css'
import { useState } from 'react'
const HomePage = () => {
  //to set up the dialog box on the home page that the appear value is true or not.
  const [dialogOpen, setdialogOpen] = useState(false);
  const handleDialogOpen = ()=>{
    setdialogOpen(true)
  }
  const handleDialogClose = ()=>{
    setdialogOpen(false);
  }
  return (
    <div>
       {/* all the components used as props to handle the dialog box. */}
        <Header handleOpen={handleDialogOpen}/>
        <div className="HomePage_body">
          
        <Sidebar/>
        <div className='QuestionAndFeed'>

        <AskQuestion handleOpen={handleDialogOpen}/>
        <div className="Feed">
        <Feed/>
        </div>
        </div>
        <DialogBox open={dialogOpen} handleClose={handleDialogClose} />
        </div>
      
    </div>
  )
}

export default HomePage