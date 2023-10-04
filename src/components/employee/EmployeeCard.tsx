import { ListItemContainer } from "../kit";
import { EmployeeFullName } from "./EmployeeFullName";
import { EmployeeAvatar } from "./EmployeeAvatar";

export const EmployeeCard = () => (
  <ListItemContainer>
    <EmployeeAvatar />
    <EmployeeFullName />
  </ListItemContainer>
);
