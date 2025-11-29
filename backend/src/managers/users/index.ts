import axios, { AxiosError } from "axios";
import { userApiUrl } from "../../constants/users";
import { TUser } from "../../types/users";

const userApiInstance = axios.create({
  baseURL: userApiUrl,
});

export const fetchUsersFromApi = async () => {
  const response = await userApiInstance.get<TUser[]>("/users");

  if (response.status >= 200 && response.status <= 299) {
    return response.data;
  }

  // TODO: create a new class ExternalApiError and handle these errors efficiently in error middleware
  throw new AxiosError("API response status code is not good");
};
