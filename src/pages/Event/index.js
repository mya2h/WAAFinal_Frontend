import React, { useState } from 'react';
import EventList from './EventList';

const Event = ()=>{
  const [events,setEvents] = useState([
    {
      title: 'Event Name 1',
      eventType: 'Reunion',
      location: 'Location A',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
    },
    {
      title: 'Event Name 2',
      eventType: 'Workshop',
      location: 'Location B',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
    },
    {
      title: 'Event Name 1',
      eventType: 'Seminar',
      location: 'Location A',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
    },
    {
      title: 'Event Name 2',
      eventType: 'Reunion',
      location: 'Location B',
      date:'2023-04-06',
      description: 'Event description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
    },
    // Add more events here
  ]);
  return(
    <EventList events={events}/>
  );
};
export default Event;