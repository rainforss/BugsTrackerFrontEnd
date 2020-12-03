import { AnyAction, Dispatch } from "redux";
import { IBug } from "../../types/entityTypes.d";
import * as types from "./actionTypes";
import axios from "axios";

export function createBugSuccess(bug: IBug): AnyAction {
  return { type: types.CREATE_BUG_SUCCESS, bug };
}

export function loadBugSuccess(bugs: IBug[]): AnyAction {
  return { type: types.LOAD_BUG_SUCCESS, bugs };
}

export function updateBugSuccess(bug: IBug): AnyAction {
  return { type: types.UPDATE_BUG_SUCCESS, bug };
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

export function createBug(
  languageId: string,
  environmentType: string,
  environmentId: string,
  bug: IBug
) {
  return function (dispatch: Dispatch) {
    return axios
      .post<IBug>(
        `https://cors-anywhere.herokuapp.com/https://bugsreminder.azurewebsites.net/api/languages/${languageId}/${environmentType}/${environmentId}/bugs`,
        bug
      )
      .then((res) => {
        dispatch(createBugSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateBug(
  languageId: string,
  environmentType: string,
  environmentId: string,
  bug: IBug
) {
  return function (dispatch: Dispatch) {
    return axios
      .put<IBug>(
        `https://cors-anywhere.herokuapp.com/https://bugsreminder.azurewebsites.net/api/languages/${languageId}/${environmentType}/${environmentId}/bugs/${bug.id}`,
        bug
      )
      .then((res) => {
        dispatch(updateBugSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
