import { useDispatch } from "react-redux";
import "./Product.css";
import { cartActions } from "../../store/cart-slice";

type Props = {
  id: number;
  name: string;
  price: number;
  imgURL: string;
};

const Product: React.FC<Props> = ({ id, name, price, imgURL }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({ id, name, price, subTotalPrice: 0, quantity: 1 })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
