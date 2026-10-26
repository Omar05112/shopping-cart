import { useState, useEffect } from "react";
import ShopItem from "./ShopItem.jsx";

function Shop({ setAmountValue }) {
  const [stuff, setStuff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setStuff(data))
        .catch((error) => console.log("There's been an error: ", error))
        .finally(() => setLoading(false));
    }

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      {stuff.map((item) => {
        return (
          <ShopItem
            key={item.id}
            image={item.image}
            id={item.id}
            title={item.title}
            price={item.price}
            setAmountValue={setAmountValue}
          />
        );
      })}
    </>
  );
}

export default Shop;
