import { createTheme } from '@mui/material/styles';


  const theme = createTheme({
    typography: {
      fontFamily: ['"Futura Book"', '"Futura Heavy"', 'Open Sans'].join(',')
    },
    palette: {
      primary: {
        main: '#169235',
      },
      secondary: {
        main: '#d5eef5',
      },
      third: {
        main: '#9f3d19'
      }
    },
  });

export default theme;