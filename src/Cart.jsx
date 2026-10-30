function Cart({ cartItems }) {
  return (
    <>
      {cartItems.map((item) => {
        return (
          <div>
            Image: <img src={item.image} width="100" height="100" />
            Title: {item.title}, ID: {item.id}, Amount: {item.amount}, Total
            Price: {item.total_price}
          </div>
        );
      })}
    </>
  );
}

export default Cart;
