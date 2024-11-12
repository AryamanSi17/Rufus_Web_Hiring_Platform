import React from 'react';
import { Card, CardContent, Box, Typography, IconButton, Chip, Badge } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { red, green, yellow, blue, grey } from '@mui/material/colors';

const JobCard = ({ job, onEdit, onDelete, onClick, candidates }) => {
  const formattedDate = job.postedDate ? new Date(job.postedDate).toLocaleDateString() : "No Date Available";

  return (
    <Card
      variant="outlined"
      sx={{
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #f9f9f9, #eaf3fc)',
        borderRadius: 6,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
        borderColor: blue[100],
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
        },
        padding: 2,
        minHeight: 160,
      }}
      onClick={() => onClick(job)}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem', color: '#333' }}>
            {job.title}
          </Typography>

          <Box>
            <IconButton color="default" onClick={(e) => { e.stopPropagation(); onDelete(job.id); }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Badge
            badgeContent={candidates.length}
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: yellow[700],
                color: 'white',
                fontSize: '0.75rem',
                height: 20,
                minWidth: 20,
                borderRadius: '50%',
              },
              mr: 1,
            }}
          >
            <GroupIcon sx={{ color: grey[600] }} />
          </Badge>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.9rem',
            }}
          >
            <CalendarTodayIcon fontSize="small" sx={{ color: grey[500] }} />
            {formattedDate}
          </Typography>

         
          <Chip
            label={job.active ? 'Active' : 'Inactive'}
            sx={{
              fontSize: '0.75rem',
              height: 24,
              minWidth: 65,
              backgroundColor: job.active ? green[100] : red[100],
              color: job.active ? green[800] : red[800],
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
