import React from 'react';
import { Box, IconButton, List, ListItem, Tooltip, Avatar } from '@mui/joy';

// Icons from MUI
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import FolderIcon from '@mui/icons-material/Folder';
import LockIcon from '@mui/icons-material/Lock';
import SpeedIcon from '@mui/icons-material/Speed';
import HubIcon from '@mui/icons-material/Hub';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import AppsIcon from '@mui/icons-material/Apps';
import CategoryIcon from '@mui/icons-material/Category';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const iconList = [
  { icon: DashboardIcon, label: 'Dashboard' },
  { icon: ChatIcon, label: 'Chat' },
  { icon: FolderIcon, label: 'Folder' },
  { icon: LockIcon, label: 'Lock' },
  { icon: SpeedIcon, label: 'Performance' },
  { icon: HubIcon, label: 'Network' },
  { icon: GroupIcon, label: 'Users' },
  { icon: BarChartIcon, label: 'Analytics' },
  { icon: AppsIcon, label: 'Apps' },
  { icon: CategoryIcon, label: 'Categories' },
  { icon: LoyaltyIcon, label: 'Tags' },
  { icon: SecurityIcon, label: 'Security' },
  { icon: BuildIcon, label: 'Tools' },
  { icon: LibraryBooksIcon, label: 'Docs' },
  { icon: SupportAgentIcon, label: 'Support' },
  { icon: InsightsIcon, label: 'Reports' },
  { icon: CloudUploadIcon, label: 'Upload' },
  { icon: SettingsIcon, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 80,
        height: '100vh',
        bgcolor: 'background.level1',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRight: '1px solid #e0e0e0',
      }}
    >
      <List sx={{ gap: 1 }}>
        {iconList.map(({ icon: Icon, label }, index) => (
          <ListItem key={index} sx={{ justifyContent: 'center' }}>
            <Tooltip title={label} placement="right">
              <IconButton variant="plain" color="neutral">
                <Icon />
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      {/* Footer with profile */}
      <Box sx={{ mb: 2 }}>
        <Tooltip title="Profile" placement="right">
          <IconButton>
            <Avatar
              src="https://randomuser.me/api/portraits/men/75.jpg"
              sx={{ width: 40, height: 40 }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Sidebar;
