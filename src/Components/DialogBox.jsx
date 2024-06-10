//code of dialog box that appear when the user clicks on ask, post, Ask question button.
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
//open handler is created and close handler is created that checks whether the dialog box appears or appears so when.
const DialogBox = ({ open, handleClose }) => {
  return (
    //starting of code
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Choose an Option</DialogTitle>
      <DialogContent>
        <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
          Add Question
        </Button>
        <Button variant="contained" color="secondary" fullWidth>
          Create Post
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
