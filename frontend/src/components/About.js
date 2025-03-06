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

const MotionBox = motion(Box);
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <LazyMotion features={domAnimation} strict>
      <Box
        id="about"
        sx={{
          py: 8,
          position: 'relative',
          background: '#0A1929',
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
            О нашей компании
          </Typography>

          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <MotionPaper
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
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
                    height: isMobile ? 'auto' : '280px',
                    minHeight: isMobile ? '200px' : 'auto',
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
                    p: isMobile ? 3 : 4,
                    willChange: 'transform, opacity',
                  }}
                >
                  <MotionBox
                    initial={{ scale: 0.9 }}
                    animate={{
                      scale: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                    }}
                    sx={{
                      width: isMobile ? '80px' : '120px',
                      height: isMobile ? '80px' : '120px',
                      background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                      borderRadius: '16px',
                      m: isMobile ? '20px auto' : '30px auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(96, 165, 250, 0.3)',
                      willChange: 'transform',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#fff',
                        fontSize: isMobile ? '2rem' : '2.5rem',
                        fontWeight: 'bold',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                      }}
                    >
                      {stat.value}
                    </Typography>
                  </MotionBox>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: isMobile ? '1.1rem' : '1.25rem',
                      fontWeight: 600,
                      color: '#fff',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      mt: 2,
                      px: 3,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {stat.label}
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

export default About; 