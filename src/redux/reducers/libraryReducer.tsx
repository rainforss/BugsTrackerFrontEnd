import { AnyAction } from "redux";
import { ILibrary } from "../../types/entityTypes.d";
import * as types from "../actions/actionTypes";

export default function libraryReducer(
  state: Array<ILibrary> = [],
  action: AnyAction
): Array<ILibrary> {
  switch (action.type) {
    case types.LOAD_LIBRARY_SUCCESS:
      return action.libraries;
    default:
      return state;
  }
}
