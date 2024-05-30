import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel justo nec odio tempor pharetra. Integer mattis magna sit amet libero eleifend, sed volutpat ex ultricies. Cras consequat, ipsum in accumsan tristique, velit metus maximus tortor, vel tincidunt magna risus vel erat. Donec nec urna id ipsum finibus convallis. Proin non orci id eros eleifend luctus id ac libero. Nullam at lectus vitae lectus commodo varius. Integer euismod pharetra ante id tincidunt. Vivamus a nunc lacinia, maximus metus et, vulputate eros. Integer non augue ut nulla ultrices placerat. Vestibulum rhoncus ipsum at elit iaculis, a posuere odio congue. Mauris venenatis luctus velit. Nam suscipit arcu nec sapien euismod dapibus.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          We are located at
        </Typography>
        {/* Embedded Google Map */}
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11920.804973470708!2d83.36635349736535!3d17.769711799999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b22aa255d73%3A0x38c46327e59d9d90!2sGovernment%20Residential%20School%20For%20Visually%20Challenged%20Girls!5e0!3m2!1sen!2sin!4v1649908825706!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, marginTop: '1rem' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Paper>
    </Container>
  );
}

export default About;
