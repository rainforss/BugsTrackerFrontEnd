import { BugAction, IBug } from "../../types/entityTypes.d";

export default function courseReducer(
  state: Array<IBug> = [],
  action: BugAction
): Array<IBug> {
  switch (action.type) {
    case "CREATE_BUG":
      return [...state, action.bug];
    default:
      return state;
  }
}
