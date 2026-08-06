import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#75e221',
    },
  },
});

export default theme