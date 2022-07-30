import React from 'react'
import { Box } from '@mui/material';

export default function RightBar() {
  return (
    <Box
      bgcolor="red"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      RightBar
    </Box>
  );
}
