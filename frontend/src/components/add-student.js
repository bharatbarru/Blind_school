
import React, { useState } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Button,
    Grid,
    Snackbar,
    Alert
} from '@mui/material';
import { Link } from 'react-router-dom';

function AddStudentForm() {
    const [formData, setFormData] = useState({
        admissionNumber: '',
        gender: '',
        fullName: '',
        age: '',
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        rationCardNumber: '',
        phoneNumber: '',
        caste: '',
        religion: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        guardianName: '',
        guardianAddress: '',
        previousSchoolName: '',
        lastStudiedCity: '',
        lastStudiedState: '',
        tcNumber: '',
        yearOfStudy: '',
        identificationMarks: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/add-person', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSnackbarSeverity('success');
                setSnackbarMessage('Person added successfully!');
            } else {
                setSnackbarSeverity('error');
                setSnackbarMessage('Failed to add person. Please try again.');
            }
        } catch (error) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Failed to add person. Please try again.');
        }
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };



    return (<>
        <Link to='/dashboard'><Typography>back to dashboard</Typography></Link>
        <Paper elevation={3} sx={{ padding: 2 }}>
            <center><Typography variant="h5" gutterBottom>
                Add New Student
            </Typography></center>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="Admission Number"
                            name="admissionNumber"
                            value={formData.admissionNumber}
                            onChange={handleChange}
                            placeholder="Enter admission number"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="Gender"
                            name="gender"
                            value={"female"}
                            onChange={handleChange}
                            placeholder="Enter gender"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="Age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter age"
                            variant="outlined"
                            margin="normal"
                            required
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Father's Name"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="Enter father's name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Father's Occupation"
                            name="fatherOccupation"
                            value={formData.fatherOccupation}
                            onChange={handleChange}
                            placeholder="Enter father's occupation"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Mother's Name"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                            placeholder="Enter mother's name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Mother's Occupation"
                            name="motherOccupation"
                            value={formData.motherOccupation}
                            onChange={handleChange}
                            placeholder="Enter mother's occupation"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Ration Card Number"
                            name="rationCardNumber"
                            value={formData.rationCardNumber}
                            onChange={handleChange}
                            placeholder="Enter ration card number"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Caste"
                            name="caste"
                            value={formData.caste}
                            onChange={handleChange}
                            placeholder="Enter caste"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Religion"
                            name="religion"
                            value={formData.religion}
                            onChange={handleChange}
                            placeholder="Enter religion"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter address"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter city"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="Enter state"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Enter country"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label="Pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            placeholder="Enter pincode"
                            variant="outlined"
                            margin="normal"
                            required
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Guardian's Name"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            placeholder="Enter guardian's name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Guardian's Address"
                            name="guardianAddress"
                            value={formData.guardianAddress}
                            onChange={handleChange}
                            placeholder="Enter guardian's address"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Previous School Name"
                            name="previousSchoolName"
                            value={formData.previousSchoolName}
                            onChange={handleChange}
                            placeholder="Enter previous school name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Last Studied City"
                            name="lastStudiedCity"
                            value={formData.lastStudiedCity}
                            onChange={handleChange}
                            placeholder="Enter last studied city"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Last Studied State"
                            name="lastStudiedState"
                            value={formData.lastStudiedState}
                            onChange={handleChange}
                            placeholder="Enter last studied state"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="TC Number"
                            name="tcNumber"
                            value={formData.tcNumber}
                            onChange={handleChange}
                            placeholder="Enter TC number"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Year of Study"
                            name="yearOfStudy"
                            value={formData.yearOfStudy}
                            onChange={handleChange}
                            placeholder="Enter year of study"
                            variant="outlined"
                            margin="normal"
                            required
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Identification Marks"
                            name="identificationMarks"
                            value={formData.identificationMarks}
                            onChange={handleChange}
                            placeholder="Enter identification marks"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                >
                    Submit
                </Button>
            </form>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

        </Paper>
        </>);

}
export default AddStudentForm;