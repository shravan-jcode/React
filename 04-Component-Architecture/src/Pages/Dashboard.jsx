import React from 'react'
import MainLayout from '../Layouts/MainLayout';
import EmployeeCard from '../component/EmployeeCard';

const Dashboard = () => {

     const employees = [
    {
      id: 1,
      name: "Shravan",
      role: "Frontend Developer",
      email: "shravan@gmail.com",
    },
    {
      id: 2,
      name: "Rahul",
      role: "Backend Developer",
      email: "rahul@gmail.com",
    },
    {
      id: 3,
      name: "Aman",
      role: "UI Designer",
      email: "aman@gmail.com",
    },
  ];

  return (
   <MainLayout>
    <h2>All Employees</h2>
    {
        employees.map((employee)=>(
            <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            email={employee.email}
            />
        ))
    }
   </MainLayout>
  )
}

export default Dashboard