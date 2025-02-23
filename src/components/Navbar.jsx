import React from 'react';
import { AppBar, Toolbar, Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/Constants';
import SearchBar from './searchBar'; // Corrected import (case-sensitive)

const Navbar = () => (
  <AppBar
    position="sticky" // Make the navbar sticky
    sx={{
      background: '#000',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      zIndex: 1100, // Ensure the navbar is above the sidebar
    }}
  >
    <Toolbar>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        spacing={2}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={45} />
          <Typography
            variant="h6"
            color="white"
            sx={{ ml: 2, fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}
          >
            MyTube
          </Typography>
        </Link>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, maxWidth: '600px', mx: 2 }}>
          <SearchBar />
        </Box>
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Navbar;