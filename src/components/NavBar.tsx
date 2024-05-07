import { Button, Container } from "@mui/material";
import { ArrowBack, Add } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Controls of buttons
  const newUserPage = location.pathname === "/new";
  const homePage = location.pathname === "/";

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
    // Prevent to rewrite new locations with the same path
    if (newUserPage) {
      return;
    }
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
        disabled={homePage}
      >
        Go back
      </Button>
    </Container>
  );
};
