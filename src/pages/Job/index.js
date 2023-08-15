import React,{useState} from 'react';
import { Typography,Button,Container,Stack } from '@mui/material';
import Iconify from '../../components/iconify';
import JobList from './JobList';
import AddJob from './AddJob';

const Job = ()=>{
  const [jobs, setJobs] = useState([
    {
      title: 'Software Engineer',
      description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
      companyName: 'TechCo',
      closingDate: '2023-12-31', // Example closing date
      address: {
        city: 'New York',
        state: 'NY',
      },
    },
    {
      title: 'Mechanical Engineer',
      description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
      companyName: 'TechCo',
      closingDate: '2023-12-31', // Example closing date
      address: {
        city: 'New York',
        state: 'NY',
      },
    },
    {
      title: 'Senior Software Engineer',
      description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
      companyName: 'TechCo',
      closingDate: '2023-12-31', // Example closing date
      address: {
        city: 'New York',
        state: 'NY',
      },
    },
    {
      title: 'Junior React Developer',
      description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
      companyName: 'TechCo',
      closingDate: '2023-12-31', // Example closing date
      address: {
        city: 'New York',
        state: 'NY',
      },
    },
    {
      title: 'Software Engineer',
      description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
      companyName: 'TechCo',
      closingDate: '2023-12-31', // Example closing date
      address: {
        city: 'New York',
        state: 'NY',
      },
    },
  ]);
    
  const handleApply = (job) => {
    console.log('Applying to job:', job);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };
  return(
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
            Job Posting
        </Typography>
        <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => setIsModalOpen(true)}>
            Add Job
        </Button>
      </Stack>

      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Job Poasting
        </Typography>
        <JobList jobs={jobs} onApply={handleApply} />
        <AddJob
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddJob={handleAddJob}
        />
      </Container>
    </div>
  );

};
export default Job;