import { createTheme } from '@mui/material/styles';

//todo : Create Custom Theme for ThemeProvider
export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Vazir, roboto"
    },
    breakpoints: {
        values: {
            xs: 576,  //mobile 0-576
            sm: 768,  //tablet 577-768
            md: 992,  //laptop 769-992
            lg: 1200, //desktop 993-1200
            xl: 1400, //wide desktop 1201-1400
        },
    },
})