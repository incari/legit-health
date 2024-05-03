import { ThemeProvider, Typography, useTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={useTheme}>
        <Typography>hello world</Typography>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
