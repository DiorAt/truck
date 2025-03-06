import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

const MotionPaper = motion(Paper);

const Services = () => {
  const servicesData = JSON.parse(localStorage.getItem('services')) || [];

  return (
    <LazyMotion features={domAnimation}>
      <Box
        id="services"
        sx={{
          py: 8,
          background: '#0A1929',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              color: '#fff',
              background: 'linear-gradient(135deg, #60A5FA, #34D399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Наши услуги
          </Typography>

          <Grid container spacing={3}>
            {servicesData.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    willChange: 'transform, opacity',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#94A3B8',
                      mb: 2,
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: '#60A5FA',
                      fontWeight: 'bold',
                      mt: 'auto',
                    }}
                  >
                    {service.price} ₽
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </LazyMotion>
  );
};

export default Services; 