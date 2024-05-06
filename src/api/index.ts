import { useQuery } from "@tanstack/react-query";
import { ApiResponse, UserData } from "./types";

const BASE_URL = "https://reqres.in/api/users";

const getUsers = async () => {
  const response = await fetch(BASE_URL).then((res) => res.json());

  return response;
};

const useGetUsers = () => {
  const query = useQuery<ApiResponse>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return query;
};

const getUser = async (id: string | undefined) => {
  const response = await fetch(BASE_URL + "/" + id).then((res) => res.json());

  return response;
};

const useGetUser = (id: string | undefined) => {
  const query = useQuery<{ data: UserData }>({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });
  return query;
};
export { useGetUsers, useGetUser };
