import React from "react";
import { Snackbar, Alert, Slide } from "@mui/material";
import { useNotification } from "../context/NotificationContext";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

const SnackBarComponent = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <>
      {notifications.map(({ id, message, type }) => (
        <Snackbar
          key={id}
          open
          autoHideDuration={5000}
          onClose={() => removeNotification(id)}
          TransitionComponent={SlideTransition}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => removeNotification(id)}
            severity={type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};

export default SnackBarComponent;
