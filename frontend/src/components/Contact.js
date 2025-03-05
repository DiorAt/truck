import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MotionPaper = motion(Paper);

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Телефон',
      value: '+7 (812) 123-45-67',
      link: 'tel:+78121234567',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      value: 'info@evacuator-spb.ru',
      link: 'mailto:info@evacuator-spb.ru',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Адрес',
      value: 'г. Санкт-Петербург, ул. Примерная, 123',
      link: 'https://yandex.ru/maps/-/CDaVYH~',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Режим работы',
      value: 'Круглосуточно',
      link: null,
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Свяжитесь с нами
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MotionPaper
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              elevation={3}
              sx={{ p: 4 }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 4, fontWeight: 600 }}
              >
                Оставьте заявку
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Ваше имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Телефон"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Сообщение"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Отправить
                </Button>
              </form>
            </MotionPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <MotionPaper
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    elevation={2}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Button
                          href={info.link}
                          sx={{
                            p: 0,
                            textTransform: 'none',
                            color: 'text.primary',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          {info.value}
                        </Button>
                      ) : (
                        <Typography>{info.value}</Typography>
                      )}
                    </Box>
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

export default Contact; 