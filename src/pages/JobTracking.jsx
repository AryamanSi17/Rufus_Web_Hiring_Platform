import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Card, CardContent, IconButton, Stack, Divider, Button, Chip, Switch, InputAdornment, TextField } from '@mui/material';
import { Facebook, LinkedIn, X, School, Work, Build, Star, AttachMoney, Timelapse, Delete as DeleteIcon, Search, UploadFile } from '@mui/icons-material';
import { JobContext } from '../contexts/JobContext';
import { candidates as globalCandidates } from '../utils/constants';
import CandidateDetails from '../components/candidate/CandidateDetails';
import EditJobDialog from '../components/jobPosting/EditJobDialog';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShareJobDialog from '../components/jobPosting/ShareJobDialog';
const JobTracking = () => {
  const { jobId } = useParams();
  const { jobPostings, updateJob } = useContext(JobContext);

  // Find the job with the given ID
  const job = jobPostings.find((job) => job.id === parseInt(jobId));

  // Destructure job properties for cleaner code
  const {
    title,
    location = 'N/A',
    experience = 'N/A',
    description = 'No description available.',
    responsibilities = [],
    keySkills = [],
    salaryRange = 'N/A',
    jobType = 'N/A',
    education = 'UG: Any Graduate, PG: Any Postgraduate',
    active = true,
    postedDate = 'N/A' 
  } = job || {};

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [isJobActive, setIsJobActive] = useState(active);
  const [jobCandidates, setJobCandidates] = useState(globalCandidates);

  useEffect(() => {
    console.log('Job data:', job); // Debugging line
  }, [job]);

  if (!job) {
    return <Typography variant="h6">Job not found</Typography>;
  }

  // Update job details and show success toast
  const handleJobUpdate = (updatedFields) => {
    updateJob(job.id, updatedFields);
    toast.success("Job details saved successfully", { position: "top-right" });
  };

  // Toggle job status and update the job
  const handleStatusToggle = () => {
    const updatedStatus = !isJobActive;
    setIsJobActive(updatedStatus);
    handleJobUpdate({ active: updatedStatus });
  };

  // Delete candidate from the list and show info toast
  const handleDeleteCandidate = (candidateName) => {
    setJobCandidates(prevCandidates =>
      prevCandidates.filter(candidate => candidate.name !== candidateName)
    );
    toast.info("Candidate deleted successfully", { position: "top-right" });
  };
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCandidates = jobCandidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  const handleOpenShareDialog = () => {
    setShareDialogOpen(true);
  };

  const handleCloseShareDialog = () => {
    setShareDialogOpen(false);
  };

  const onResumeUpload = (candidateId, newResumeLink) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, resumeLink: newResumeLink }
          : candidate
      )
    );
  };
  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          backgroundColor: '#f7f7f7',
          borderRadius: 2,
          boxShadow: 2,
          padding: { xs: 2, sm: 3 },
        }}
      >
        <Card sx={{ backgroundColor: '#ffffff', boxShadow: 3, mb: 3 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>{title}</Typography>
              <Button variant="contained" color="primary" size="small" onClick={() => setOpenEditDialog(true)}>
                Edit Job
              </Button>
            </Box>

            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
              Location: <span style={{ fontWeight: 700 }}>{location}</span> | Experience: <span style={{ fontWeight: 700 }}>{experience}</span>
            </Typography>

            <Box display="flex" gap={4} alignItems="center" sx={{ mb: 3 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="body2" sx={{ fontWeight: 500, color: '#555' }}>Applicants:</Typography>
                <Box sx={{
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '2px solid #ffb300',
                  color: '#ffb300',
                  fontWeight: 'bold',
                }}>{jobCandidates.length}</Box>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="body2" sx={{ fontWeight: 500, color: '#555' }}>Status:</Typography>
                <Switch
                  checked={isJobActive}
                  onChange={handleStatusToggle}
                  color="primary"
                />
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: isJobActive ? '#388e3c' : '#d32f2f' }}>
                  {isJobActive ? 'Active' : 'Inactive'}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box display="flex" alignItems="center" mb={1}>
              <Star sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.secondary' }}>Job Highlights</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#333', mb: 3 }}>
              {description}
            </Typography>

            <Box display="flex" alignItems="center" mb={1}>
              <Work sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.secondary' }}>Responsibilities</Typography>
            </Box>
            <Box component="ul" sx={{ color: '#333', pl: 3, mb: 3 }}>
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <Build sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.secondary' }}>Key Skills</Typography>
            </Box>
            <Box display="flex" gap={1} flexWrap="wrap" mb={3}>
              {keySkills.map((skill) => (
                <Chip key={skill} label={skill} sx={{ backgroundColor: '#e8f5e9', color: '#388e3c' }} />
              ))}
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <AttachMoney sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.secondary' }}>Salary Range</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#333', mb: 3 }}>
              {salaryRange}
            </Typography>

            <Box display="flex" alignItems="center" mb={1}>
              <Timelapse sx={{ color: 'primary.main', mr: 1 }} />
              <Chip
                label={jobType}
                sx={{
                  border: '1px solid #388e3c',
                  backgroundColor: '#ffffff',
                  color: '#388e3c',
                  fontWeight: 'bold',
                }}
              />
            </Box>
            <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#555' }}>Posted on:</Typography>
              <Chip label={postedDate} color="default" sx={{ ml: 1 }} />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box display="flex" alignItems="center" mb={1}>
              <School sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.secondary' }}>Education</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#333', mb: 2 }}>
              {education}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: '#ffffff', boxShadow: 3, mb: 3 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                Candidates who applied ({filteredCandidates.length}):
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="black" />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    '& .MuiOutlinedInput-input': { color: 'black' },
                    '& .MuiInputBase-input::placeholder': { color: 'black' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.23)' },
                  },
                }}
                sx={{ width: '250px', height: '50px', borderRadius: '20px', ml: 2 }}
              />
            </Box>

            <Box sx={{ maxHeight: 300, overflowY: 'auto' }}>
              <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
                {filteredCandidates.map((candidate, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    component="li"
                    sx={{ mb: 1, p: 1, backgroundColor: '#f9f9f9', borderRadius: 1 }}
                  >
                    

                    {/* Candidate Details */}
                    <Box display="flex" alignItems="center" flex="3">
                      <CandidateDetails key={candidate.id} candidate={candidate} index={index}  onResumeUpload={onResumeUpload}/>
                    </Box>

                    {/* Delete Button */}
                    <Box display="flex" alignItems="center" justifyContent="flex-end" flex="1">
                      <IconButton
                        onClick={() => handleDeleteCandidate(candidate.name)}
                        color="error"
                        size="small"
                        sx={{ ml: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </ul>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: '#ffffff', boxShadow: 3, mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
              Share this Job
            </Typography>
            <Stack direction="row" spacing={1} mb={2}>
              <IconButton color="primary" onClick={handleOpenShareDialog}>
                <Facebook />
              </IconButton>
              <IconButton color="primary" onClick={handleOpenShareDialog}>
                <X />
              </IconButton>
              <IconButton color="primary" onClick={handleOpenShareDialog}>
                <LinkedIn />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      {job && (
        <ShareJobDialog
          open={shareDialogOpen}
          onClose={handleCloseShareDialog}
          job={job}
        />
      )}

      <ToastContainer />
      <EditJobDialog open={openEditDialog} onClose={() => setOpenEditDialog(false)} job={job} onSave={handleJobUpdate} />
    </Box>
  );
};

export default JobTracking;
