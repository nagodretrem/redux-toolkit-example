import "./Cart.css";

type Props = {};

const Cart = (props: Props) => {
  const quantity = 5;
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
