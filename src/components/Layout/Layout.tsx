import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";

type Props = {};

const Layout = (props: Props) => {
  let total = 100;
  return (
    <>
      <div className="layout">
        <Header />
        <ProductList />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </>
  );
};

export default Layout;
