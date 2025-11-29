import { fetchUsersFromApi } from "../managers/users";

class UsersController {
  async fetchUsersFromApi() {
    const data = await fetchUsersFromApi();

    return data;
  }
}

export default new UsersController();
