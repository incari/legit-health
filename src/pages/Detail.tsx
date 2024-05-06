import { useParams } from "react-router-dom";
import { useGetUser } from "../api";
import { Button, Container } from "@mui/material";
import { Card } from "../components/Card";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUser(id);
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

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  const { data: user } = data || {};

  return (
    <Container maxWidth="sm">
      <Button
        component="label"
        variant="contained"
        tabIndex={-1}
        startIcon={<ArrowBack />}
        sx={{ my: "10px" }}
        onClick={handleBack}
      >
        Go back
      </Button>
      {user && <Card user={user} />}
    </Container>
  );
};
