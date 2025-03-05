import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AdminLayout from './admin/components/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import ReviewsManagement from './admin/pages/ReviewsManagement';
import ServicesManagement from './admin/pages/ServicesManagement';
import Login from './admin/pages/Login';
import ProtectedRoute from './admin/components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Админ панель */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="reviews" element={<ReviewsManagement />} />
          <Route path="services" element={<ServicesManagement />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />

        {/* Основной сайт */}
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App; 