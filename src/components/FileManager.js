import React from 'react';
import { Table, Button, IconButton, Typography, Sheet } from '@mui/joy';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Download from '@mui/icons-material/Download';
import UploadForm from './UploadForm';

const files = [
  {
    id: 'file_001',
    name: 'companies_demo_export.xlsx',
    folder: 'Documents',
    created: '2021-11-04 11:54',
  },
  {
    id: 'file_002',
    name: 'demo_image.jpg',
    folder: 'Download Center',
    created: '2021-11-03 22:00',
  },
   {
    id: 'file_003',
    name: '_image.jpg',
    folder: 'Download Center',
    created: '2021-11-03 21:00',
  },
   {
    id: 'file_004',
    name: 'demo.jpg',
    folder: 'Download Center',
    created: '2021-11-03 20:00',
  },
];

const FileManager = () => {
  return (
    <>
      <Typography level="h5">Repository</Typography>
      <Table hoverRow>
        <thead>
          <tr>
            <th>Folder</th>
            <th>Name</th>
            <th>Created</th>
            <th>Download</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>{file.folder}</td>
              <td>{file.name}</td>
              <td>{file.created}</td>
              <td>
                <Button variant="soft" color="primary">
                  Download
                </Button>
              </td>
              <td>
                <IconButton color="primary"><Edit /></IconButton>
              </td>
              <td>
                <IconButton color="danger"><Delete /></IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <UploadForm />
    </>
  );
};

export default FileManager;