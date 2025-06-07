import React from 'react';
import {
  Box,
  Typography,
  Link,
  Grid,
  Divider,
  IconButton,
} from '@mui/joy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f8ff', p: 4, borderRadius: 'xl', mt: 4 }}>
      <Grid container spacing={4}>
        <Grid xs={6} sm={3}>
          <Typography level="title-sm" mb={1}>Resources</Typography>
          <Link href="#">News</Link><br />
          <Link href="#">Online Manual</Link><br />
          <Link href="#">E-learning</Link>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography level="title-sm" mb={1}>Product</Typography>
          <Link href="#">API & Developers</Link><br />
          <Link href="#">All features</Link><br />
          <Link href="#">Integrations</Link>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography level="title-sm" mb={1}>Company</Typography>
          <Link href="#">Contact</Link><br />
          <Link href="#">About Us</Link><br />
          <Link href="#">Blog</Link>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography level="title-sm" mb={1}>Legal & Help</Typography>
          <Link href="#">Teams Of Use</Link><br />
          <Link href="#">Cookie files</Link>
          <Box mt={2}>
            <Typography level="title-sm"><strong>Help:</strong></Typography>
            <Typography level="body-sm">support@repositorymanago.com</Typography>
            <Typography level="body-sm">ph: +1 885 395 0027</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography level="body-sm">
          2022 © All Rights Reserved. <Link href="#">Terms of Service</Link>
        </Typography>
        <Box>
          <IconButton variant="plain"><LinkedInIcon /></IconButton>
          <IconButton variant="plain"><GoogleIcon /></IconButton>
          <IconButton variant="plain"><FacebookIcon /></IconButton>
          <IconButton variant="plain"><TwitterIcon /></IconButton>
          <IconButton variant="plain"><YouTubeIcon /></IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
