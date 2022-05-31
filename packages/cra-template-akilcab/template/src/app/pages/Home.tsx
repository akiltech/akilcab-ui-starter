import { Button, Typography } from '@mui/material';
import React from 'react';

export default function Home() {
  return (
    <div className="App">
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <Typography>TEXT</Typography>
    </div>
  );
}
