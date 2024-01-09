import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { RootState } from "../../store";
import { cartActions } from "../../store/cart-slice";

type Props = {};

const Cart = (props: Props) => {
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
