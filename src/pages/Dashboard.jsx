import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  InputBase,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Switch
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import JobCard from '../components/jobPosting/JobCard';
import { JobContext } from '../contexts/JobContext';
import { CandidateContext } from '../contexts/CandidateContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  borderRadius: '24px',
  backgroundColor: '#ffffff',
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: 400,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
  },
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
  },
}));

const JobDashboard = () => {
  const { jobPostings, addJob,deleteJob } = useContext(JobContext);
  const { candidates } = useContext(CandidateContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobDescription, setNewJobDescription] = useState('');
  const [newJobLocation, setNewJobLocation] = useState('');
  const [newJobExperience, setNewJobExperience] = useState('');
  const [newJobApplicants, setNewJobApplicants] = useState('');
  const [newJobOpenings, setNewJobOpenings] = useState('');
  const [newJobActive, setNewJobActive] = useState(true);
  const jobsPerPage = 8;
  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };
  const handleDeleteJob = (jobId) => {
    deleteJob(jobId); // Call the deleteJob function from JobContext
    toast.success("Job deleted successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setNewJobTitle('');
    setNewJobDescription('');
    setNewJobLocation('');
    setNewJobExperience('');
    setNewJobApplicants('');
    setNewJobOpenings('');
    setNewJobActive(true);
  };

  const handleAddJob = () => {
    const newJob = {
      id: Date.now(),
      title: newJobTitle,
      description: newJobDescription,
      location: newJobLocation,
      experience: newJobExperience,
      applicants: newJobApplicants,
      openings: newJobOpenings,
      active: newJobActive,
      postedDate: new Date().toLocaleDateString(),
      candidates: [],
    };
    addJob(newJob);
    toast.success(`New job added on page ${Math.ceil((jobPostings.length + 1) / jobsPerPage)}`, {
      position: "bottom-center",
      autoClose: 3000,
    });
    handleCloseAddDialog();
  };

  const filteredJobs = jobPostings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: 'background.default', position: 'relative' }}>
      <ToastContainer />
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box display="flex" alignItems="center" gap={2} sx={{ flexDirection: { xs: 'column', sm: 'row' }, width: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: "'Montserrat', sans-serif",
              textAlign: { xs: 'center', sm: 'left' },
              mb: { xs: 2, sm: 0 },
            }}
          >
            Jobs
          </Typography>

          <SearchBox sx={{ width: { xs: '100%', sm: 'auto' } }}>
            <InputBase
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                ml: 1,
                flex: 1,
                fontFamily: "'Roboto', sans-serif",
                color: 'black',
                '&::placeholder': {
                  color: 'black',
                  opacity: 0.8,
                },
              }}
            />
            <SearchIcon sx={{ color: 'black' }} />
          </SearchBox>

          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              textTransform: 'none',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderColor: 'primary.main',
              },
              px: 2,
            }}
          >
            Filter
          </Button>
        </Box>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleOpenAddDialog}
          sx={{
            mt: { xs: 2, md: 0 },
            textTransform: 'none',
            boxShadow: '0px 4px 12px rgba(0, 123, 255, 0.3)',
            borderRadius: 2,
          }}
        >
          Add New Job
        </Button>
      </Box>

      <Grid container spacing={2}>
        {currentJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
            <JobCard
              job={job}
              onClick={() => handleJobClick(job.id)}
              onDelete={handleDeleteJob}
              candidates={candidates}
            />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
          sx={{
            '.MuiPaginationItem-root': {
              color: 'black',
              borderColor: 'blue',
            },
            '.Mui-selected': {
              backgroundColor: 'transparent',
              color: 'black',
              border: '1px solid blue',
            },
          }}
        />
      </Box>

      <Dialog fullWidth maxWidth="sm" open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle color="primary">Add New Job</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Job Title"
            fullWidth
            value={newJobTitle}
            onChange={(e) => setNewJobTitle(e.target.value)}
            InputProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            margin="dense"
            label="Job Description"
            fullWidth
            multiline
            rows={4}
            value={newJobDescription}
            onChange={(e) => setNewJobDescription(e.target.value)}
            InputProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            margin="dense"
            label="Location"
            fullWidth
            value={newJobLocation}
            onChange={(e) => setNewJobLocation(e.target.value)}
            InputProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            margin="dense"
            label="Experience"
            fullWidth
            value={newJobExperience}
            onChange={(e) => setNewJobExperience(e.target.value)}
            InputProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            margin="dense"
            label="Applicants"
            fullWidth
            value={newJobApplicants}
            onChange={(e) => setNewJobApplicants(e.target.value)}
            InputProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            margin="dense"
            label="Openings"
            fullWidth
            value={newJobOpenings}
            onChange={(e) => setNewJobOpenings(e.target.value)}
            InputProps={{
              style: { color: 'black' },
            }}
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Typography variant="body1" sx={{ fontWeight: 500, color: '#555' }}>Active:</Typography>
            <Switch
              checked={newJobActive}
              onChange={(e) => setNewJobActive(e.target.checked)}
              color="primary"
              sx={{ ml: 1 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="secondary">Cancel</Button>
          <Button onClick={handleAddJob} color="primary">Add Job</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default JobDashboard;
