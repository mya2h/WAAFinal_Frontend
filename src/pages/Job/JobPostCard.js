import React from 'react';
import { Card, CardContent, Typography, Button, CardActions,Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const JobPostCard = ({ job, onApply }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {job.title}
      </Typography>
      <Typography variant="body1">{job.description}</Typography>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <LocationOnIcon color="primary"/>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            {job.address.city}, {job.address.state}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="textSecondary">
          Company: {job.companyName}
      </Typography>
      <Typography variant="body2" color="textSecondary">
          Closing Date: {job.closingDate}
      </Typography>
      {/* Add more fields as needed */}
    </CardContent>
    <CardActions>
      <Button variant="outlined" color="primary" onClick={() => onApply(job)}>
          Apply
      </Button>
    </CardActions>
  </Card>
);

export default JobPostCard;
