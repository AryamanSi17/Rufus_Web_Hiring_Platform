import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ResumePreview = ({ resumeLink }) => (
  <Paper sx={{ padding: 2, height: '100%' }}>
    <Typography variant="h6" gutterBottom>
      Resume Preview
    </Typography>
    <Box
      component="iframe"
      src={resumeLink}
      width="100%"
      height="600px"
      style={{ border: 'none' }}
      title="Resume Preview"
    />
    <Typography variant="body2" sx={{ mt: 1 }}>
      <a href={resumeLink} target="_blank" rel="noopener noreferrer">
        View/Download Resume
      </a>
    </Typography>
  </Paper>
);

export default ResumePreview;

