import { useEmployeeFullName } from "~/hooks";

export const EmployeeFullName = () => {
  const fullName = useEmployeeFullName();
  // Для типографики тоже должен быть отдельный Атом, но мне лень
  return <p className="font-semibold">{fullName}</p>;
};
