import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Switch, Button, Avatar, Badge, Tooltip, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '2px solid #007BFF',
          boxShadow: 'none',
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: -1 }}>
            <dotlottie-player
              src="https://lottie.host/071ff526-5fdf-47d8-b4a3-9cd96eaf1e69/z4F4FVkq8j.json"
              background="transparent"
              speed="1"
              style={{ width: 80, height: 50 }}
              loop
              autoplay
            ></dotlottie-player>
          </Box>

          <Typography  component={Link} to="/"  variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#333333', letterSpacing: 1, fontSize: { xs: '1rem', sm: '1.25rem' } , textDecoration: 'none', cursor: 'pointer' }}>
            Rufus
          </Typography>

          {/* Desktop Navigation Links - Hidden on small screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button component={Link} to="/" startIcon={<DashboardIcon />} sx={{ color: '#333333', textTransform: 'none', mr: 2 }}>
              Dashboard
            </Button>
            <Button component={Link} to="/assessment" startIcon={<BarChartIcon />} sx={{ color: '#333333', textTransform: 'none', mr: 2 }}>
              Assessment
            </Button>
          </Box>

          <Switch checked={isDarkMode} onChange={toggleDarkMode} color="default" sx={{ display: { xs: 'none', md: 'inline-flex' }, mr: 2 }} />

          <IconButton sx={{ color: '#333333', mr: { xs: 1, md: 2 } }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ color: 'black', display: { xs: 'block', md: 'none' } }} // Set color to black
          >
            <MenuIcon />
          </IconButton>

          <Tooltip title="Admin" arrow placement="bottom">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                alt="Admin User"
                src="/path/to/avatar.jpg" // Replace with your avatar path
                sx={{ width: 36, height: 36, cursor: 'pointer' }}
              />
              <Typography variant="caption" sx={{ color: '#333333', fontSize: 12, fontWeight: 'bold', mt: 0.5 }}>
                Admin
              </Typography>
            </Box>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box onClick={toggleDrawer} sx={{ width: 250 }}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/asassessment">
              <ListItemIcon><BarChartIcon /></ListItemIcon>
              <ListItemText primary="Assessement" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
