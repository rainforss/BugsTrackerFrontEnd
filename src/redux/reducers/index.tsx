import { combineReducers } from "redux";
import bugs from "./bugReducer";

const rootReducer = combineReducers({
  bugs: bugs,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
