import React, { useState } from 'react';
import { TextField, Box, Button, Typography,Card,CardContent } from '@mui/material';

const MyForm = () => {
  const [formData, setFormData] = useState({
    gradYear: '2023',
    major: 'Computer Science',
    numExperience: '2',
    achievement: 'Dean\'s List',
  });

  const [address, setAddress] = useState({
    zip: '12345',
    street: '123 Main St',
    city: 'Cityville',
    state: 'CA',
  });

  const [experiences, setExperiences] = useState([
    {
      position: 'Software Developer',
      responsibilities: 'Developed web applications...',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
      organization: 'Tech Company A',
    },
    {
      position: 'Intern',
      responsibilities: 'Assisted with coding...',
      startDate: '2021-06-01',
      endDate: '2021-08-31',
      organization: 'Tech Company B',
    },
  ]);

  const handleFormChange = (section, field, value) => {
    if (section === 'personal') {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };

  const handleAddressChange = (field, value) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [field]: value,
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
        organization: '',
      },
    ]);
  };

  const deleteExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:20}}>
      <Card sx={{ width: '60vw' }}>
        <CardContent>
          <Typography variant="h6">Personal Information</Typography>
          <TextField
            label="Graduation Year"
            size="small"
            variant="outlined"
            fullWidth
            value={formData.gradYear}
            onChange={(e) =>
              handleFormChange('personal', 'gradYear', e.target.value)
            }
            margin="normal"
          />
          <TextField
            label="Major"
            size="small"
            variant="outlined"
            fullWidth
            value={formData.major}
            onChange={(e) =>
              handleFormChange('personal', 'major', e.target.value)
            }
            margin="normal"
          />
          <TextField
            label="Number of Experiences"
            size="small"
            variant="outlined"
            fullWidth
            value={formData.numExperience}
            onChange={(e) =>
              handleFormChange('personal', 'numExperience', e.target.value)
            }
            margin="normal"
          />
          <TextField
            label="Achievement"
            size="small"
            variant="outlined"
            fullWidth
            value={formData.achievement}
            onChange={(e) =>
              handleFormChange('personal', 'achievement', e.target.value)
            }
            margin="normal"
          />
        </CardContent>
      </Card>

      <Card sx={{ width: '60vw' }}>
        <CardContent>
          <Typography variant="subtitle1">Address</Typography>
          <TextField
            label="Zip"
            size="small"
            variant="outlined"
            fullWidth
            value={address.zip}
            onChange={(e) => handleAddressChange('zip', e.target.value)}
            margin="normal"
          />
          <TextField
            label="Street"
            size="small"
            variant="outlined"
            fullWidth
            value={address.street}
            onChange={(e) => handleAddressChange('street', e.target.value)}
            margin="normal"
          />
          <TextField
            label="City"
            size="small"
            variant="outlined"
            fullWidth
            value={address.city}
            onChange={(e) => handleAddressChange('city', e.target.value)}
            margin="normal"
          />
          <TextField
            label="State"
            size="small"
            variant="outlined"
            fullWidth
            value={address.state}
            onChange={(e) => handleAddressChange('state', e.target.value)}
            margin="normal"
          />
        </CardContent>
      </Card>

      <Card sx={{ width: '60vw' }}>
        <CardContent>
          <Typography variant="subtitle1">Experience</Typography>
          {experiences.map((experience, index) => (
            <Box key={index} marginBottom={2} boxShadow={1} p={2}>
              <TextField
                label="Position"
                size="small"
                variant="outlined"
                fullWidth
                value={experience.position}
                onChange={(e) =>
                  handleExperienceChange(index, 'position', e.target.value)
                }
                margin="normal"
              />
              <TextField
                label="Responsibilities"
                size="small"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={experience.responsibilities}
                onChange={(e) =>
                  handleExperienceChange(index, e.target.value)
                }
                margin="normal"
              />
              <TextField
                label="Start Date"
                type="date"
                size="small"
                variant="outlined"
                fullWidth
                value={experience.startDate}
                onChange={(e) =>
                  handleExperienceChange(index, 'startDate', e.target.value)
                }
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
              <TextField
                label="End Date"
                type="date"
                size="small"
                variant="outlined"
                fullWidth
                value={experience.endDate}
                onChange={(e) =>
                  handleExperienceChange(index, 'endDate', e.target.value)
                }
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
              <TextField
                label="Organization"
                size="small"
                variant="outlined"
                fullWidth
                value={experience.organization}
                onChange={(e) =>
                  handleExperienceChange(index, 'organization', e.target.value)
                }
                margin="normal"
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteExperience(index)}
              >
            Delete Experience
              </Button>
            </Box>
          ))}
          <Button variant="outlined" color="primary" onClick={addExperience}>
        Add Experience
          </Button>
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="center" mt={3}>
        <Button type="submit" variant="contained" color="primary">
        Submit
        </Button>
      </Box>
    </form>
  );
};

export default MyForm;
            
