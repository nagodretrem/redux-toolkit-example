import { useDispatch } from "react-redux";
import "./CartItem.css";
//import { cartActions } from "./../store/cartSlice";

type Props = {
  name: string;
  quantity: number;
  total: number;
  price: number;
  id: number;
};

const CartItem: React.FC<Props> = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  /* const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  }; */
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      {/*       <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button> */}
    </div>
  );
};

export default CartItem;
