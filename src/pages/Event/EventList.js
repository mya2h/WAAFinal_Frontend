import React,{useState} from 'react';
import {Container,Grid,FormControl,TextField,Select,MenuItem } from '@mui/material';
import EventCard from './EventCard';


const EventList = ({events}) => {
  const [filterOption, setFilterOption] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events
    .filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.eventType.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((event) => filterOption === 'all' || (filterOption === 'selfPosted' && event.isSelfPosted));

  return(
    <Container maxWidth="md">
      <TextField
        label="Search Jobs"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FormControl style={{float:'right',marginTop:'10px'}}>
        <Select
          value={filterOption}
          onChange={handleFilterChange}
          label="Filter"
          size="small" 
        >
          <MenuItem value="all">All Events</MenuItem>
          <MenuItem value="selfPosted">Self-Posted</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {filteredEvents.map((event, index) => (
          <Grid item xs={12} key={index}>
            <EventCard index={index} event={event} />
          </Grid>

        ))}
      </Grid>
    </Container>
  );
};
export default EventList;
