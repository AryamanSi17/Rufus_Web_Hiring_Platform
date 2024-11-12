import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Autocomplete, Slide, IconButton, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const keySkillsOptions = ["JavaScript", "React", "Node.js", "Python", "SQL", "Java", "CSS", "HTML", "Photoshop", "Data Analysis"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      style={{
        transitionDuration: '0.5s',
        transformOrigin: 'bottom center',
        transform: props.in ? 'scaleY(1)' : 'scaleY(0.7)',
      }}
    />
  );
});

const EditJobDialog = ({ open, onClose, job, onSave }) => {
  const [title, setTitle] = useState(job?.title || '');
  const [location, setLocation] = useState(job?.location || '');
  const [experience, setExperience] = useState(job?.experience || '');
  const [salaryRange, setSalaryRange] = useState(job?.salaryRange || '');
  const [jobType, setJobType] = useState(job?.jobType || '');
  const [skills, setSkills] = useState(job?.keySkills || []);
  const [responsibilities, setResponsibilities] = useState(job?.responsibilities?.join("\n") || '');
  const [education, setEducation] = useState(job?.education || '');

  useEffect(() => {
    if (open) toast.info("Editing job details", { position: "top-right" });
  }, [open]);

  const handleSave = () => {
    const updatedJob = {
      title,
      location,
      experience,
      salaryRange,
      jobType,
      keySkills: skills,
      responsibilities: responsibilities.split("\n").map((res) => res.trim()),
      education,
    };
    onSave(updatedJob);
    onClose();
  };

  const handleCancel = () => {
    toast.warn("Edit job cancelled", { position: "top-right" });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: 'auto',
        },
      }}
    >
      <DialogTitle sx={{ color: '#333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Edit Job Details
        <IconButton onClick={handleCancel} sx={{ color: '#333' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ backgroundColor: '#fff', color: '#333' }}>
        <TextField
          label="Job Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
        <TextField
          label="Location"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
        <TextField
          label="Experience"
          fullWidth
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
        <TextField
          label="Salary Range"
          fullWidth
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
        <TextField
          label="Job Type"
          fullWidth
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
        <TextField
          label="Job Highlights"
          fullWidth
          multiline
          rows={2}
          value={job?.description || ''}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
        <TextField
          label="Responsibilities (line-separated)"
          fullWidth
          multiline
          rows={4}
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
        <Autocomplete
          multiple
          options={keySkillsOptions}
          value={skills}
          onChange={(e, value) => setSkills(value)}
          filterSelectedOptions
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                sx={{ backgroundColor: '#4caf50', color: '#fff' }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Key Skills"
              placeholder="Type to add skills"
              margin="normal"
              sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
            />
          )}
        />
        <TextField
          label="Education"
          fullWidth
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          margin="normal"
          sx={{ label: { color: '#333' }, '& .MuiInputBase-input': { color: '#333' } }}
        />
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditJobDialog;
