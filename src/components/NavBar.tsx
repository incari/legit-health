import { Button, Container } from "@mui/material";

import { ArrowBack, Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Go back but prevent to going to other website if the user lands directly to user/id page
    if (
      window.history.length > 2 &&
      document.referrer.includes(window.location.origin)
    ) {
      navigate(-1);
    } else {
      // Navigate to home page or any other fallback
      navigate("/", { replace: true });
    }
  };
  const handleAdd = () => {
    navigate("/new");
  };

  return (
    <Container
      disableGutters
      sx={{ display: "flex", justifyContent: "space-between", mt: "16px" }}
    >
      <Button
        onClick={handleAdd}
        variant="contained"
        startIcon={<Add />}
      >
        Add user
      </Button>
      <Button
        component="label"
        variant="contained"
        tabIndex={-1}
        startIcon={<ArrowBack />}
        onClick={handleBack}
      >
        Go back
      </Button>
    </Container>
  );
};
