import React, { useState } from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";

const Crud = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h1>CRUD APP</h1>

      <Create users={users} setUsers={setUsers} />
      <Read users={users} />
      <Update users={users} setUsers={setUsers} />
    </div>
  );
};

export default Crud;