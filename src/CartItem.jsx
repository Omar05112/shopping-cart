function CartItem({ image, title, id, amount, total_price, handleDelete }) {
  return (
    <>
      <div>
        <div>
          Image: <img src={image} width="100" height="100" />
          Title: {title}, ID: {id}, Amount: {amount}, Total Price: {total_price}
        </div>
      </div>
      <button>-</button>
      <div>{amount}</div>
      <button>+</button>
      <button onClick={() => handleDelete(id)}>Remove from Cart</button>
    </>
  );
}

export default CartItem;
