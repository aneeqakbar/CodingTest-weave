import React from "react";
import { useGetUsers } from "../../hooks/users/useGetUsers";

const UsersTable = () => {
  const { data: users, isLoading, isError } = useGetUsers();

  if (isLoading) {
    return (
      <div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (isError || !users) {
    return (
      <div>
        <p>Something went wrong {":("}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div>
        <p>No data found</p>
      </div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Company Name</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
