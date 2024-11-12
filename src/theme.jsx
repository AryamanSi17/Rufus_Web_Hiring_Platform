
import { createTheme } from '@mui/material/styles';

const lightBlue = {
  main: '#2196f3', // Light blue primary color
  contrastText: '#ffffff', // White text
};

const typography = {
  fontFamily: "'Ubuntu', sans-serif",
  h5: {
    fontWeight: 700, // Bold headings
    fontSize: '1.5rem',
  },
  body1: {
    fontWeight: 400,
    color: '#333333',
  },
};

// Light theme
export const lightTheme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: { main: '#ffffff' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#333333', secondary: '#666666' },
  },
  typography,
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: lightBlue,
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#cccccc' },
  },
  typography,
});

export default lightTheme;
