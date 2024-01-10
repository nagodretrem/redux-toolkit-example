import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import { RootState } from "./store";
import { useEffect } from "react";
import Notification from "./components/Notification/Notification";
import { getData, sendCartData } from "./store/cart-actions";
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state: RootState) => state.ui.notification);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(getData() as any);
      return;
    }
    dispatch(sendCartData(cart) as any);
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification.open && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Layout />}
    </div>
  );
}

export default App;
