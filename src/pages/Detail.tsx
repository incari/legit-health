import { useParams } from "react-router-dom";
import { useGetUser } from "../api";
import { Alert, Container, Skeleton } from "@mui/material";
import { Card } from "../components/Card";

export const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUser(id);

  const { data: user } = data || {};

  return (
    <Container maxWidth="sm">
      {isError && (
        <Alert
          severity="error"
          sx={{ my: 3 }}
        >
          Failing requesting the user data, please try again
        </Alert>
      )}
      {!user || isLoading ? (
        <Skeleton
          animation="wave"
          sx={{ aspectRatio: "1" }}
        />
      ) : (
        <Card user={user} />
      )}
    </Container>
  );
};
