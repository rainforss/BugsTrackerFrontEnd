import { AnyAction } from "redux";
import { IBug } from "../../types/entityTypes.d";
import * as types from "../actions/actionTypes";

export default function courseReducer(
  state: Array<IBug> = [],
  action: AnyAction
): Array<IBug> {
  switch (action.type) {
    case types.CREATE_BUG:
      return [...state, action.bug];
    case types.LOAD_BUG_SUCCESS:
      return action.bugs;
    default:
      return state;
  }
}
