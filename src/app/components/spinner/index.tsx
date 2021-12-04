import { Box, CircularProgress } from '@mui/material';

const style = { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' };

export const Spinner = () => (
  <Box sx={style}>
    <CircularProgress />
  </Box>
);
