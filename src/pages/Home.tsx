import { useGetUsers } from "../api";
import { Typography } from "@mui/material";
import { Cards } from "../components/Cards";

const Home = () => {
  const { data, isLoading, isError } = useGetUsers();

  const { data: users = [] } = data || {};

  if (isError) {
    return <Typography>Error</Typography>;
  }

  if (isLoading) {
    return <Typography>Loading... </Typography>;
  }

  return <Cards users={users} />;
};

export default Home;
