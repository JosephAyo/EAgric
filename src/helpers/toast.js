const showToast = (toastRef, message, duration) => {
  toastRef.current.show(message.toUpperCase(), duration || 1000);
};

export {showToast};
