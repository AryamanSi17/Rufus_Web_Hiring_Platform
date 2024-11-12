import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionForm = ({ addQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState([]);
  const [optionText, setOptionText] = useState('');
  const [correctOption, setCorrectOption] = useState(null);

  const handleAddOption = () => {
    if (optionText) {
      setOptions([...options, optionText]);
      setOptionText('');
    }
  };

  const handleSetCorrectOption = (index) => {
    setCorrectOption(index);
  };

  const handleAddQuestion = () => {
    if (!questionText || options.length === 0 || correctOption === null) {
      toast.error("Please provide question text, at least one option, and select a correct answer.", { position: "top-right" });
      return;
    }

    addQuestion({
      questionText,
      options,
      correctOption,
    });

    setQuestionText('');
    setOptions([]);
    setCorrectOption(null);
  };

  const handleDeleteOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
    if (index === correctOption) setCorrectOption(null);
  };

  return (
    <Card sx={{ mb: 3, boxShadow: 4, borderRadius: 2, backgroundColor: '#fafafa' }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, color: '#333' }}>Add a New Question</Typography>

        <TextField
          fullWidth
          label="Question Text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          sx={{ mb: 2, '& .MuiInputBase-input': { color: '#333' }, '& .MuiFormLabel-root': { color: '#555' } }}
        />

        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Option"
            value={optionText}
            onChange={(e) => setOptionText(e.target.value)}
            sx={{ mb: 1, '& .MuiInputBase-input': { color: '#333' }, '& .MuiFormLabel-root': { color: '#555' } }}
          />
          <Button variant="contained" onClick={handleAddOption} sx={{ mb: 2, backgroundColor: '#4caf50', color: '#fff' }}>
            Add Option
          </Button>

          <Box>
            {options.map((option, index) => (
              <Box key={index} display="flex" alignItems="center" sx={{ ml: 2, mb: 1, backgroundColor: '#f0f0f0', borderRadius: 1, p: 1 }}>
                <Typography variant="body2" sx={{ flex: 1, color: '#333' }}>
                  {option}
                </Typography>

                <Button
                  variant={correctOption === index ? 'contained' : 'outlined'}
                  onClick={() => handleSetCorrectOption(index)}
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                >
                  {correctOption === index ? 'Correct' : 'Set as Correct'}
                </Button>

                <Tooltip title="Delete option">
                  <IconButton onClick={() => handleDeleteOption(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
        <Button variant="contained" color="primary" onClick={handleAddQuestion} sx={{ backgroundColor: '#007bff', color: '#fff' }}>
          Add Question
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuestionForm;
