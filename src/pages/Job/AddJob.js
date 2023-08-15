import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddJob = ({ open, onClose, onAddJob }) => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    companyName: '',
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
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddJob = () => {
    onAddJob(jobData);
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
          Add New Job
        </Typography>
        <TextField
          label="Job Title"
          name="title"
          fullWidth
          margin="normal"
          value={jobData.title}
          onChange={handleInputChange}
        />
        <TextField
          label="Job Description"
          name="description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={jobData.description}
          onChange={handleInputChange}
        />
        <TextField
          label="Company Name"
          name="companyName"
          fullWidth
          margin="normal"
          value={jobData.companyName}
          onChange={handleInputChange}
        />
        <Typography variant="subtitle1">Address <LocationOnIcon color="primary" /></Typography>
      
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <TextField
              label="Street"
              name="address.street"
              fullWidth
              margin="normal"
              value={jobData.address.street}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              name="address.city"
              margin="normal"
              fullWidth
              value={jobData.address.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="State"
              name="address.state"
              margin="normal"
              fullWidth
              value={jobData.address.state}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Zip Code"
              name="address.zipCode"
              margin="normal"
              fullWidth
              value={jobData.address.zipCode}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <TextField
              label="Opening Date"
              name="openDate"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={jobData.openDate}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Closing Date"
              name="closingDate"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={jobData.closingDate}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        
        <Button variant="contained" color="primary" onClick={handleAddJob}>
          Add Job
        </Button>
      </Box>
    </Modal>
  );
};

export default AddJob;
