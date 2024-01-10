import { Dispatch } from "redux";
import { State, cartActions } from "./cart-slice";
import axios from "axios";
import uiSlice from "./ui-slice";


export const getData = () => {
    return async (dispatch: Dispatch) => {
      try {
        const url: string = process.env.REACT_APP_FIREBASE_URL as string;
        const response = await axios.get(`${url}/cart.json`);
        dispatch(cartActions.replaceData(response.data)); // Assuming response.data is the actual cart data
      } catch (error) {
        dispatch(
          uiSlice.actions.showNotification({
            message: "Fetching cart data failed",
            type: "error",
            open: true,
          })
        );
      }
    };
  };

export const sendCartData = (cart: State) => {
    return async(dispatch: Dispatch) => {
        dispatch(
            uiSlice.actions.showNotification({
              message: "Sending cart data",
              type: "warning",
              open: true,
            })
          );
          const sendCartData = async () => {
            const url: string = process.env.REACT_APP_FIREBASE_URL as string;
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
          try{
             sendCartData()
          }catch(err){
            dispatch(
                uiSlice.actions.showNotification({
                  message: "Sending cart data failed",
                  type: "error",
                  open: true,
                })
              );
              
          }
    }
    
}