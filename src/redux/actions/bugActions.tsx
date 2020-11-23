import { AnyAction } from "redux";
import { IBug } from "../../types/entityTypes.d";

export function createBug(bug: IBug): AnyAction {
  return { type: "CREATE_BUG", bug };
}
