import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['"Futura Book"', '"Futura Heavy"', 'Open Sans'].join(',')
  },
  palette: {
    green: {
      main: '#169235',
    },
    teal: {
      main: '#7aa3a1',
    },
    red: {
      main: '#b71c1c'
    }
  },
});

export default theme;