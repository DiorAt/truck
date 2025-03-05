import Review from '../models/Review.js';

// Получить все отзывы (для админ-панели)
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Получить только одобренные отзывы (для публичной страницы)
export const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: 'approved' }).sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Добавить новый отзыв
export const addReview = async (req, res) => {
  const review = new Review({
    name: req.body.name,
    rating: req.body.rating,
    text: req.body.text,
    avatar: req.body.name.charAt(0).toUpperCase()
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Обновить статус отзыва
export const updateReviewStatus = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Отзыв не найден' });
    }

    review.status = req.body.status;
    const updatedReview = await review.save();
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Удалить отзыв
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Отзыв не найден' });
    }

    await review.deleteOne();
    res.json({ message: 'Отзыв успешно удален' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 