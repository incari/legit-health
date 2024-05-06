import { useQuery } from "react-query";
import { ApiResponse } from "./types";

const BASE_URL = "https://reqres.in/api/users";

const getUsers = async () => {
  const response = await fetch(BASE_URL).then((res) => res.json());

  return response;
};

const useGetUsers = () => {
  const query = useQuery<ApiResponse>("users", () => getUsers());
  console.log(query);
  return query;
};

export { useGetUsers };
