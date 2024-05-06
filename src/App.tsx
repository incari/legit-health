import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient();
const theme = createTheme();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Typography>hello world</Typography>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
