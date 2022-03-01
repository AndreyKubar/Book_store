import { configureStore } from "@reduxjs/toolkit";


import userAuthSlice from "./user/userAuth/userAuthSlice";
import userDataSlice from "./user/userData/userDataSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    userData: userDataSlice,

  },
});

export type RootStore = ReturnType<typeof store.getState>;
export default store