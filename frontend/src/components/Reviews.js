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
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { addReview, getApprovedReviews } from '../services/reviewsService';

const MotionPaper = motion(Paper);

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
    <LazyMotion features={domAnimation} strict>
      <Box
        id="reviews"
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
                  reviews.map((review, index) => (
                    <MotionPaper
                      key={review.id}
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
                        p: 3,
                        mb: 2,
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        willChange: 'transform, opacity',
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
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
                        {review.date}
                      </Typography>
                      <Typography sx={{ color: '#fff' }}>{review.text}</Typography>
                    </MotionPaper>
                  ))
                ) : (
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>
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
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                sx={{ mt: 2 }}
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
              </MotionPaper>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </LazyMotion>
  );
};

export default Reviews; 