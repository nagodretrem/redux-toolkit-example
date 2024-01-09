import CartItem from "../CartItem/CartItem";
import "./CartItemList.css";

type Props = {};

const CartItemList = (props: Props) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          <CartItem
            id={1}
            price={2500}
            name={"Macbook"}
            quantity={0}
            total={0}
          />
        </li>
      </ul>
    </div>
  );
};

export default CartItemList;
