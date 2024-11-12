import React, { useState, useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import { AssessmentContext } from '../../contexts/AssessmentContext';
import { CandidateContext } from '../../contexts/CandidateContext';
import QuestionForm from './QuestionForm';
import {
  MenuItem,
  Select,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import { Save, Assignment, ExpandMore, Edit, Delete, Send } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AssessmentForm = () => {
  const { jobPostings } = useContext(JobContext);
  const { assessments, addAssessment } = useContext(AssessmentContext);
  const { candidates } = useContext(CandidateContext); // Use CandidateContext to fetch candidates
  
  const [selectedJobId, setSelectedJobId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleJobChange = (event) => {
    setSelectedJobId(event.target.value);
  };

  const addQuestion = (question) => {
    if (editingIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[editingIndex] = question;
      setQuestions(updatedQuestions);
      setEditingIndex(null);
      toast.success('Question updated!', { position: 'top-right' });
    } else {
      setQuestions((prevQuestions) => [...prevQuestions, question]);
      toast.success('Question added!', { position: 'top-right' });
    }
  };

  const handleEditQuestion = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
    toast.info('Question deleted.', { position: 'top-right' });
  };

  const handleSaveAssessment = () => {
    const job = jobPostings.find((job) => job.id === parseInt(selectedJobId));
    if (job && questions.length > 0) {
      addAssessment({
        jobId: selectedJobId,
        jobTitle: job.title,
        questions,
      });
      setSelectedJobId('');
      setQuestions([]);
      toast.success('Assessment saved successfully!', { position: 'top-right' });
    } else {
      toast.error('Please select a job and add at least one question.', { position: 'top-right' });
    }
  };

  // Function to send assessments to candidates
  const handleSendAssessment = (jobId) => {
    const candidateCount = candidates.filter(candidate => candidate.jobId === jobId).length;
    toast.success(`Assessment sent to ${candidateCount} candidates`, { position: 'top-right' });
  };

  return (
    <Box display="flex" justifyContent="center" gap={4} sx={{ mt: 4, p: 3 }}>
      <Box sx={{ maxWidth: 600, width: '100%' }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
          Assessment Creation Portal
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
          Create assessments by selecting a job and adding multiple-choice questions.
        </Typography>

        <Card sx={{ mb: 3, boxShadow: 5, borderRadius: 2, backgroundColor: 'background.paper' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
              Step 1: Select Job Position
            </Typography>
            <Select
              fullWidth
              value={selectedJobId}
              onChange={handleJobChange}
              displayEmpty
              sx={{
                mb: 3,
                '& .MuiSelect-select': {
                  color: 'black',
                  fontWeight: 'bold',
                },
              }}
            >
              <MenuItem value="" disabled>Select a Job Position</MenuItem>
              {jobPostings.map((job) => (
                <MenuItem key={job.id} value={job.id}>{job.title}</MenuItem>
              ))}
            </Select>

            {selectedJobId && (
              <>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                  Step 2: Add Questions
                </Typography>
                <QuestionForm addQuestion={addQuestion} question={questions[editingIndex]} />
              </>
            )}

            {questions.length > 0 && (
              <Box sx={{ mt: 3 }}>
                <Divider sx={{ mb: 3 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'text.secondary' }}>Questions Added</Typography>
                {questions.map((question, index) => (
                  <Card key={index} sx={{ mb: 2, boxShadow: 2, backgroundColor: 'background.paper', borderRadius: 2 }}>
                    <CardContent>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {index + 1}. {question.questionText}
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {question.options.map((option, oIndex) => (
                          <li key={oIndex} style={{ color: oIndex === question.correctOption ? 'green' : 'black' }}>
                            {option} {oIndex === question.correctOption && '(Correct)'}
                          </li>
                        ))}
                      </ul>
                      <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton onClick={() => handleEditQuestion(index)} color="primary">
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteQuestion(index)} color="error">
                          <Delete />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            )}

            <Box mt={3} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveAssessment}
                startIcon={<Save />}
                disabled={!selectedJobId || questions.length === 0}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Save Assessment
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" sx={{ mb: 3, color: 'primary.main', fontWeight: 'bold' }}>Your Saved Assessments</Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
          View, manage, or expand each saved assessment to see the list of questions associated with each job position.
        </Typography>
        {assessments.map((assessment, index) => {
          const candidateCount = candidates.filter(candidate => candidate.jobId === assessment.jobId).length;
          return (
            <Accordion key={index} sx={{ mb: 2, boxShadow: 5, borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box display="flex" alignItems="center">
                  <Assignment sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                    {assessment.jobTitle} Assessment
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: 'background.default', p: 2 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Candidates: {candidateCount}
                </Typography>
                {assessment.questions.map((question, qIndex) => (
                  <Box key={qIndex} sx={{ mt: 2, p: 1, borderRadius: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                      {qIndex + 1}. {question.questionText}
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 2, mt: 1, color: 'text.secondary' }}>Options:</Typography>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {question.options.map((option, oIndex) => (
                        <li key={oIndex} style={{ color: oIndex === question.correctOption ? 'green' : 'black' }}>
                          {option} {oIndex === question.correctOption && '(Correct)'}
                        </li>
                      ))}
                    </ul>
                  </Box>
                ))}
                <Box textAlign="center" mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSendAssessment(assessment.jobId)}
                    startIcon={<Send />}
                  >
                    Send to Candidates
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default AssessmentForm;
