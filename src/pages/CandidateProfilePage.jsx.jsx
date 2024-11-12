// CandidateProfilePage.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CandidateContext } from '../contexts/CandidateProvider';
import CandidateInfo from '../components/candidate/CandidateInfo';
import ResumePreview from '../components/candidate/ResumePreview';
import StatusUpdate from '../components/candidate/StatusUpdate';
import { Switch, Typography } from '@mui/material';

const CandidateProfilePage = () => {
  const { candidates, updateCandidate } = useContext(CandidateContext);
  const { candidateId } = useParams();
  const candidate = candidates.find(
    (c) => c.id === parseInt(candidateId, 10) || decodeURIComponent(candidateId) === c.name
  );

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  const handleStatusChange = () => {
    updateCandidate({
      ...candidate,
      status: candidate.status === 'active' ? 'inactive' : 'active',
    });
  };

  return (
    <div>
      <h1>Candidate Profile</h1>
      <CandidateInfo candidate={candidate} />
      <ResumePreview resumeLink={candidate.resumeLink} />

      {/* Status Toggle */}
      <Typography variant="h6">Status: {candidate.status}</Typography>
      <Switch
        checked={candidate.status === 'active'}
        onChange={handleStatusChange}
        color="primary"
      />
    </div>
  );
};

export default CandidateProfilePage;
