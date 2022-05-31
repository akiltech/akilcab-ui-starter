import { Button as MuiButton, ButtonProps } from '@mui/material';
import './button.css';

export const Button = (props: ButtonProps) => (
  <MuiButton type="button" variant="contained" {...props} />
);
