import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../apis/users/getUsersApi";

export const useGetUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });

  return query;
};
