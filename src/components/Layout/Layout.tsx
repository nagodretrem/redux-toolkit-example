import { useSelector } from "react-redux";
import CartItemList from "../CartItemList/CartItemList";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import "./Layout.css";
import { RootState } from "../../store";

type Props = {};

const Layout = (props: Props) => {
  const showCart = useSelector((state: RootState) => state.cart.showCart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <>
      <div className="layout">
        <Header />
        <ProductList />
        {showCart && <CartItemList />}
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </>
  );
};

export default Layout;
