import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useAnimation } from '../context/AnimationContext';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

const Hero = () => {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md'));
  const { isLoaded } = useAnimation();

  return (
    <LazyMotion features={domAnimation} strict>
      <Box
        component="section"
        sx={{
          minHeight: '100vh',
          pt: { xs: 12, md: 0 },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          visibility: isLoaded ? 'visible' : 'hidden',
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
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), transparent 50%)',
            opacity: 0,
            animation: isLoaded ? 'gradientPulse 8s ease-in-out infinite' : 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.2), transparent 50%)',
            opacity: 0,
            animation: isLoaded ? 'gradientPulse 8s ease-in-out infinite reverse' : 'none',
          },
          '@keyframes gradientPulse': {
            '0%, 100%': {
              opacity: 0.5,
              transform: 'scale(1)',
            },
            '50%': {
              opacity: 0.8,
              transform: 'scale(1.5)',
            },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={7}>
                <MotionBox variants={itemVariants}>
                  <MotionTypography
                    variant="h1"
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 2,
                      background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      willChange: 'transform',
                    }}
                  >
                    Эвакуатор 24/7
                  </MotionTypography>

                  <MotionTypography
                    variant="h2"
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 4,
                      color: 'text.secondary',
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      willChange: 'transform',
                    }}
                  >
                    Быстрая подача в любую точку Санкт-Петербурга
                  </MotionTypography>

                  <Box 
                    sx={{ 
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 6,
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="tel:+78121234567"
                      startIcon={<PhoneIcon />}
                      sx={{
                        fontSize: '1.5rem',
                        py: 2,
                        px: 6,
                        borderRadius: '50px',
                        background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        willChange: 'transform, box-shadow',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                          transform: 'translateY(-2px) translateZ(0)',
                          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.6)',
                        },
                      }}
                    >
                      8 (812) 123-45-67
                    </Button>
                  </Box>

                  <Grid container spacing={3}>
                    {[
                      { icon: <SpeedIcon sx={{ fontSize: 40 }} />, title: '15 минут', text: 'Среднее время подачи' },
                      { icon: <SecurityIcon sx={{ fontSize: 40 }} />, title: '5 000 000 ₽', text: 'Страховка груза' },
                      { icon: <SupportAgentIcon sx={{ fontSize: 40 }} />, title: '24/7', text: 'Работаем круглосуточно' },
                    ].map((item, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <MotionPaper
                          variants={itemVariants}
                          sx={{
                            p: 3,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            background: 'rgba(30, 41, 59, 0.8)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(148, 163, 184, 0.1)',
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            willChange: 'transform, box-shadow',
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-8px) translateZ(0)',
                              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                              border: '1px solid rgba(148, 163, 184, 0.2)',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              mb: 2,
                              color: 'primary.main',
                              transform: 'scale(1.2) translateZ(0)',
                              willChange: 'transform',
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography
                            variant="h4"
                            sx={{
                              mb: 1,
                              background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              willChange: 'transform',
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography 
                            color="text.secondary"
                            sx={{
                              willChange: 'transform',
                            }}
                          >
                            {item.text}
                          </Typography>
                        </MotionPaper>
                      </Grid>
                    ))}
                  </Grid>
                </MotionBox>
              </Grid>

              <Grid item xs={12} md={5}>
                <MotionBox
                  variants={itemVariants}
                  sx={{
                    position: 'relative',
                    display: { xs: 'none', md: 'block' },
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '140%',
                      height: '140%',
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)',
                      opacity: 0,
                      animation: isLoaded ? 'rotate 20s linear infinite' : 'none',
                    },
                    '@keyframes rotate': {
                      '0%': {
                        transform: 'translate(-50%, -50%) rotate(0deg)',
                      },
                      '100%': {
                        transform: 'translate(-50%, -50%) rotate(360deg)',
                      },
                    },
                  }}
                >
                  <LocalShippingIcon
                    sx={{
                      fontSize: '500px',
                      width: '100%',
                      height: 'auto',
                      filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))',
                      animation: isLoaded ? 'float 6s ease-in-out infinite' : 'none',
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      '@keyframes float': {
                        '0%, 100%': {
                          transform: 'translateY(0) translateZ(0)',
                        },
                        '50%': {
                          transform: 'translateY(-20px) translateZ(0)',
                        },
                      },
                    }}
                  />
                </MotionBox>
              </Grid>
            </Grid>
          </MotionBox>
        </Container>
      </Box>
    </LazyMotion>
  );
};

export default Hero; 