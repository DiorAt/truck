import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { getSiteData, updateContacts } from '../../services/siteDataService';

const Dashboard = () => {
  const [contacts, setContacts] = useState({
    phone: '',
    email: '',
    address: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const siteData = getSiteData();
    setContacts(siteData.contacts);
  }, []);

  const handleChange = (e) => {
    setContacts({
      ...contacts,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContacts(contacts);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Управление контактными данными
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 3,
          mt: 3,
          backgroundColor: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Stack spacing={3}>
          <TextField
            label="Номер телефона"
            name="phone"
            value={contacts.phone}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Email адрес"
            name="email"
            type="email"
            value={contacts.email}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Физический адрес"
            name="address"
            value={contacts.address}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={2}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Сохранить изменения
          </Button>
        </Stack>
      </Paper>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Alert severity="success" sx={{ mt: 2 }}>
              Контактные данные успешно обновлены
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Dashboard; 