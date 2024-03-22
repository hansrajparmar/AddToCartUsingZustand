import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import useStore from '../store';

const Cart = () => {
  const { cartItems, subTotal, shipping, tax, total } = useStore((state) => ({
    cartItems: state.cartItems,
    subTotal: state.subTotal,
    shipping: state.shipping,
    tax: state.tax,
    total: state.total,
  }));

  const addToCart = useStore((state) => state.addToCart);
  const decrement = useStore((state) => state.decrement);
  const deleteFromCart = useStore((state) => state.deleteFromCart);

  const increment = (id) => {
    addToCart({ id });
  };

  const deleteHandler = (id) => {
    deleteFromCart(id);
  };

  const decrementHandler = (id) => {
    decrement(id);
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrementHandler}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Here</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
