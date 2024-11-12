import React, { createContext, useState, useEffect } from 'react';

export const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  const [assessments, setAssessments] = useState(() => {
    const savedAssessments = localStorage.getItem('assessments');
    return savedAssessments ? JSON.parse(savedAssessments) : [];
  });

  useEffect(() => {
    localStorage.setItem('assessments', JSON.stringify(assessments));
  }, [assessments]);

  const addAssessment = (newAssessment) => {
    setAssessments((prev) => [...prev, newAssessment]);
  };

  const updateAssessment = (updatedAssessment) => {
    setAssessments((prev) =>
      prev.map((assessment) =>
        assessment.jobId === updatedAssessment.jobId ? updatedAssessment : assessment
      )
    );
  };

  return (
    <AssessmentContext.Provider value={{ assessments, addAssessment, updateAssessment }}>
      {children}
    </AssessmentContext.Provider>
  );
};
