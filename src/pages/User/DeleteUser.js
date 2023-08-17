import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import sampleData from './sampleData';

const DeleteUser = ({rows, open, userId, setOpen, setRows, setUserId})=>{

  const handleConfirmDelete = () => {
    setOpen(false);
    setRows(rows.filter(item => item.id !== userId));
    setUserId(null);
  };

  const handleDeleteCancle = () => {
    setOpen(false);
    
  };

    
  return(
    <Dialog open={open} onClose={handleDeleteCancle}>
      <DialogTitle>Delete User</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this user?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteCancle} color='primary'>Cancle</Button>
        <Button onClick={handleConfirmDelete} color='primary'>Delete</Button>
      </DialogActions>

    </Dialog>
  );

};
export default DeleteUser;



