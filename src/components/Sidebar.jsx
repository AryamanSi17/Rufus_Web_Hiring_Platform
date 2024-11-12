import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

function Sidebar({ open, onClose }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          backgroundColor: '#ffffff', // White background for sidebar
          color: 'text.primary',
          boxShadow: 3,
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/candidates" onClick={onClose}>
          <ListItemIcon>
            <GroupIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Candidates" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
