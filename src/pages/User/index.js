import React,{useState} from 'react';
import { Typography, Button, Container, Stack } from '@mui/material';
import DisplayUser from './DisplayUser';

const User = () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  return(
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
         Manage Users
        </Typography>
        {
          localStorage.getItem('role') === 'admin' &&
          <Button
            variant="contained"
            onClick={() => setIsModalOpen(true)}
            size="small"
          >
          Add User
          </Button>
        }
      </Stack>

      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <DisplayUser isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </Container>
    </div>
  );
};

export default User;
