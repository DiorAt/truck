import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import { useAnimation } from '../context/AnimationContext';

const MotionPaper = motion(Paper);

const defaultServices = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
    title: 'Эвакуация авто',
    price: 'от 1500',
    description: 'Быстрая подача эвакуатора в любую точку СПб и области',
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 48 }} />,
    title: 'Перевозка спецтехники',
    price: 'от 2500',
    description: 'Перевозка строительной и специальной техники',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 48 }} />,
    title: 'Техпомощь',
    price: 'от 1000',
    description: 'Запуск двигателя, замена колеса, подвоз топлива',
  },
];

const Services = () => {
  const servicesData = JSON.parse(localStorage.getItem('services')) || defaultServices;
  const { isLoaded } = useAnimation();

  return (
    <LazyMotion features={domAnimation} strict>
      <Box
        id="services"
        sx={{
          py: 8,
          background: '#0A1929',
          position: 'relative',
          opacity: 0,
          animation: isLoaded ? 'fadeIn 0.5s ease-out forwards' : 'none',
          '@keyframes fadeIn': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
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
                  initial={false}
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
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
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                      color: 'white',
                      mb: 3,
                      mx: 'auto',
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      mb: 2,
                      textAlign: 'center',
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#94A3B8',
                      mb: 2,
                      flex: 1,
                      textAlign: 'center',
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
                      textAlign: 'center',
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