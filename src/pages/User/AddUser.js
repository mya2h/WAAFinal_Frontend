import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MenuItem, Select, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AddUser({ rows, setRows,open,setOpen }) {
  const lastId = rows.length > 0 ? parseInt(rows[rows.length - 1].id, 10) : 0;
  const [id, setId] = useState((lastId + 1).toString());

  const [user, setUser] = useState({
    id,
    firstName: '',
    lastName: '',
    username: '',
    role: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddUser = () => {
    const updatedId = parseInt(id, 10) + 1; // Increment the id
    const newUser = {
      ...user,
      id: updatedId.toString(),
    };
    const updatedRows = [...rows, newUser];
    setRows(updatedRows);
    setId(updatedId.toString()); // Update the id state
    handleClose(); // Close the modal after adding the user
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            Add User
          </Typography>
          <TextField
            id="outlined-controlled"
            label="First Name"
            placeholder="First Name"
            value={user.firstName}
            onChange={(event) => {
              setUser({
                ...user,
                firstName: event.target.value,
              });
            }}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Last Name"
            placeholder="Last Name"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Username"
            placeholder="Username"
            value={user.username}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Select
            id="role"
            value={user.role}
            fullWidth
            margin="normal"
            onChange={(e) => {
              setUser({ ...user, role: e.target.value });
            }}
            variant="outlined"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="alumni">Alumni</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddUser}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
