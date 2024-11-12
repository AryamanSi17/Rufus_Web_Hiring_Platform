import React, { useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import lightTheme, { darkTheme } from './theme';
import { JobProvider } from './contexts/JobContext';
import CandidateProvider from './contexts/CandidateContext';
import LoadingAnimation from './components/common/LoadingAnimation';
import { AssessmentProvider } from './contexts/AssessmentContext';
import IntroDialog from './components/IntroDialog';

// Lazy-loaded components for better performance
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const AssessmentForm = React.lazy(() => import('./components/assessment/AssessmentForm'));
const JobTracking = React.lazy(() => import('./pages/JobTracking'));
const CandidateProfile = React.lazy(() => import('./components/candidate/CandidateInfo'));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isIntroDialogOpen, setIsIntroDialogOpen] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit') !== 'false';
    if (isFirstVisit) {
      setIsIntroDialogOpen(true);
      localStorage.setItem('isFirstVisit', 'false');
    }
  }, []);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <JobProvider>
        <CandidateProvider>
          <AssessmentProvider>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
              <Box sx={{ p: 3, mt: 8 }}>
                <Suspense fallback={<LoadingAnimation />}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/assessment" element={<AssessmentForm />} />
                    <Route path="/job/:jobId" element={<JobTracking />} />
                    <Route path="/candidate/:name" element={<CandidateProfile />} />
                    <Route path="*" element={<div>404 - Page Not Found</div>} />
                  </Routes>
                </Suspense>
              </Box>
              <Footer />
            </BrowserRouter>

            <IntroDialog open={isIntroDialogOpen} onClose={() => setIsIntroDialogOpen(false)} />
          </AssessmentProvider>
        </CandidateProvider>
      </JobProvider>
    </ThemeProvider>
  );
}

export default App;
