export const List= ()=> {

  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Amit" }
  ];

  return (

    <div>

      {
        users.map((user) => (

          <h2 key={user.id}>
            {user.name}
          </h2>

        ))
      }

    </div>

  );

}