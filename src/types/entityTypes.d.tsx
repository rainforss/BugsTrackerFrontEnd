import { AnyAction } from "redux";

export interface IBug {
  name: string;
  description: string;
  languageId: string;
  libraryId: string;
  frameworkId: string;
}

export interface BugAction extends AnyAction {}
