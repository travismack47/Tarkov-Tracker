import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import RegisterForm from './RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='register-page'>
      <div className='background-image3' />
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <RegisterForm />
    </Container>
    </div>
  );
}

export default RegisterPage;
