import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/Constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row" // Horizontal layout for small screens
    sx={{
      overflowX: 'auto', // Allow horizontal scrolling on mobile
      overflowY: 'hidden', // Prevent vertical scrolling
      height: { xs: 'auto', md: '95%' }, // Adjust height for different screens
      flexDirection: { xs: 'row', md: 'column' }, // Switch to column layout on medium screens
      gap: 1, // Add spacing between buttons
      padding: 1, // Add padding for better spacing
      backgroundColor: '#1E1E1E', // Add a dark background
      borderRadius: { xs: 0, md: '10px' }, // Add rounded corners for larger screens
      width: { xs: '100%', md: '200px' }, // Adjust width for different screens
      position: { xs: 'fixed', md: 'sticky' }, // Fixed on mobile, sticky on desktop
      top: { xs: '56px', md: 0 }, // Position below the navbar on mobile
      zIndex: 1000, // Ensure the sidebar is above other content
    }}
  >
    {categories.map((category) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? '#FC1503' : 'transparent',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'start' }, // Center icons on small screens
          cursor: 'pointer',
          transition: 'background 0.3s, color 0.3s',
          minWidth: 'fit-content', // Ensure buttons don't shrink
          '&:hover': {
            background: '#FC1503',
            color: 'white',
          },
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginRight: { xs: 0, md: '15px' }, // Adjust margin for different screens
            fontSize: '20px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? '1' : '0.8',
            fontSize: { xs: '12px', md: '14px' }, // Adjust font size for different screens
            display: { xs: 'none', md: 'block' }, // Hide text on small screens
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;