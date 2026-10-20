import { Link } from "react-router";
import { Outlet } from "react-router";


function App() {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
