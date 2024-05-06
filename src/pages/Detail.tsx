import { useParams } from "react-router-dom";
import { useGetUser } from "../api";
import { Container } from "@mui/material";
import { Card } from "../components/Card";

export const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUser(id);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  const { data: user } = data || {};

  return <Container maxWidth="sm">{user && <Card user={user} />}</Container>;
};
