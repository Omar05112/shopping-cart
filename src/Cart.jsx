import CartItem from "./CartItem";

function Cart({ cartItems, handleDelete}) {
  return (
    <>
      {cartItems.length === 0 ? (
        <div>There are no items in your cart</div>
      ) : (
        <>
          {cartItems.map((item) => {
            return (
              <CartItem
                image={item.image}
                title={item.title}
                id={item.id}
                amount={item.amount}
                total_price={item.total_price}
                handleDelete={handleDelete}
              />
            );
          })}
          <h1>
            Total price:{" "}
            {cartItems.reduce((a, b) => {
              return a + b.total_price;
            }, 0)}
          </h1>
        </>
      )}
    </>
  );
}

export default Cart;
