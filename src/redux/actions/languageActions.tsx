import { AnyAction, Dispatch } from "redux";
import { ILanguage } from "../../types/entityTypes.d";
import * as types from "./actionTypes";
import axios from "axios";

export function loadLanguageSuccess(languages: ILanguage[]): AnyAction {
  return { type: types.LOAD_LANGUAGE_SUCCESS, languages };
}

export function loadLanguages() {
  return function (dispatch: Dispatch) {
    return axios
      .get<ILanguage[]>(
        `https://cors-anywhere.herokuapp.com/https://bugsreminder.azurewebsites.net/api/languages/`
      )
      .then((res) => {
        dispatch(loadLanguageSuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
