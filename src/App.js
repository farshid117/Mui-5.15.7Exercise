import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Person } from "@mui/icons-material";

function App() {
  const theme = createTheme(
    {
      typography:{
        fontFamily: "Vazir",
      }
    }
  )
  return (
   <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained" startIcon={<Person sx={{ ml:1, mr:0 }} />} > کلیک کنید </Button>
      </div>
   </ThemeProvider>
  );
}

export default App;
