import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import { RootState } from "./store";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="App">
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Layout />}
    </div>
  );
}

export default App;
