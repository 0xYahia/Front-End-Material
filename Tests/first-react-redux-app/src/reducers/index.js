import { menuReducer } from "./menuReducer";
import { selectProductReducer } from "./selectProductReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  products: menuReducer,
  selectProduct: selectProductReducer,
});
