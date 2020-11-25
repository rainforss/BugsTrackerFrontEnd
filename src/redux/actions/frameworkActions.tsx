import { AnyAction, Dispatch } from "redux";
import { IFramework } from "../../types/entityTypes.d";
import * as types from "./actionTypes";
import axios from "axios";

export function loadFrameworkSuccess(frameworks: IFramework[]): AnyAction {
  return { type: types.LOAD_FRAMEWORK_SUCCESS, frameworks };
}

export function loadFrameworks(languageId: string) {
  return function (dispatch: Dispatch) {
    return axios
      .get<IFramework[]>(
        `https://cors-anywhere.herokuapp.com/https://bugsreminder.azurewebsites.net/api/languages/${languageId}/frameworks`
      )
      .then((res) => {
        dispatch(loadFrameworkSuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
