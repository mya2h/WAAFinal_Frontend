import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddEvent = ({ open, onClose, onAddEvent }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    eventType: '',
    location: '',
    date: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
    openDate: '',
    closingDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    onAddEvent(eventData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          style={{ position: 'absolute', top: 10, right: 10 }}
          onClick={onClose}
        >
          Close
        </Button>
        <Typography variant="h6" gutterBottom>
          Add New Event
        </Typography>
        <TextField
          label="Event Title"
          name="title"
          fullWidth
          margin="normal"
          value={eventData.title}
          onChange={handleInputChange}
        />
        <TextField
          label="Event Description"
          name="description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={eventData.description}
          onChange={handleInputChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Event Type</InputLabel>
          <Select
            label="Event Type"
            name="eventType"
            value={eventData.eventType}
            onChange={handleInputChange}
          >
            <MenuItem value="reunion">Reunion</MenuItem>
            <MenuItem value="workshop">Workshop</MenuItem>
            <MenuItem value="seminar">Seminar</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Opening Date"
          name="date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={eventData.date}
          onChange={handleInputChange}
        />
        
        <Button variant="contained" color="primary" onClick={handleAddEvent} style={{marginTop:'20px'}}>
          Add Event
        </Button>
      </Box>
    </Modal>
  );
};

export default AddEvent;
