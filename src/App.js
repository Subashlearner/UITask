import React from 'react';
import { Box, Sheet } from '@mui/joy';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FileManager from './components/FileManager';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Sheet variant="outlined" sx={{ flexGrow: 1, p: 2, overflow: 'auto' }}>
        <Header />
        <FileManager />
         <Footer />
      </Sheet>
      
    </Box>
   
  );
};

export default App;
