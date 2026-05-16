import {
  Outlet,
  useNavigate,
} from "react-router-dom";

function NestedRoute() {

  const navigate = useNavigate();

  function goToChild() {
    navigate("child");
  }

  return (
    <div>

      <h1>Parent Route</h1>

      <button onClick={goToChild}>
        Go To Child
      </button>

      <hr />

      <Outlet />

    </div>
  );
}

export default NestedRoute;