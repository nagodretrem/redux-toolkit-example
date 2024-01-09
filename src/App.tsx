import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import { RootState } from "./store";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const url: string = process.env.REACT_APP_FIREBASE_URL as string;
    const sendCartData = async () => {
      const response = await axios.put(`${url}/cart.json`, cart);
      console.log(response);
    };
    sendCartData();
  }, [cart]);

  return (
    <div className="App">
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Layout />}
    </div>
  );
}

export default App;
