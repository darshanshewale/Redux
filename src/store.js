import { configureStore } from "@reduxjs/toolkit";
import accountreducer from "./features/account/accountSlice";
import customerreducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountreducer,
    customer: customerreducer,
  },
});

export default store;
