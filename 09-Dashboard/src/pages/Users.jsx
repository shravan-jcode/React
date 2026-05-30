import UserTable from "../components/UserTable";

function Users() {

  const users = [
    {
      id: 1,
      name: "Shravan",
      email: "shravan@gmail.com",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
    },
  ];

  return (
    <div>

      <h1>Users Page</h1>

      <UserTable users={users} />

    </div>
  );
}

export default Users;