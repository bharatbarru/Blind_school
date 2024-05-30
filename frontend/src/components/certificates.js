import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, CircularProgress } from '@mui/material';

const ViewCertificate = () => {
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAdmissionNumber(e.target.value); // Update admission number
    if (error) {
      setError(''); // Clear error if it's set
    }
  };

  const fetchCertificateData = async (admissionNumber) => {
    setLoading(true);
    setError('');
    setCertificateData(null);

    try {
      const response = await fetch(`http://localhost:5000/certificates/${admissionNumber}`);

      if (response.ok) {
        const data = await response.json();
        setCertificateData(data);
      } else if (response.status === 404) {
        setError('Certificate not found for the given admission number.'); // Specific error handling
      } else {
        setError('Unexpected server response.'); // General error handling
      }
    } catch (err) {
      console.error('Fetch error:', err); // Log the error for debugging
      setError('An error occurred while fetching data. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!admissionNumber.trim()) {
      setError('Admission number is required.'); // Validate input
      return;
    }

    fetchCertificateData(admissionNumber); // Fetch certificate data
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto', marginTop: 20 }}>
      <CardContent>
        <center>
          <Typography variant="h5">View Certificate Information</Typography>
        </center>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Admission Number"
            value={admissionNumber} // Set input value
            onChange={handleChange} // Correct onChange handler
            variant="outlined"
            margin="normal"
            placeholder="Enter Admission Number"
          />
          <center>
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Search'}
            </Button>
          </center>
        </form>

        {error && (
          <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {loading && <CircularProgress sx={{ marginTop: 2 }} />}

        {certificateData && (
          <div sx={{ marginTop: 2 }}>
            <Typography variant="h6">Certificate Information</Typography>
            <Typography><strong>Photo:</strong> {certificateData.photo || 'N/A'}</Typography>
            <Typography><strong>Transfer Certificate:</strong> {certificateData.transferCertificate || 'N/A'}</Typography>
            <Typography><strong>Aadhar Card:</strong> {certificateData.aadharCard || 'N/A'}</Typography>
            <Typography><strong>Study Certificate:</strong> {certificateData.studyCertificate || 'N/A'}</Typography>
            <Typography><strong>Father's Aadhar Card:</strong> {certificateData.fatherAadharCard || 'N/A'}</Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ViewCertificate;
