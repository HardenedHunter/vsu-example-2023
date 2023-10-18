import { useMemo } from "react";
import { useEmployeeContext } from "~/contexts";

export const useEmployeeFullName = () => {
  const { firstName, lastName } = useEmployeeContext();
  return useMemo(() => `${firstName} ${lastName}`, [firstName, lastName]);
};
