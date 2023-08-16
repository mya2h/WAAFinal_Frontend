import React,{useState} from 'react';
import { Card, CardContent, Typography, Button, CardActions,Grid,Badge } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditJob from './EditJob';

const JobPostCard = ({ job, onApply }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleEditJob = () => {
    console.log('edited job');
  };
  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return(
    <Card>
      <CardContent>
        {job.isSelfPosted && (
          <Badge badgeContent="Self Posted" color="success" style={{float:'right',width:100,marginRight:'3%'}} />
        )}
        <Typography variant="h6" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="body1">{job.description}</Typography>
        <Grid container spacing={1} alignItems="center" style={{marginTop:20}}>
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
      </CardContent>
      <CardActions>
        {job.isSelfPosted? <Button startIcon={<ModeEditIcon />} onClick={handleEditModalOpen}>
            Edit Job
        </Button>: <Button variant="outlined" color="primary" onClick={() => onApply(job)}>
          Apply
        </Button>}
      </CardActions>
      <EditJob job={job} open={isEditModalOpen}
        onClose={handleEditModalClose}
        onEditJob={handleEditJob}/>
    </Card>
  );
};
export default JobPostCard;
