import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  function goToUser() {
    navigate("/user/55");
  }

  function goToNestedRoute() {
    navigate("/parent");
  }

  return (
    <div>

      <h1>Home Page</h1>

      <button onClick={goToUser}>
        Dynamic Routing
      </button>

      <br /><br />

      <button onClick={goToNestedRoute}>
        Nested Routing
      </button>

    </div>
  );
}

export default Home;