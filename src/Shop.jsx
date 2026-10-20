import { useState, useEffect } from "react";
import ShopItem from "./ShopItem";

function Shop() {
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
            image={item.image}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </>
  );
}

export default Shop;
