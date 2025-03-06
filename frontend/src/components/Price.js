import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { getServices } from '../services/siteDataService';

const Price = () => {
  const [services, setServices] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Загружаем услуги из localStorage
    setServices(getServices());
  }, []);

  return (
    <Box
      id="prices"
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
          Цены на услуги
        </Typography>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <motion.div
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: isMobile ? 'none' : 'translateY(-8px)',
                      '& .price-tag': {
                        transform: 'translateY(0)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    className="price-tag"
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      color: '#60A5FA',
                      mb: 2,
                      transform: isMobile ? 'none' : 'translateY(20px)',
                      opacity: isMobile ? 1 : 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {service.price} ₽
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, flex: 1 }}
                  >
                    {service.description}
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    href="tel:+77777777777"
                    sx={{
                      mt: 'auto',
                      background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                      },
                    }}
                  >
                    Заказать
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Price; 