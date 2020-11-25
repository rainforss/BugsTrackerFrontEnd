import { AnyAction, Dispatch } from "redux";
import { IBug } from "../../types/entityTypes.d";
import * as types from "./actionTypes";
import axios from "axios";

export function createBug(bug: IBug): AnyAction {
  return { type: types.CREATE_BUG, bug };
}

export function loadBugSuccess(bugs: IBug[]): AnyAction {
  return { type: types.LOAD_BUG_SUCCESS, bugs };
}

export function loadBugs(
  languageId: string,
  environmentType: string,
  environmentId: string
) {
  return function (dispatch: Dispatch) {
    return axios
      .get<IBug[]>(
        `https://cors-anywhere.herokuapp.com/https://bugsreminder.azurewebsites.net/api/languages/${languageId}/${environmentType}/${environmentId}/bugs`
      )
      .then((res) => {
        dispatch(loadBugSuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
