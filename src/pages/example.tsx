type Employee = {
  avatar: string;
  name: string;
  surname: string;
  role: string;
};

const myEmployee: Employee = {
  avatar: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  name: "Blanche",
  surname: "Pearson",
  role: "Sales Manager",
};

type EmployeeCardProps = {
  employee: Employee;
};

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <div>
      <p>{employee.name}</p>
      <p>{employee.surname}</p>
    </div>
  );
};

const Example = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <EmployeeCard employee={myEmployee} />
    </div>
  );
};

export default Example;
