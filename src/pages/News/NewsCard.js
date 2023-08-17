import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions} from '@mui/material';
import EditNews from './EditNews'; // Import the EditNews component

const NewsCard = ({ news }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control modal visibility

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="body1">{news.description}</Typography>
        <Typography variant="body2" color="textSecondary">
          Date: {news.date}
        </Typography>
      </CardContent>
      <CardActions>
        {
          localStorage.getItem('role') === 'admin' &&
          <Button onClick={handleEditModalOpen} color="secondary">Update</Button> 
        }
      </CardActions>
      <EditNews news={news} open={isEditModalOpen} onClose={handleEditModalClose} />
    </Card>
  );
};

export default NewsCard;
