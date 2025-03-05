import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SpeedIcon from '@mui/icons-material/Speed';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);

const advantages = [
  {
    icon: <HandshakeIcon sx={{ fontSize: 56 }} />,
    title: 'Надежность',
    description: 'Более 10 000 успешных эвакуаций за 5 лет работы',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 56 }} />,
    title: 'Оперативность',
    description: 'Среднее время подачи эвакуатора 15-20 минут',
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 56 }} />,
    title: 'Профессионализм',
    description: 'Опытные водители со стажем более 5 лет',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 56 }} />,
    title: 'Современный автопарк',
    description: 'Эвакуаторы для любых типов транспорта',
  },
  {
    icon: <PaymentsIcon sx={{ fontSize: 56 }} />,
    title: 'Прозрачные цены',
    description: 'Фиксированная стоимость без скрытых платежей',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 56 }} />,
    title: '24/7 поддержка',
    description: 'Работаем круглосуточно без выходных',
  },
];

const Advantages = () => {
  return (
    <Box
      id="advantages"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <MotionTypography
          variant="h2"
          textAlign="center"
          mb={8}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{
            background: 'linear-gradient(135deg, #60A5FA, #34D399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Почему выбирают нас
        </MotionTypography>

        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    '& .advantage-icon': {
                      transform: 'scale(1.2)',
                      color: '#60A5FA',
                    },
                  },
                }}
              >
                <Box
                  className="advantage-icon"
                  sx={{
                    color: 'primary.main',
                    mb: 3,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {advantage.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                  }}
                >
                  {advantage.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {advantage.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Advantages; 