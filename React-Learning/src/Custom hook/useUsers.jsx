import { useState, useEffect } from "react";

// a function where you reuse logic (state + useEffect)
function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
}

export default useUsers;