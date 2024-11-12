import React, { useState, useContext } from 'react';
import {
  Typography,
  Box,
  Chip,
  IconButton,
  Checkbox,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { Description, UploadFile } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CandidateContext } from '../../contexts/CandidateContext';

const formatDate = (date) => {
  if (!date) return 'Invalid Date';
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const CandidateDetails = ({ candidate, index, onResumeUpload }) => {
  const { updateCandidate } = useContext(CandidateContext);

  // Initialize active status based on candidate data
  const [isActive, setIsActive] = useState(candidate.status === 'active');
  const [interviewDate, setInterviewDate] = useState(candidate.interviewDate);
  const [appliedDate, setAppliedDate] = useState(candidate.applicationDate);
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [resumeLink, setResumeLink] = useState(candidate.resumeLink || null); 

  // Handle toggle and persist to context
  const handleStatusToggle = () => {
    const newStatus = !isActive ? 'active' : 'inactive';
    setIsActive(!isActive); 

    updateCandidate({
      ...candidate,
      status: newStatus,
    });
  };

  const handleDateChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setResumeLink(url); // Update local state
      onResumeUpload(candidate.id, url); // Call parent handler to update globally
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 2,
        padding: 1,
        borderBottom: '1px solid #ddd',
        flexWrap: 'wrap'
      }}
    >
      <Box display="flex" alignItems="center" sx={{ minWidth: '150px', mr: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontWeight: 500 }}
          component={Link}
          to={`/candidate/${candidate.id || encodeURIComponent(candidate.name)}`} 
        >
          {index + 1}. {candidate.name}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', flex: 1 }}>
        <Checkbox
          checked={isActive}
          onChange={handleStatusToggle}
          color="success"
          sx={{ padding: 0 }}
        />
        <Chip
          label={isActive ? 'Active' : 'Inactive'}
          color="default"
          size="small"
          sx={{
            borderRadius: '12px',
            backgroundColor: 'transparent',
            color: isActive ? 'success.main' : 'text.secondary',
            border: '1px solid',
            borderColor: isActive ? 'success.main' : 'grey.400',
            minWidth: '75px',
            textAlign: 'center'
          }}
        />

        <Tooltip title="Edit interview date">
          <Typography
            variant="body2"
            onClick={() => setIsEditingDate(true)}
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              cursor: 'pointer',
              minWidth: '130px',
              textAlign: 'center'
            }}
          >
            Interview: {formatDate(interviewDate)}
          </Typography>
        </Tooltip>

        <Tooltip title="Edit applied date">
          <Typography
            variant="body2"
            onClick={() => setIsEditingDate(true)}
            sx={{
              color: 'primary.main',
              fontWeight: 500,
              cursor: 'pointer',
              minWidth: '130px',
              textAlign: 'center'
            }}
          >
            Applied: {formatDate(appliedDate)}
          </Typography>
        </Tooltip>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {resumeLink && (
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton color="primary" component="a" href={resumeLink} target="_blank">
                <Description />
              </IconButton>
              <Typography
                variant="body2"
                component="a"
                href={resumeLink}
                target="_blank"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                View Resume
              </Typography>
            </Box>
          )}

          <Button
            variant="outlined"
            component="label"
            startIcon={<UploadFile />}
            size="small"
            sx={{ whiteSpace: 'nowrap' }}
          >
            Upload New Resume
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={handleResumeUpload}
            />
          </Button>
        </Box>
      </Box>

      <Dialog open={isEditingDate} onClose={() => setIsEditingDate(false)}>
        <DialogTitle sx={{ color: 'black' }}>Edit Dates</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Interview Date"
              type="date"
              value={interviewDate || ''}
              onChange={handleDateChange(setInterviewDate)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ '& .MuiInputBase-root': { color: 'black' }, marginTop: 4 }}
            />
            <TextField
              label="Applied Date"
              type="date"
              value={appliedDate || ''}
              onChange={handleDateChange(setAppliedDate)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ '& .MuiInputBase-root': { color: 'black' } }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditingDate(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => setIsEditingDate(false)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CandidateDetails;
