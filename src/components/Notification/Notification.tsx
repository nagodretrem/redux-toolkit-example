import { Alert, AlertColor } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import uiSlice from "../../store/ui-slice";
import { RootState } from "../../store";
type Props = {
  type: AlertColor;
  message: string;
};

const Notification: React.FC<Props> = ({ type, message }) => {
  const dispatch = useDispatch();
  const notification = useSelector((state: RootState) => state.ui.notification);
  const handleClose = () => {
    dispatch(uiSlice.actions.hideNotification());
  };
  return (
    <div>
      {notification.open && (
        <Alert
          onClose={handleClose}
          severity={type}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
