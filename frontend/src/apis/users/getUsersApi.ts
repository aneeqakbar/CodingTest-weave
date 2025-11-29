import apiInstance from "..";
import type { TUser } from "../../types/users";

export const getUsersApi = async () => {
  const response = await apiInstance.get<TUser[]>("/api/users");

  return response.data;
};
