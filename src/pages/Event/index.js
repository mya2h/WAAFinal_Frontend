import React, { useState } from 'react';
import { Typography,Button,Container,Stack } from '@mui/material';
import Iconify from '../../components/iconify';
import EventList from './EventList';
import AddEvent from './AddEvent';

const Event = ()=>{
  const [events,setEvents] = useState([
    {
      title: 'Event Name 1',
      eventType: 'Reunion',
      location: 'Location A',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
      isSelfPosted:false
    },
    {
      title: 'Event Name 2',
      eventType: 'Workshop',
      location: 'Location B',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
      isSelfPosted:true
    },
    {
      title: 'Event Name 1',
      eventType: 'Seminar',
      location: 'Location A',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
      isSelfPosted:false
    },
    {
      title: 'Event Name 2',
      eventType: 'Reunion',
      location: 'Location B',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
      isSelfPosted:true
    },
    // Add more events here
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAttend = (event) => {
    console.log('Applying to event:', event);
  };
  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return(
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
            Events
        </Typography>
        <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} size="small" onClick={() => setIsModalOpen(true)}>
            Add Event
        </Button>
      </Stack>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <EventList events={events}/>
        <AddEvent
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddJob={handleAddEvent}
        />
      </Container>
    </div>
  );
};
export default Event;