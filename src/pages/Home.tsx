import { useGetUsers } from "../api";
import {
  Alert,
  ImageList,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { Cards } from "../components/Cards";

export const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetUsers(page);
  const { data: users = [] } = data || {};
  const skeletonGroup = Array(6).fill("");

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isError) {
    return <Typography>Error</Typography>;
  }

  return (
    <>
      {isError && (
        <Alert severity="error">
          We had a problem requesting the user list, please try again.
        </Alert>
      )}
      {isLoading ? (
        <>
          <ImageList cols={3}>
            {skeletonGroup.map((_, index) => (
              <Skeleton
                key={index}
                animation="wave"
                height={300}
                width={300}
                sx={{ aspectRatio: "1" }}
              />
            ))}
          </ImageList>
        </>
      ) : (
        <Cards users={users} />
      )}
      {data && (
        <Pagination
          page={page}
          onChange={handleChange}
          count={data.total_pages || 4}
          sx={{ margin: "0 auto" }}
        />
      )}
    </>
  );
};
