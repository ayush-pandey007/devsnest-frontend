import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { updateReducer } from "./updateReducer";
import themeReducer from "./themeReducer";

export const rootReducer = combineReducers({
  city: cityReducer,
  fetc: updateReducer,
  theme: themeReducer,
});
