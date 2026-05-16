import { useParams } from "react-router-dom";

function DynamicRouting() {

  const { id } = useParams();

  return (
    <h1>User ID : {id}</h1>
  );
}

export default DynamicRouting;