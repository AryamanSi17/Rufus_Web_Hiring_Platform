import React, { createContext, useState, useEffect } from 'react';
import { candidates as initialCandidates } from '../utils/constants';

export const CandidateContext = createContext();

const CandidateProvider = ({ children }) => {
  const [candidates, setCandidates] = useState(() => {
    const savedCandidates = localStorage.getItem('candidates');
    const loadedCandidates = savedCandidates ? JSON.parse(savedCandidates) : initialCandidates;

    // Set each candidate as active by default if not already set
    return loadedCandidates.map(candidate => ({
      ...candidate,
      status: candidate.status || 'active',
    }));
  });

  // Persist candidates to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  const addCandidate = (newCandidate) => {
    const updatedCandidates = [
      ...candidates,
      { ...newCandidate, status: 'active' }
    ];
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates)); // Save directly
  };

  const deleteCandidate = (candidateId) => {
    const updatedCandidates = candidates.filter(candidate => candidate.id !== candidateId);
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates)); // Save directly
  };

  const updateCandidate = (updatedCandidate) => {
    const updatedCandidates = candidates.map(candidate =>
      candidate.id === updatedCandidate.id ? updatedCandidate : candidate
    );
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates)); // Save directly
  };

  return (
    <CandidateContext.Provider value={{ candidates, addCandidate, deleteCandidate, updateCandidate }}>
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateProvider;
