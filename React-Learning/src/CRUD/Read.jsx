import React from "react";

const Read = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            {user.name}
          </div>
        ))
      )}
    </div>
  );
};

export default Read;