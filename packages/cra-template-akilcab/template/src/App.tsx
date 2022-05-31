// @core
import Router from '@core/routes';
import { ProgressBarStyle } from '@shared/components/ProgressBar';

import './App.css';
import ThemeProvider from './theme';

const App = () => (
  <ThemeProvider>
    <ProgressBarStyle />

    <Router />
  </ThemeProvider>
);

export default App;
