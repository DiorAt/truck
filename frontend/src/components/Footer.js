import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MotionBox = motion(Box);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 90% 90%, rgba(59, 130, 246, 0.1), transparent 40%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                Контакты
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Link
                  href="tel:+78121234567"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    mb: 1,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <PhoneIcon sx={{ mr: 1 }} />
                  8 (812) 123-45-67
                </Link>
                <Link
                  href="mailto:info@evakuator-spb.ru"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    mb: 1,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <EmailIcon sx={{ mr: 1 }} />
                  info@evakuator-spb.ru
                </Link>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.secondary',
                  }}
                >
                  <LocationOnIcon sx={{ mr: 1 }} />
                  Санкт-Петербург
                </Box>
              </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                Мессенджеры
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://t.me/evakuator_spb"
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: '#0088cc',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <TelegramIcon />
                </IconButton>
                <IconButton
                  href="https://wa.me/78121234567"
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: '#25D366',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #60A5FA, #34D399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                Режим работы
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                Работаем круглосуточно
              </Typography>
              <Typography color="text.secondary">
                Без выходных и праздников
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography color="text.secondary" variant="body2">
            © {new Date().getFullYear()} Эвакуатор СПб. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 