import React, { useState } from 'react';
import { Grid, Container, TextField, FormControl, Select, MenuItem } from '@mui/material';
import NewsCard from './NewsCard';

const NewsList = ({ news }) => {
  const [filterOption, setFilterOption] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNews = news
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Container maxWidth="md">
      <TextField
        label="Search News"
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FormControl style={{ float: 'right', marginTop: '10px' }}>
        <Select
          value={filterOption}
          onChange={handleFilterChange}
          label="Filter"
          size="small"
        >
          <MenuItem value="all">All News</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {filteredNews.map((item, index) => (
          <Grid item xs={12} key={index}>
            <NewsCard news={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsList;
