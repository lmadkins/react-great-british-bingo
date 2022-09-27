import { createTheme } from '@mui/material/styles';


  const theme = createTheme({
    typography: {
      fontFamily: ['"Futura Book"', 'Open Sans'].join(',')
    },
    palette: {
      primary: {
        main: '#197b9f',
      },
      secondary: {
        main: '#c73e67',
      },
      third: {
        main: '#479fce'
      }
    },
  });

export default theme;