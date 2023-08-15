import React,{useState} from 'react';
import { Grid, Container } from '@mui/material';
import JobPostCard from './JobPostCard';

const JobList = ({jobs,handleApply}) => (
  <Container maxWidth="md">
    <Grid container spacing={3}>
      {jobs.map((job, index) => (
        <Grid item xs={12} key={index}>
          <JobPostCard job={job} onApply={handleApply} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default JobList;
