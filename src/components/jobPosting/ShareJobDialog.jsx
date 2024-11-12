import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField, Box } from '@mui/material';

const ShareJobDialog = ({ open, onClose, job }) => {
  const [showDialogContent, setShowDialogContent] = useState(false);

  // Default message format
  const draftMessage = `🚀 ENTNT is hiring! 🚀\n\nPosition: ${job.title}\nLocation: ${job.location}\nExperience: ${job.experience}\n\nApply now and join our team!`;

  // Show the dialog content after the animation completes
  const handleAnimationComplete = () => {
    setTimeout(() => setShowDialogContent(true), 2000); // Adjust time to match animation duration
  };

  useEffect(() => {
    if (open) {
      setShowDialogContent(false); // Reset content visibility when the dialog opens
      handleAnimationComplete(); // Trigger the content display timer
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        {!showDialogContent ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* Lottie Animation using dotlottie-player */}
            <dotlottie-player
              src="https://lottie.host/901c284e-4fc3-48c0-9134-43664b6ca2eb/m2nRJrS9FJ.json"
              background="transparent"
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            ></dotlottie-player>
          </Box>
        ) : (
          <>
            <DialogTitle sx={{ color: 'black' }}>Share this Job</DialogTitle>
            <DialogContent>
              <Typography variant="body1" gutterBottom sx={{ color: 'black' }}>
                Draft your message for sharing:
              </Typography>
              <TextField
                multiline
                fullWidth
                minRows={4}
                value={draftMessage}
                sx={{
                  mt: 2,
                  color: 'black', 
                  '& .MuiInputBase-root': { color: 'black' }, // Typing text color
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' }, // Border color
                  '& .MuiInputBase-input::placeholder': { color: 'black' }, // Placeholder color
                }}
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="secondary" sx={{ color: 'black' }}>
                Cancel
              </Button>
              <Button color="primary" sx={{ color: 'black' }} onClick={() => {/* Add share logic here */}}>
                Share
              </Button>
            </DialogActions>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ShareJobDialog;
