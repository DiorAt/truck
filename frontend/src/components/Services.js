import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PhoneIcon from '@mui/icons-material/Phone';

const MotionCard = motion(Card);

const services = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
    title: 'Эвакуация авто',
    price: 'от 1500 ₽',
    description: 'Быстрая подача эвакуатора в любую точку СПб и области',
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 48 }} />,
    title: 'Перевозка спецтехники',
    price: 'от 2500 ₽',
    description: 'Перевозка строительной и специальной техники',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 48 }} />,
    title: 'Техпомощь',
    price: 'от 1000 ₽',
    description: 'Запуск двигателя, замена колеса, подвоз топлива',
  },
  {
    icon: <TimeToLeaveIcon sx={{ fontSize: 48 }} />,
    title: 'Аварийные авто',
    price: 'от 2000 ₽',
    description: 'Эвакуация аварийных и неисправных автомобилей',
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Наши услуги
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                sx={{
                  height: '100%',
                  minHeight: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #3B82F6, #34D399)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
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
                      transform: 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'rotate(360deg)',
                      },
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    fontWeight={600}
                    sx={{ color: '#fff' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    fontWeight={700}
                    sx={{
                      background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2,
                    }}
                  >
                    {service.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ 
                      color: 'text.secondary',
                      mb: 'auto',
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box 
                    sx={{ 
                      mt: 3,
                      background: 'linear-gradient(0deg, rgba(15, 23, 42, 0.5) 0%, transparent 100%)',
                      mx: -4,
                      mb: -4,
                      px: 4,
                      pb: 4,
                      pt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      href="tel:+78121234567"
                      startIcon={<PhoneIcon />}
                      sx={{
                        py: 1.5,
                        background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                        },
                      }}
                    >
                      Заказать
                    </Button>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 