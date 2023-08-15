import React,{useState} from 'react';
import { Grid, Container,TextField,FormControl,Select,MenuItem } from '@mui/material';
import JobPostCard from './JobPostCard';

const JobList = ({jobs,handleApply}) => {
  const [filterOption, setFilterOption] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs
    .filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) => filterOption === 'all' || (filterOption === 'selfPosted' && job.isSelfPosted));

  return(
    <Container maxWidth="md">
      <TextField
        label="Search Jobs"
        variant="outlined"
        fullWidth
        margin="normal"
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
          <MenuItem value="all">All Jobs</MenuItem>
          <MenuItem value="selfPosted">Self-Posted</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {filteredJobs.map((job, index) => (
          <Grid item xs={12} key={index}>
            <JobPostCard job={job} handleApply={handleApply} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobList;
