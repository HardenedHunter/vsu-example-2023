import { useEffect, useState } from "react";

import Spinner from "~/components/Spinner";

type Employee = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  university: string;
};

type EmployeeCardProps = {
  employee: Employee;
};

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const fullName = `${employee.firstName} ${employee.lastName}`;

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-solid border-black px-8 py-6 text-center">
      <img
        className="h-24 w-24 rounded-full border-2 border-solid border-black"
        src={employee.image}
        alt="avatar"
      />
      <p className="font-semibold">{fullName}</p>
    </div>
  );
};

const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/users?limit=20");
  const responseJson = (await response.json()) as { users: Employee[] };

  return responseJson.users;
};

const Example = () => {
  const [users, setUsers] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);

    const fetchedUsers = await fetchUsers();
    setUsers(fetchedUsers);

    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex h-screen flex-col gap-8 px-5 pt-12">
      {loading && (
        <div className="mx-auto mt-12">
          <Spinner />
        </div>
      )}
      {!loading &&
        users.map((user) => <EmployeeCard employee={user} key={user.id} />)}
    </div>
  );
};

export default Example;
