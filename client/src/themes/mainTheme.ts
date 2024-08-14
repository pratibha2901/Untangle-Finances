import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface PaletteColor {
      darker?: string;
    }
  
    interface SimplePaletteColorOptions {
      darker?: string;
    }
}
export const theme =createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900],
    },
  },
});