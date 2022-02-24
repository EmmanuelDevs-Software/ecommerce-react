import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
//LocalStorage
import storage from "redux-persist/lib/storage";
/**
 * import sessionstorage from 'redux-persist/lib/storage';
 */

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export default persistReducer(persistConfig, rootReducer);
