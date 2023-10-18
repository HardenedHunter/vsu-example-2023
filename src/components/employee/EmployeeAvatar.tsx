import { useEmployeeContext } from "~/contexts";
import { Image } from "../kit";

export const EmployeeAvatar = () => {
  const { image } = useEmployeeContext();

  return <Image src={image} alt="avatar" />;
};
