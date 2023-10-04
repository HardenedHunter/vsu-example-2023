// "use client";

import { useEmployeesData } from "~/hooks";
import { Loader } from "../kit/Loader";
import { EmployeeCard } from "./EmployeeCard";
import { EmployeeContext } from "~/contexts";
import { type GetServerSideProps } from "next";

export const getServerSideProps = (async (context) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: {} };
}) satisfies GetServerSideProps<MyDataType>;

export const EmployeesCards = () => {
  const { isLoading, data: users, error } = useEmployeesData();

  if (isLoading) {
    return <Loader />;
  }

  if (error !== null) {
    return "При загрузке данных произошла ошибка";
  }

  return users.map((user) => (
    <EmployeeContext.Provider value={user} key={user.id}>
      <EmployeeCard />
    </EmployeeContext.Provider>
  ));
};
