import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid, Box } from '@mui/material';
import Footer from './footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend server
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Inquiry"
                name="inquiry"
                multiline
                rows={4}
                value={formData.inquiry}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
         <center> <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '1rem', alignSelf: 'center' }}
          >
            Submit
          </Button></center>
        </form>
      </Container>
      <Box sx={{ position: "fixed", bottom: "0", width: "100%", zIndex: 999 }}>
        <Footer />
      </Box>
    </>
  );
};

export default Contact;
