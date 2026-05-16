import useUsers from "./useUsers";

// a function where you reuse logic (state + useEffect)
function Custom() {
  const users = useUsers();

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Custom