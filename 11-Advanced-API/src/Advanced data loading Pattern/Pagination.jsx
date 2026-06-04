import { useEffect, useState } from "react";

function Pagination() {
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [totalUsers, setTotalUsers] =
    useState(0);

  const limit = 10;

  const totalPages = Math.ceil(
    totalUsers / limit
  );

  async function getUsers() {
    try {
      setLoading(true);

      setError("");

      const skip = (page - 1) * limit;

      const response = await fetch(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setUsers(data.users);

      setTotalUsers(data.total);
    } catch (error) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <div>
      <h1>Users</h1>

      {loading && (
        <p>Loading users...</p>
      )}

      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        users.length === 0 && (
          <h2>No Users Found</h2>
        )}

      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.firstName}{" "}
            {user.lastName}
          </h3>

          <p>{user.email}</p>
        </div>
      ))}

      <div>
        <button
          disabled={
            loading || page === 1
          }
          onClick={() =>
            setPage(page - 1)
          }
        >
          Previous
        </button>

        <span>
          {" "}
          Page {page} of {totalPages}{" "}
        </span>

        <button
          disabled={
            loading ||
            page === totalPages
          }
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;