import { type Employee } from "~/types/";
import { useSwr } from "../use-swr";

const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/users?limit=20");

  const responseJson = (await response.json()) as { users: Employee[] };
  return responseJson.users;
};

export const useEmployeesData = () => {
  return useSwr<Employee[], string>(fetchUsers);
};
