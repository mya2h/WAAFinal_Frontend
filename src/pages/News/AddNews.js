import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const AddNews = ({ open, onClose, onAddNews }) => {
  const [newsData, setNewsData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddNews = () => {
    onAddNews(newsData);
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
          width: 500,
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
          Add New News
        </Typography>
        <TextField
          label="News Title"
          name="title"
          fullWidth
          margin="normal"
          value={newsData.title}
          onChange={handleInputChange}
        />
        <TextField
          label="News Description"
          name="description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={newsData.description}
          onChange={handleInputChange}
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={newsData.date}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddNews}>
          Add News
        </Button>
      </Box>
    </Modal>
  );
};

export default AddNews;
