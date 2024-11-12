import React, { createContext, useState, useEffect } from 'react';
import { jobPostings as initialJobs } from '../utils/constants';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobPostings, setJobPostings] = useState(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobPostings')) || initialJobs;

    // Ensure each job has a valid `postedDate`
    return savedJobs.map((job) => ({
      ...job,
      postedDate: job.postedDate || new Date().toISOString().split('T')[0],
    }));
  });

  useEffect(() => {
    localStorage.setItem('jobPostings', JSON.stringify(jobPostings));
  }, [jobPostings]);

  const addJob = (job) => {
    setJobPostings((prevJobs) => [
      ...prevJobs,
      { ...job, postedDate: new Date().toISOString().split('T')[0] },
    ]);
  };

  const updateJob = (jobId, updatedFields) => {
    const newPostedDate = updatedFields.title || updatedFields.location ? new Date().toISOString().split('T')[0] : null;
    setJobPostings((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId
          ? { ...job, ...updatedFields, postedDate: newPostedDate || job.postedDate }
          : job
      )
    );
  };

  const deleteJob = (jobId) => {
    setJobPostings((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  return (
    <JobContext.Provider value={{ jobPostings, addJob, updateJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
