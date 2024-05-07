import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ApiResponse, NewUser, UserData } from "./types";

const BASE_URL = "https://reqres.in/api/users";

const getUsers = async (page: number, queryClient: QueryClient) => {
  const response = await fetch(BASE_URL + "?page=" + page).then((res) =>
    res.json()
  );
  // Cache each user individually
  response.data.forEach((user: UserData) => {
    queryClient.setQueryData(["user", user.id.toString()], user);
  });
  return response;
};

const useGetUsers = (page: number) => {
  const queryClient = useQueryClient();

  const query = useQuery<ApiResponse>({
    queryKey: ["users", page],
    queryFn: () => getUsers(page, queryClient),
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

const create = async (newUser: NewUser) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(newUser),
  });
  return response;
};

const useCreateUser = (onSuccess: () => void) => {
  const query = useMutation({
    mutationFn: create,
    onSuccess: () => {
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  return query;
};

export { useGetUsers, useGetUser, useCreateUser };
