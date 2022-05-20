import { Button, Typography } from '@mui/material';

import './App.css';
import ThemeProvider from './theme';

const App = () => (
  <ThemeProvider>
    <div className="App">
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Typography>TEXT</Typography>
    </div>
  </ThemeProvider>
);

export default App;
