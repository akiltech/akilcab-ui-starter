import Router from './core/routes';
import './App.css';
import { ProgressBarStyle } from './shared/components/ProgressBar';
import ThemeProvider from './theme';

const App = () => (
  <ThemeProvider>
    <ProgressBarStyle />

    <Router />
  </ThemeProvider>
);

export default App;
