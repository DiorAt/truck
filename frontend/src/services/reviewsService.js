const API_URL = 'http://localhost:5001/api/reviews';

// Получить все отзывы
export const getAllReviews = () => {
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  return reviews;
};

// Получить только одобренные отзывы
export const getApprovedReviews = () => {
  const reviews = getAllReviews();
  return reviews.filter(review => review.status === 'approved');
};

// Добавить новый отзыв
export const addReview = (review) => {
  const reviews = getAllReviews();
  const newReview = {
    ...review,
    id: Date.now().toString(),
    date: new Date().toLocaleDateString(),
    status: 'pending'
  };
  const updatedReviews = [...reviews, newReview];
  localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  return newReview;
};

// Обновить статус отзыва
export const updateReviewStatus = (reviewId, status) => {
  const reviews = getAllReviews();
  const updatedReviews = reviews.map(review => 
    review.id === reviewId ? { ...review, status } : review
  );
  localStorage.setItem('reviews', JSON.stringify(updatedReviews));
};

// Удалить отзыв
export const deleteReview = (reviewId) => {
  const reviews = getAllReviews();
  const updatedReviews = reviews.filter(review => review.id !== reviewId);
  localStorage.setItem('reviews', JSON.stringify(updatedReviews));
};

// Получение одобренных отзывов для публичной страницы
export const getApprovedReviewsForAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/approved`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching approved reviews:', error);
    return [];
  }
}; 