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
  Stack,
  Alert,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  Edit as EditIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { getServices, updateService } from '../../services/siteDataService';

const ServicesManagement = () => {
  const [services, setServices] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    const allServices = getServices();
    setServices(allServices);
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setEditingService(null);
  };

  const handleSave = () => {
    if (editingService) {
      updateService(editingService.id, editingService);
      setOpenDialog(false);
      setEditingService(null);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      loadServices();
    }
  };

  const handleChange = (e) => {
    setEditingService({
      ...editingService,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
          Управление услугами
        </Typography>

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
                <TableCell>Название услуги</TableCell>
                <TableCell>Цена</TableCell>
                <TableCell>Описание</TableCell>
                <TableCell align="right">Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service) => (
                <TableRow 
                  key={service.id}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <TableCell>{service.title}</TableCell>
                  <TableCell>{service.price} ₽</TableCell>
                  <TableCell sx={{ maxWidth: '400px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    {service.description}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => handleEdit(service)}
                      size="small"
                      sx={{ 
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        },
                        color: '#3B82F6',
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog 
          open={openDialog} 
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: '#1E293B',
              color: '#fff',
              minWidth: '500px',
            },
          }}
        >
          <DialogTitle sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            Редактирование услуги
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <Stack spacing={3}>
              <TextField
                label="Название услуги"
                name="title"
                value={editingService?.title || ''}
                onChange={handleChange}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
              <TextField
                label="Цена"
                name="price"
                value={editingService?.price || ''}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  endAdornment: <InputAdornment position="end" sx={{ color: '#fff' }}>₽</InputAdornment>,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
              <TextField
                label="Описание"
                name="description"
                value={editingService?.description || ''}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', p: 2 }}>
            <Button 
              onClick={handleClose}
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Отмена
            </Button>
            <Button 
              onClick={handleSave}
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                },
              }}
            >
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>

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
                Услуга успешно обновлена
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
    </Box>
  );
};

export default ServicesManagement; 