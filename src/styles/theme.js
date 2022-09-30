import { createTheme } from '@mui/material/styles';


  const theme = createTheme({
    typography: {
      fontFamily: ['"Futura Book"', '"Futura Heavy"', 'Open Sans'].join(',')
    },
    palette: {
      primary: {
        main: '#169273',
      },
      secondary: {
        main: '#9f3d19',
      },
      third: {
        main: '#479fce'
      }
    },
  });

export default theme;