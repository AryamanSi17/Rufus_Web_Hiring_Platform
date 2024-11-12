import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Avatar, Divider, Chip, Button, Grid } from '@mui/material';
import { candidates } from '../../utils/constants';
import ResumePreview from './ResumePreview';

const CandidateProfile = () => {
  const { name } = useParams();
  const candidate = candidates.find((c) => c.name === name);

  if (!candidate) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">Candidate not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 4 }}>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Avatar
                src={candidate.profilePhoto}
                alt={`${candidate.name}'s photo`}
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="h4" gutterBottom color="black">
                {candidate.name}'s Profile
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box mb={2}>
              <Typography variant="h6" gutterBottom color="primary">
                Contact Details:
              </Typography>
              <Typography variant="body1">{candidate.contact}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box mb={2}>
              <Typography variant="h6" gutterBottom color="black">
                Skills:
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {candidate.skills.map((skill) => (
                  <Chip key={skill} label={skill} color="primary" variant="outlined" />
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box mb={2}>
              <Typography variant="h6" gutterBottom color="primary">
                Experience:
              </Typography>
              <Typography variant="body1">{candidate.experience}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <ResumePreview resumeLink={candidate.resumeLink} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateProfile;
