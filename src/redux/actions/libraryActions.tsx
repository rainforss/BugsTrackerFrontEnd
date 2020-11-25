import { AnyAction, Dispatch } from "redux";
import { ILibrary } from "../../types/entityTypes.d";
import * as types from "./actionTypes";
import axios from "axios";

export function loadLibrarySuccess(libraries: ILibrary[]): AnyAction {
  return { type: types.LOAD_LIBRARY_SUCCESS, libraries };
}

export function loadLibraries(languageId: string) {
  return function (dispatch: Dispatch) {
    return axios
      .get<ILibrary[]>(
        `https://cors-anywhere.herokuapp.com/https://bugsreminder.azurewebsites.net/api/languages/${languageId}/libraries`
      )
      .then((res) => {
        dispatch(loadLibrarySuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
