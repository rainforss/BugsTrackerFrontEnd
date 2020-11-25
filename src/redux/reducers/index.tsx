import { combineReducers } from "redux";
import bugs from "./bugReducer";
import languages from "./languageReducer";
import frameworks from "./frameworkReducer";
import libraries from "./libraryReducer";

const rootReducer = combineReducers({
  bugs: bugs,
  languages: languages,
  frameworks: frameworks,
  libraries: libraries,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
