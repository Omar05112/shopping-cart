import { useParams } from "react-router";
import { Link } from "react-router";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import { useEffect, useState } from "react";

function App() {
  const { name } = useParams();
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  useEffect;

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
          <Link to="/cart">
            Cart (
            {cartItems.reduce((a, b) => {
              return a + b.amount;
            }, 0)}
            )
          </Link>
        </li>
      </nav>
      {name === "cart" ? (
        <Cart cartItems={cartItems} />
      ) : name === "shop" ? (
        <Shop
          setCartItems={(image, amountValue, title, price, id) => {
            if (amountValue === 0) {
              setCartItems([...cartItems]);
              return;
            }
            // console.log("ID BEFORE FILTERING: ", id);
            const found = cartItems.find((element) => element.id === id);
            console.log("Found: ", found);

            if (found) {
              const cartItemsCopy = cartItems.slice();
              console.log("CART ITEMS COPY IS: ", cartItemsCopy);
              cartItemsCopy.splice(cartItemsCopy.indexOf(found), 1, {
                image: image,
                title: title,
                id: id,
                amount: amountValue + found.amount,
                total_price: price * amountValue + found.total_price,
              });

              setCartItems(cartItemsCopy);

              return;
            }

            const newArray = [
              {
                image: image,
                title: title,
                id: id,
                amount: amountValue,
                total_price: price * amountValue,
              },
            ];

            setCartItems([...cartItems, ...newArray]);
          }}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
