import { useParams } from "react-router-dom";
import { useGetUser } from "../api";
import { Container, Skeleton } from "@mui/material";
import { Card } from "../components/Card";

export const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUser(id);

  if (isError) {
    return <h1>Error</h1>;
  }

  const { data: user } = data || {};

  return (
    <Container maxWidth="sm">
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
