import React, { useState } from 'react';
import { Typography, Button, Container, Stack } from '@mui/material';
import NewsList from './NewsList';
import AddNews from './AddNews';

const NewsAndAnnouncements = () => {
  const [news, setNews] = useState([
    {
      title: 'Important Announcement',
      description: 'We are excited to announce the launch of our new website!',
      date: '2023-08-17',
    },
    {
      title: 'Latest News Update',
      description: 'Company XYZ receives an award for innovation in technology.',
      date: '2023-08-15',
    },
    {
      title: 'New Product Release',
      description: 'Introducing our latest product that will revolutionize the industry.',
      date: '2023-08-12',
    },
    {
      title: 'Company Expansion',
      description: 'We are opening new offices in international locations to serve you better.',
      date: '2023-08-10',
    },
    {
      title: 'Upcoming Event',
      description: 'Join us for an upcoming event showcasing our latest advancements.',
      date: '2023-08-08',
    },
    {
      title: 'Collaboration Announcement',
      description: 'We are excited to announce our collaboration with XYZ Corporation.',
      date: '2023-08-05',
    },
    {
      title: 'Industry Recognition',
      description: 'Our CEO receives a prestigious award for contributions to the industry.',
      date: '2023-08-03',
    },
    {
      title: 'Employee Spotlight',
      description: 'Meet our employee of the month who has shown outstanding dedication.',
      date: '2023-08-01',
    },
    // Add more news articles or announcements here
  ]);
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNews = (newNews) => {
    setNews([...news, newNews]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          News and Announcements
        </Typography>
        {
          localStorage.getItem('role') === 'admin' &&
          <Button
            variant="contained"
            onClick={() => setIsModalOpen(true)}
            size="small"
          >
          Add News
          </Button>
        }
      </Stack>

      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        < NewsList news={news} />
        <AddNews
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddNews={handleAddNews}
        />
      </Container>
    </div>
  );
};

export default NewsAndAnnouncements;
