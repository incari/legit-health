import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 10,
      }}
    >
      <Typography variant="h1">Page not found</Typography>
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        sx={{ mt: 2 }}
      >
        Back to home page
      </Button>
    </Container>
  );
};

NotFound.propTypes = {};
