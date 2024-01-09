import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import "./CartItemList.css";
import { RootState } from "../../store";

const CartItemList = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {" "}
            <CartItem
              name={item.name}
              quantity={item.quantity}
              total={item.subTotalPrice}
              price={item.price}
              id={item.id}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
