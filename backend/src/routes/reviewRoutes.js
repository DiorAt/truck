import express from 'express';
import {
  getAllReviews,
  getApprovedReviews,
  addReview,
  updateReviewStatus,
  deleteReview
} from '../controllers/reviewController.js';

const router = express.Router();

// Публичные маршруты
router.get('/approved', getApprovedReviews);
router.post('/', addReview);

// Маршруты для админ-панели
router.get('/', getAllReviews);
router.patch('/:id/status', updateReviewStatus);
router.delete('/:id', deleteReview);

export default router; 