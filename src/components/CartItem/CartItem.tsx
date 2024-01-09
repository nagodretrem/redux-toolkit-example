import { useDispatch } from "react-redux";
import "./CartItem.css";
import { cartActions } from "../../store/cart-slice";

type Props = {
  name: string;
  quantity: number;
  total: number;
  price: number;
  id: number;
};

const CartItem: React.FC<Props> = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({ id, name, price, quantity: 1, subTotalPrice: 0 })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>

      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
      <p>x{quantity}</p>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
      <article>Total ${total}</article>
    </div>
  );
};

export default CartItem;
