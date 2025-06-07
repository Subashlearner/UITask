import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Checkbox,
  Select,
  Option,
  LinearProgress,
    MenuItem,
} from '@mui/joy';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const UploadForm = () => {
  const [file, setFile] = useState({
    name: 'demo_image.jpg',
    size: 5.7 * 1024 * 1024, // 5.7MB
  });
  const [progress, setProgress] = useState(100);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setProgress(0);
      let percent = 0;
      const interval = setInterval(() => {
        percent += 10;
        setProgress(percent);
        if (percent >= 100) clearInterval(interval);
      }, 100);
    }
  };

  return (
   <Box
  sx={{
    p: 4,
    backgroundColor: '#fff',
    borderRadius: 16,
    boxShadow: '0 0 16px rgba(0,0,0,0.05)',
    maxWidth: 1400,
    mx: 'auto',
    mt: 4,
  }}
>
  {/* Title */}
  <Typography level="h5" fontWeight="lg" mb={2}>
    Add file to repository:
  </Typography>

  {/* Row: Folder + Upload */}
  <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
    {/* Left Side: Folder + Permission */}
    <Box sx={{ minWidth: 220 }}>
      <Typography level="body-sm" fontWeight="md" mb={1}>
        Choose folder:
      </Typography>
      <Select defaultValue="Documents" sx={{ mb: 3 }}>
        <Option value="Documents">Documents</Option>
        <Option value="Report">Report</Option>
        <Option value="Download Center">Download Center</Option>
        <Option value="Other">Other</Option>
      </Select>

      <Box>
        <Typography level="body-sm" fontWeight="md" mb={0.5}>
          Set permission:
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Checkbox size="sm" />
          <Typography level="body-sm">set file as private</Typography>
        </Box>
      </Box>
    </Box>

    {/* Right Side: Upload Area */}
    <Box sx={{ flex: 1 }}>
      {/* Drag & Drop Area */}
      <Box
        sx={{
          border: '2px dashed #B5CFFF',
          borderRadius: 12,
          px: 4,
          py: 3,
          mb: 2,
          bgcolor: '#F6FAFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <UploadRoundedIcon sx={{ fontSize: 40, color: '#8DAEF8' }} />
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <Typography level="body-sm">
            Select a file or drag and drop here
          </Typography>
          <Typography level="body-xs" sx={{ color: '#8DAEF8', fontSize: 12 }}>
            JPG, XLSX or PDF, file size no more than 10MB
          </Typography>
        </Box>
        <Button variant="outlined" component="label">
          SELECT FILE
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
      </Box>

      {/* Uploaded File + Progress */}
      {file && (
        <Box
          sx={{
            border: '2px dashed #B5CFFF',
            borderRadius: 12,
            px: 2,
            py: 1,
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <InsertDriveFileIcon sx={{ fontSize: 20, color: '#8DAEF8' }} />
            <Typography level="body-sm" fontWeight="md">
              {file.name}
            </Typography>
            <Typography level="body-xs" ml="auto">
              {(file.size / 1024 / 1024).toFixed(1)}MB
            </Typography>
          </Box>
          <LinearProgress
            value={progress}
            variant="soft"
            determinate
            sx={{ height: 6, mt: 1 }}
          />
        </Box>
      )}
    </Box>
  </Box>

  {/* Pagination & Buttons */}
 <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Centers the whole block
        mt: 3,
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
         
        }}
      >
        <Typography variant="body2">Page</Typography>
        <Button size="small" variant="text" sx={{ minWidth: '32px' }}>
          &lt;
        </Button>
        <Typography
          sx={{
            fontWeight: 'bold',
            backgroundColor: '#3f83f8',
            color: '#fff',
            px: 1.5,
            py: 0.5,
            borderRadius: '50%',
            fontSize: '14px',
            minWidth: '24px',
            textAlign: 'center',
          }}
        >
          1
        </Typography>
        <Button size="small" variant="text" sx={{ minWidth: '32px' }}>
          &gt;
        </Button>
       <Select
  value={30}
  onChange={() => {}} // prevent React warning, replace with real handler
  size="small"
  variant="standard"
  disableUnderline
  sx={{
    ml: 1,
    minWidth: '60px',
    fontSize: '20px',
    '& .MuiSelect-select': {
      padding: '4px 28px 4px 8px',
    },
    '& .MuiSvgIcon-root': {
      color: '#cfd8dc',
    },
  }}
>
  <MenuItem value={10}>10</MenuItem>
  <MenuItem value={20}>20</MenuItem>
  <MenuItem value={30}>30</MenuItem>
</Select>
      </Box>
   
    <Box   sx={{
          display: 'flex',
          alignItems: 'center',
        
        }}>
      <Button variant="plain" color="neutral">
        Cancel
      </Button>
      <Button
        variant="solid"
        color="primary"
        startDecorator={<UploadRoundedIcon />}
        disabled={!file || progress < 100}
      >
        Upload
      </Button>
    </Box>
  </Box>
</Box>

  );
};

export default UploadForm;
