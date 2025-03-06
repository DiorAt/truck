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
import { motion } from 'framer-motion';
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
    <Box
      id="about"
      sx={{
        py: 8,
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
            background: 'linear-gradient(135deg, #60A5FA, #34D399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          О нашей компании
        </Typography>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                sx={{
                  height: isMobile ? 'auto' : '280px',
                  minHeight: isMobile ? '200px' : 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  background: '#0A1929',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)',
                  p: isMobile ? 3 : 4,
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
                    width: isMobile ? '80px' : '120px',
                    height: isMobile ? '80px' : '120px',
                    background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                    borderRadius: '12px',
                    m: isMobile ? '20px auto' : '30px auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(96, 165, 250, 0.3)',
                  }}
                >
                  <Box
                    sx={{
                      color: '#fff',
                      fontSize: isMobile ? '2rem' : '2.5rem',
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
                    fontSize: isMobile ? '1rem' : '1.25rem',
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
      </Container>
    </Box>
  );
};

export default About; 