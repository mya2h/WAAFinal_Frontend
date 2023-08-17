import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField,Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import axios from 'axios';
import Iconify from '../../../components/iconify';
import axiosInstance from '../../../axiosInstance';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [user,setUser] = useState({
    email:'',
    password:''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false); 
  const [error, setError] = useState('');

  const handleClick = async() => {
    try {
      const result = await axios.post('http://localhost:8080/users/login', user);
      if (result) {
        localStorage.setItem('token', result.data.token); 
        const userResponse = await axiosInstance.get('users/user');
        localStorage.setItem('role',userResponse.data.role.toLowerCase());
        localStorage.removeItem('displayNamxe');
        localStorage.setItem('displayName',`${userResponse.data.firstName } ${ userResponse.data.lastName}`);
        navigate('/dashboard');
      }
    } catch (error) {
      setError('An error occurred. Please check your credentials.'); // Set error message
      setOpenSnackbar(true); // Open the Snackbar
    }
  };
  const handleChange = (e)=>{
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value});
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setError(''); 
  };
  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={handleChange}/>
        <TextField
          name="password"
          label="Password"
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover" />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={error}
      
      />
    </>
  );
}
