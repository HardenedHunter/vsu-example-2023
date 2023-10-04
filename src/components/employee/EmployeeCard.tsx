import { ListItemContainer } from "../kit";
import { EmployeeFullName } from "./EmployeeFullName";
import { EmployeeAvatart } from "./EmployeeAvatart";

export const EmployeeCard = () => (
  <ListItemContainer>
    <EmployeeAvatart />
    <EmployeeFullName />
  </ListItemContainer>
);
