import React from 'react';
import { Box, Typography, Input, IconButton } from '@mui/joy';
import Search from '@mui/icons-material/Search';

const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography level="h4">Content Repository</Typography>
     
      <Input
        startDecorator={<Search />}
        placeholder="Search"
        sx={{ width: 300 }}
      />
    </Box>
  );
};

export default Header;