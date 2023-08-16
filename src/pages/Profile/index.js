import React,{useState} from 'react';
import {Container} from '@mui/material';
import ProfileView from './ProfileView';

const Profile = ()=>{
  const [profile,setProfile] = useState('');
  return(
    <div>
      <ProfileView/>
    </div>
  );

};
export default Profile;