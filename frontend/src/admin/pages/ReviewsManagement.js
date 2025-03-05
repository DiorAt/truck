import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Rating,
  Chip,
  Stack,
  Alert,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllReviews, updateReviewStatus, deleteReview } from '../../services/reviewsService';

const ReviewsManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    loadReviews();
    // Обновляем список отзывов каждые 5 секунд
    const interval = setInterval(loadReviews, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadReviews = () => {
    const allReviews = getAllReviews();
    setReviews(allReviews);
  };

  const handleApprove = (reviewId) => {
    updateReviewStatus(reviewId, 'approved');
    setSuccessMessage('Отзыв одобрен');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    loadReviews();
  };

  const handleReject = (reviewId) => {
    updateReviewStatus(reviewId, 'rejected');
    setSuccessMessage('Отзыв отклонен');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    loadReviews();
  };

  const handleDelete = (reviewId) => {
    deleteReview(reviewId);
    setSuccessMessage('Отзыв удален');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    loadReviews();
  };

  const filteredReviews = reviews.filter(review => 
    review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'success';
      case 'rejected':
        return 'error';
      default:
        return 'warning';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
        return 'Одобрен';
      case 'rejected':
        return 'Отклонен';
      default:
        return 'На модерации';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
          Управление отзывами
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Поиск по имени или тексту отзыва..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ 
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            },
            '& .MuiInputBase-input': {
              color: '#fff',
            },
            '& .MuiInputAdornment-root': {
              color: '#fff',
            },
          }}
        />

        <TableContainer 
          component={Paper}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '& .MuiTableCell-head': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontWeight: 'bold',
            },
            '& .MuiTableCell-body': {
              color: '#fff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell>Дата</TableCell>
                <TableCell>Оценка</TableCell>
                <TableCell>Отзыв</TableCell>
                <TableCell>Статус</TableCell>
                <TableCell align="right">Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredReviews.map((review) => (
                <TableRow 
                  key={review.id}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <TableCell>{review.name}</TableCell>
                  <TableCell>{review.date}</TableCell>
                  <TableCell>
                    <Rating 
                      value={review.rating} 
                      readOnly 
                      size="small"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#3B82F6',
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: '400px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    {review.text}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusText(review.status)}
                      color={getStatusColor(review.status)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      {review.status === 'pending' && (
                        <>
                          <IconButton
                            color="success"
                            onClick={() => handleApprove(review.id)}
                            size="small"
                            sx={{ 
                              backgroundColor: 'rgba(46, 125, 50, 0.1)',
                              '&:hover': {
                                backgroundColor: 'rgba(46, 125, 50, 0.2)',
                              },
                            }}
                          >
                            <CheckIcon />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => handleReject(review.id)}
                            size="small"
                            sx={{ 
                              backgroundColor: 'rgba(211, 47, 47, 0.1)',
                              '&:hover': {
                                backgroundColor: 'rgba(211, 47, 47, 0.2)',
                              },
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </>
                      )}
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(review.id)}
                        size="small"
                        sx={{ 
                          backgroundColor: 'rgba(211, 47, 47, 0.1)',
                          '&:hover': {
                            backgroundColor: 'rgba(211, 47, 47, 0.2)',
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {filteredReviews.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Отзывов не найдено
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

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
                {successMessage}
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
    </Box>
  );
};

export default ReviewsManagement; 