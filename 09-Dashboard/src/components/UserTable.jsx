function UserTable({ users }) {

  return (
    <table border="1" cellPadding="10">

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>

        {users.map((user) => (
          <tr key={user.id}>

            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default UserTable;