import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import AddImage from '../images/add.png';
import ViewImage from '../images/view.jpeg';
import UpdateImage from '../images/update.png';

function DashboardPage() {
  return (
    <Box
      sx={{
        paddingTop: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <img src={AddImage} alt="Add" style={{ width: '150px', height: '150px' }} />
            <Typography variant="h6" gutterBottom>
              Add New Student
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/add-student">
              Add New Student
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <img src={ViewImage} alt="View" style={{ width: '150px', height: '150px' }} />
            <Typography variant="h6" gutterBottom>
              View Student
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/view-student">
              View Student
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <img src={UpdateImage} alt="Update" style={{ width: '150px', height: '150px' }} />
            <Typography variant="h6" gutterBottom>
              Upload Certificates
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/upload-certificates">
              Upload Certificates
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <img src={AddImage} alt="Add" style={{ width: '150px', height: '150px' }} />
            <Typography variant="h6" gutterBottom>
              view certificates
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/certificates">
              view certificates
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardPage;
