import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',      
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 64px',
        backgroundColor: 'primary.light',
        borderTop: '2px solid',
        borderColor: 'grey.300',
        mt: 'auto',                
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <dotlottie-player
            src="https://lottie.host/e0b964d9-743c-41c1-b2f6-6229f85ea713/bkxh2X70AQ.json"
            background="transparent"
            speed="1"
            style={{ width: '500px', height: '150px' }}
            loop
            autoplay
          >
          </dotlottie-player>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Thank you ENTNT for this opportunity
        </Typography>
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 2,
          color: 'text.secondary',
        }}
      >
        Made with ❤️ by Aryaman Sinha
      </Typography>
    </Box>
  );
};
export default Footer;