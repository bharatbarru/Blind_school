import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, CircularProgress } from '@mui/material';

const ViewStudent = () => {
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAdmissionNumber(e.target.value);
    if (error) setError('');
  };

  const fetchStudentData = async (admissionNumber) => {
    setLoading(true);
    setError('');
    setStudentData(null);

    try {
      const response = await fetch(`http://localhost:5000/view-student/${admissionNumber}`);
      if (response.ok) {
        const data = await response.json();
        setStudentData(data);
      } else {
        setError('Student not found.');
      }
    } catch (err) {
      setError('An error occurred while fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!admissionNumber.trim()) {
      setError('Admission number is required.');
      return;
    }

    fetchStudentData(admissionNumber);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto', marginTop: 20 }}>
      <CardContent>
        <center>
          <Typography variant="h5">View Student Information</Typography>
        </center>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Admission Number"
            value={admissionNumber}
            onChange={handleChange}
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

        {studentData && (
          <div sx={{ marginTop: 2 }}>
            <Typography variant="h6">Student Information</Typography>
            <Typography><strong>Full Name:</strong> {studentData?.fullName || 'N/A'}</Typography>
            <Typography><strong>Gender:</strong> {studentData?.gender || 'N/A'}</Typography>
            <Typography><strong>Age:</strong> {studentData?.age || 'N/A'}</Typography>
            <Typography><strong>Father's Name:</strong> {studentData?.fatherName || 'N/A'}</Typography>
            <Typography><strong>Mother's Name:</strong> {studentData?.motherName || 'N/A'}</Typography>
            <Typography><strong>Father's Occupation:</strong> {studentData?.fatherOccupation || 'N/A'}</Typography>
            <Typography><strong>Mother's Occupation:</strong> {studentData?.motherOccupation || 'N/A'}</Typography>
            <Typography><strong>Ration Card Number:</strong> {studentData?.rationCardNumber || 'N/A'}</Typography>
            <Typography><strong>Phone Number:</strong> {studentData?.phoneNumber || 'N/A'}</Typography>
            <Typography><strong>Address:</strong> {studentData?.address || 'N/A'}</Typography>
            <Typography><strong>City:</strong> {studentData?.city || 'N/A'}</Typography>
            <Typography><strong>State:</strong> {studentData?.state || 'N/A'}</Typography>
            <Typography><strong>Country:</strong> {studentData?.country || 'N/A'}</Typography>
            <Typography><strong>Pincode:</strong> {studentData?.pincode || 'N/A'}</Typography>
            <Typography><strong>Guardian's Name:</strong> {studentData?.guardianName || 'N/A'}</Typography>
            <Typography><strong>Guardian's Address:</strong> {studentData?.guardianAddress || 'N/A'}</Typography>
            <Typography><strong>Previous School Name:</strong> {studentData?.previousSchoolName || 'N/A'}</Typography>
            <Typography><strong>Last Studied City:</strong> {studentData?.lastStudiedCity || 'N/A'}</Typography>
            <Typography><strong>Last Studied State:</strong> {studentData?.lastStudiedState || 'N/A'}</Typography>
            <Typography><strong>TC Number:</strong> {studentData?.tcNumber || 'N/A'}</Typography>
            <Typography><strong>Year of Study:</strong> {studentData?.yearOfStudy || 'N/A'}</Typography>
            <Typography><strong>Identification Marks:</strong> {studentData?.identificationMarks || 'N/A'}</Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ViewStudent;
