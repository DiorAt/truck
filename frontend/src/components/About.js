import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);

const stats = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
    value: '5+',
    label: 'Лет на рынке',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    value: '10 000+',
    label: 'Довольных клиентов',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
    value: '100%',
    label: 'Гарантия качества',
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.15), transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <MotionTypography
                variant="h2"
                sx={{
                  mb: 4,
                  background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                О нашей компании
              </MotionTypography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Мы - профессиональная служба эвакуации автомобилей в Санкт-Петербурге, 
                работающая на рынке более 5 лет. Наша команда состоит из опытных 
                специалистов, готовых прийти на помощь в любое время суток.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Мы гордимся тем, что предоставляем быстрый и надежный сервис, 
                используя современное оборудование и профессиональный подход к 
                каждому клиенту. Наша цель - обеспечить безопасную и своевременную 
                эвакуацию вашего автомобиля.
              </Typography>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3} sx={{ height: '100%' }}>
              {stats.map((stat, index) => (
                <Grid item xs={4} key={index} sx={{ height: '100%' }}>
                  <MotionPaper
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      height: '280px',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      background: '#0A1929',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {/* Декоративный элемент в углу */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                        opacity: 0.1,
                        transform: 'rotate(45deg)',
                      }}
                    />
                    
                    {/* Градиентный квадрат */}
                    <MotionBox
                      initial={{ rotate: -10, scale: 0.9 }}
                      animate={{
                        rotate: [0, -10, 0],
                        scale: [0.9, 1, 0.9],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      sx={{
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                        borderRadius: '12px',
                        m: '30px auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(96, 165, 250, 0.3)',
                      }}
                    >
                      <Box
                        sx={{
                          color: '#fff',
                          fontSize: '2.5rem',
                          fontWeight: 'bold',
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        }}
                      >
                        {stat.value}
                      </Box>
                    </MotionBox>

                    {/* Текст */}
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#94A3B8',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        mt: 2,
                        px: 3,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 