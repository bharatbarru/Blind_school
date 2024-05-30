import React, { useState } from 'react';
import { Box, FormControl, Input, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Check if the login credentials match
    if (username === 'admin' && password === 'admin') {
      // Redirect to the dashboard page
      navigate('/dashboard');
    } else {
      // Handle invalid login
      alert("wrong credentials");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: 300,
          p: 2,
          border: '1px solid #ccc',
          borderRadius: 4,
          textAlign: 'center',
          backgroundColor: ''
        }}
      >
        <FormControl fullWidth sx={{ my: 1 }}>
          <Typography variant='h6' textTransform={"capitalize"} sx={{ my: 2 }}>Login form</Typography>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          sx={{ my: 1, backgroundColor: "#7FC7D9" }}
          onClick={handleLogin} // Call handleLogin function on button click
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
