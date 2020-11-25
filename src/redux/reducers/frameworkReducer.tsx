import { AnyAction } from "redux";
import { IFramework } from "../../types/entityTypes.d";
import * as types from "../actions/actionTypes";

export default function frameworkReducer(
  state: Array<IFramework> = [],
  action: AnyAction
): Array<IFramework> {
  switch (action.type) {
    case types.LOAD_FRAMEWORK_SUCCESS:
      return action.frameworks;
    default:
      return state;
  }
}
