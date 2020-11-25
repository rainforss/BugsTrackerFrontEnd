export interface IBug {
  id?: string;
  name: string;
  description: string;
  languageId: string;
  libraryId?: string;
  frameworkId?: string;
}

export interface ILanguage {
  id?: string;
  name: string;
}

export interface IFramework {
  id?: string;
  name: string;
}

export interface ILibrary {
  id?: string;
  name: string;
}
