import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { AdminPanelSettings, CheckCircleOutline, WorkOutline } from '@mui/icons-material';

const IntroDialog = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold' }}>
      <AdminPanelSettings color="primary" fontSize="large" />
      Welcome to Rufus - Job Management Platform
    </DialogTitle>
    <DialogContent sx={{ padding: '20px 24px' }}>
      <Typography variant="body1" gutterBottom sx={{ mb: 2, color: 'text.secondary', fontWeight: 500 }}>
        Hello, Admin! You’re currently logged in as <strong>Admin</strong> to explore the platform with ease.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
        Quick Notes:
      </Typography>
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <CheckCircleOutline color="action" />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A default set of <strong>14 candidates</strong> is available for testing and demonstration purposes.
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <WorkOutline color="action" />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Sample job postings are already created for you to manage and explore the features.
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 500 }}>
        Use the navigation bar to explore sections, add job postings, and manage assessments as required.
      </Typography>
    </DialogContent>
    <DialogActions sx={{ padding: '16px' }}>
      <Button onClick={onClose} variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>Got It</Button>
    </DialogActions>
  </Dialog>
);

export default IntroDialog;
