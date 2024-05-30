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

function UploadCertificatesForm() {
    const [formData, setFormData] = useState({
        admissionNumber: '',
        photo: null,
        transferCertificate: null,
        aadharCard: null,
        studyCertificate: null,
        fatherAadharCard: null,
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (files && files.length > 0) {
            setFormData((prevFormData) => ({ ...prevFormData, [name]: files[0] }));
        } else {
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const response = await fetch('http://localhost:5000/upload-certificates', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                setSnackbarSeverity('success');
                setSnackbarMessage('Certificates uploaded successfully!');
            } else {
                throw new Error('Failed to upload certificates.');
            }
        } catch (error) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Failed to upload certificates. Please try again.');
        }
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <>
            <Link to='/dashboard'><Typography>Back to Dashboard</Typography></Link>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <center><Typography variant="h5" gutterBottom>
                    Upload Certificates
                </Typography></center>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Admission Number"
                                name="admissionNumber"
                                value={formData.admissionNumber}
                                onChange={handleChange}
                                placeholder="Enter admission number"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type="file"
                                name="photo"
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type="file"
                                name="transferCertificate"
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type="file"
                                name="aadharCard"
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type="file"
                                name="studyCertificate"
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type="file"
                                name="fatherAadharCard"
                                onChange={handleChange}
                                variant="outlined"
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
        </>
    );
}

export default UploadCertificatesForm;
