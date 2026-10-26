import { useParams } from "react-router";
import { Link } from "react-router";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import { useState } from "react";

function App() {
  const { name } = useParams();
  const [amountValue, setAmountValue] = useState(0);

  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({amountValue})</Link>
        </li>
      </nav>
      {name === "cart" ? (
        <Cart amountValue={amountValue} />
      ) : name === "shop" ? (
        <Shop
          setAmountValue={(amountToAdd) => {
            setAmountValue(amountValue + amountToAdd);
          }}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
