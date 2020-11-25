import { AnyAction } from "redux";
import { ILanguage } from "../../types/entityTypes.d";
import * as types from "../actions/actionTypes";

export default function languageReducer(
  state: Array<ILanguage> = [],
  action: AnyAction
): Array<ILanguage> {
  switch (action.type) {
    case types.LOAD_LANGUAGE_SUCCESS:
      return action.languages;
    default:
      return state;
  }
}
