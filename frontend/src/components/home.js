import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from './footer';
import s1 from '../images/slider1.png';
import s2 from '../images/slider2.png';
import s3 from '../images/slider3.png';

// Carousel Component
const CarouselSlider = () => {
  // Dummy images
  const images = [
    { src: s1, alt: 'Slide 1' },
    { src: s2, alt: 'Slide 2' },
    { src: s3, alt: 'Slide 3' },
  ];

  return (
    <Carousel autoPlay interval={1000} infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

// Achievement Cards Component
const AchievementCards = () => {
  // Dummy achievement data
  const achievements = [
    { title: 'Achievement 1', description: 'Description of achievement 1' },
    { title: 'Achievement 2', description: 'Description of achievement 2' },
    { title: 'Achievement 3', description: 'Description of achievement 3' },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Achievements
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {achievement.title}
                </Typography>
                <Typography>{achievement.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// FAQ Accordion Component
const FAQAccordion = () => {
  // Dummy FAQ data
  const faqs = [
    { question: 'Question 1', answer: 'Answer to question 1' },
    { question: 'Question 2', answer: 'Answer to question 2' },
    { question: 'Question 3', answer: 'Answer to question 3' },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        FAQ
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {faqs.map((faq, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Teachers and Staff Column Component
const TeachersStaffColumn = () => {
  // Dummy teachers and staff data
  const teachersStaff = [
    'Teacher 1',
    'Teacher 2',
    'Teacher 3',
    'Staff 1',
    'Staff 2',
    'Staff 3',
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Teachers and Staff
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {teachersStaff.map((person, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Typography>{person}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Home Page Component
const Home = () => {
  return (
    <>
      <CarouselSlider />
      <AchievementCards />
      <FAQAccordion />
      <TeachersStaffColumn />
      <Footer/>
    </>
  );
};

export default Home;
