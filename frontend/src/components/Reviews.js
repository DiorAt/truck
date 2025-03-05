import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Rating,
  Button,
  Modal,
  TextField,
  Stack,
  Backdrop,
  Alert,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { addReview, getApprovedReviews } from '../services/reviewsService';

const Reviews = () => {
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    loadReviews();
    // Обновляем отзывы каждые 5 секунд
    const interval = setInterval(loadReviews, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadReviews = () => {
    const approvedReviews = getApprovedReviews();
    setReviews(approvedReviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Добавляем новый отзыв через сервис
    addReview({
      name: formData.name,
      rating: formData.rating,
      text: formData.text,
    });

    // Очищаем форму
    setFormData({
      name: '',
      rating: 5,
      text: '',
    });
    
    // Закрываем модальное окно
    handleClose();
    
    // Показываем сообщение об успехе
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({
      ...formData,
      rating: newValue,
    });
  };

  return (
    <Box
      id="reviews"
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
          Отзывы клиентов
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                startIcon={<AddCommentIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                  },
                }}
              >
                Оставить отзыв
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={2}>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paper 
                      sx={{ 
                        p: 3,
                        backgroundColor: 'rgba(30, 41, 59, 0.8)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(148, 163, 184, 0.1)',
                      }}
                    >
                      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                        {review.name}
                      </Typography>
                      <Rating 
                        value={review.rating} 
                        readOnly 
                        size="small" 
                        sx={{ 
                          mb: 1,
                          '& .MuiRating-iconFilled': {
                            color: '#3B82F6',
                          },
                        }} 
                      />
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {review.date}
                      </Typography>
                      <Typography sx={{ color: '#fff' }}>{review.text}</Typography>
                    </Paper>
                  </motion.div>
                ))
              ) : (
                <Typography color="text.secondary" align="center">
                  Пока нет отзывов. Будьте первым!
                </Typography>
              )}
            </Stack>
          </Grid>
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 600 },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}>
            <Typography variant="h5" gutterBottom>
              Оставить отзыв
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label="Ваше имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                
                <Box>
                  <Typography component="legend" gutterBottom>
                    Оценка
                  </Typography>
                  <Rating
                    name="rating"
                    value={formData.rating}
                    onChange={handleRatingChange}
                    size="large"
                  />
                </Box>

                <TextField
                  label="Ваш отзыв"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                    },
                  }}
                >
                  Отправить отзыв
                </Button>
              </Stack>
            </form>
          </Box>
        </Modal>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 9999
              }}
            >
              <Alert 
                severity="success"
                sx={{
                  backgroundColor: 'rgba(46, 125, 50, 0.9)',
                  color: '#fff',
                  '& .MuiAlert-icon': {
                    color: '#fff',
                  },
                }}
              >
                Спасибо за ваш отзыв! Он будет опубликован после проверки модератором.
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Reviews; 