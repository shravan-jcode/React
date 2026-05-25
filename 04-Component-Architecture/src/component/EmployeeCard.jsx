function EmployeeCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <p>Role: {props.role}</p>

      <p>Email: {props.email}</p>

      <hr />
    </div>
  );
}

export default EmployeeCard;