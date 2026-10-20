import { useState } from "react";

function ShopItem({ image, id, title, price }) {
  const [amount, setAmount] = useState(0);

  function handleIncrease() {
    setAmount(amount + 1);
  }

  function handleDecrease() {
    if (amount === 0) return;
    setAmount(amount - 1);
  }
  return (
    <>
      <img src={image} alt="" width="200" height="200" />
      <div>{title}</div>
      <div>${price}</div>
      <div>
        <button
          onClick={() => {
            handleDecrease();
          }}
        >
          -
        </button>
        <div>{amount}</div>
        <button onClick={() => handleIncrease()}>+</button>
      </div>
      <button onClick={() => localStorage.setItem(id, amount)}>
        Add to Cart
      </button>
    </>
  );
}

export default ShopItem;
