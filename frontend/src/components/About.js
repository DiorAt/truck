import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import { useAnimation } from '../context/AnimationContext';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
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

const stats = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
    value: '5+',
    label: 'Лет на рынке',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    value: '1000+',
    label: 'Довольных клиентов',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
    value: '100%',
    label: 'Гарантия качества',
  },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { isLoaded } = useAnimation();

  return (
    <LazyMotion features={domAnimation} strict>
      <Box
        component="section"
        id="about"
        sx={{
          py: 8,
          position: 'relative',
          background: '#0A1929',
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
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)',
            pointerEvents: 'none',
            opacity: 0,
            animation: isLoaded ? 'gradientFade 1s ease-out forwards' : 'none',
          },
          '@keyframes gradientFade': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
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
                willChange: 'transform',
              }}
            >
              О нашей компании
            </Typography>

            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <MotionPaper
                    variants={itemVariants}
                    sx={{
                      height: isMobile ? 'auto' : '320px',
                      minHeight: isMobile ? '240px' : 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      p: isMobile ? 4 : 5,
                      willChange: 'transform, opacity',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px) translateZ(0)',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
                      },
                    }}
                  >
                    <MotionBox
                      initial={false}
                      animate={isLoaded ? {
                        scale: [0.9, 1, 0.9],
                      } : { scale: 0.9 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                      }}
                      sx={{
                        width: isMobile ? '100px' : '140px',
                        height: isMobile ? '100px' : '140px',
                        background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                        borderRadius: '20px',
                        m: isMobile ? '20px auto' : '30px auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(96, 165, 250, 0.3)',
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: '#fff',
                          fontSize: isMobile ? '2.2rem' : '2.8rem',
                          fontWeight: 'bold',
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          willChange: 'transform',
                        }}
                      >
                        {stat.value}
                      </Typography>
                    </MotionBox>

                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: isMobile ? '1.2rem' : '1.4rem',
                        fontWeight: 600,
                        color: '#fff',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        mt: 3,
                        px: 2,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        willChange: 'transform',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Container>
      </Box>
    </LazyMotion>
  );
};

export default About; 