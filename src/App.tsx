import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import { RootState } from "./store";
import { useEffect } from "react";
import axios from "axios";
import Notification from "./components/Notification/Notification";
import uiSlice from "./store/ui-slice";
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
      return;
    }

    const url: string = process.env.REACT_APP_FIREBASE_URL as string;
    dispatch(
      uiSlice.actions.showNotification({
        message: "Sending cart data",
        type: "warning",
        open: true,
      })
    );
    const sendCartData = async () => {
      const response = await axios.put(`${url}/cart.json`, cart);
      console.log(response);
      dispatch(
        uiSlice.actions.showNotification({
          message: "Sent cart data successfully",
          type: "success",
          open: true,
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        uiSlice.actions.showNotification({
          message: "Error sending cart data",
          type: "error",
          open: true,
        })
      );
    });
  }, [cart]);

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
