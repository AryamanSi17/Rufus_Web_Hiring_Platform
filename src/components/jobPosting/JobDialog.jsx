import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, TextField, Paper, IconButton, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

const JobDetailDialog = ({ job, isOpen, onClose, isEditMode, toggleEditMode, onSave, editTitle, editDescription, setEditTitle, setEditDescription }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        '& .MuiDialog-paper': {
          padding: 3,
          borderRadius: 3,
          boxShadow: 10,
          backgroundColor: '#ffffff',
        },
      }}
    >
      <DialogTitle 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontWeight: 600, 
          color: 'primary.main',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Job Details
        <Box>
          <IconButton onClick={toggleEditMode} color="primary" sx={{ marginRight: 1 }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClose} sx={{ color: 'dark' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent dividers sx={{ backgroundColor: '#f9f9f9', padding: 3, borderRadius: 2 }}>

        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333333', mb: 1, fontFamily: "'Roboto', sans-serif" }}>
          Title:
        </Typography>
        {isEditMode ? (
          <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              style: { fontFamily: "'Roboto', sans-serif", color: '#333333' },
            }}
          />
        ) : (
          <Typography variant="body1" sx={{ color: '#333333', mb: 2, fontFamily: "'Roboto', sans-serif" }}>
            {editTitle}
          </Typography>
        )}
        
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333333', mb: 1, fontFamily: "'Roboto', sans-serif" }}>
          Description:
        </Typography>
        {isEditMode ? (
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              style: { fontFamily: "'Roboto', sans-serif", color: '#333333' },
            }}
          />
        ) : (
          <Typography variant="body1" sx={{ color: '#333333', mb: 2, fontFamily: "'Roboto', sans-serif" }}>
            {editDescription}
          </Typography>
        )}
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'primary.main', fontFamily: "'Roboto', sans-serif" }}>
          Candidates: {job.candidates.length} {job.candidates.length > 1 ? 'applied' : 'present'}
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            maxHeight: 150,
            overflowY: 'auto',
            padding: 1,
            backgroundColor: '#ffffff',
            color: '#333333',
            borderRadius: 2,
          }}
        >
          {job.candidates.map((candidate, index) => (
            <Box key={index} display="flex" alignItems="center" sx={{ padding: 0.5 }}>
              <PersonIcon fontSize="small" sx={{ color: 'primary.main', marginRight: 1 }} />
              <Typography variant="body2" sx={{ fontFamily: "'Roboto', sans-serif", color: '#333333' }}>
                {candidate}
              </Typography>
            </Box>
          ))}
        </Paper>
      </DialogContent>
      
      <DialogActions sx={{ padding: 2, justifyContent: 'space-between', backgroundColor: '#f5f5f5' }}>
        <Button onClick={onClose} color="secondary" variant="outlined" sx={{ fontFamily: "'Roboto', sans-serif" }}>
          Cancel
        </Button>
        <Button onClick={onSave} color="primary" variant="contained" disabled={!isEditMode} sx={{ fontFamily: "'Roboto', sans-serif" }}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobDetailDialog;
