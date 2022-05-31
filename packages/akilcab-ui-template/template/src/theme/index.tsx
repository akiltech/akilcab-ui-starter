import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles';

import palette from './palette';
import shadows from './shadows';
import typography from './typography';

const ThemeProvider = ({ children }: any) => {
  const theme = createTheme({
    typography,
    palette,
    shadows
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
