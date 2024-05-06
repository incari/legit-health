import { useGetUsers } from "../api";
import { Typography } from "@mui/material";

const Home = () => {
  const { data, isLoading, isError } = useGetUsers();

  const { data: users = [] } = data || {};

  if (isError) {
    return <Typography>Error</Typography>;
  }

  if (isLoading) {
    return <Typography>Loading... </Typography>;
  }

  console.log(data);
  return (
    <Typography>
      users:
      {users?.map(({ email }) => (
        <Typography>{email}</Typography>
      ))}
    </Typography>
  );
};

export default Home;
