import { createContext, useContext } from "react";
import { type Employee } from "~/types/";

export type EmployeeContextType = Employee;

export const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined,
);

export const useEmployeeContext = () => {
  const ctx = useContext(EmployeeContext);
  if (!ctx) {
    throw new Error(
      "Cannot use useEmployeeContext outside of EmployeeContext.Provider",
    );
  }
  return ctx;
};
