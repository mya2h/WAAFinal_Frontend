import React from 'react';
import {Container,Grid } from '@mui/material';
import EventCard from './EventCard';


const EventList = ({events}) => (
  <Container maxWidth="md">
    <Grid container spacing={3}>
      {events.map((event, index) => (
        <Grid item xs={12} key={index}>
          <EventCard index={index} event={event} />
        </Grid>

      ))}
    </Grid>
  </Container>
);

export default EventList;
