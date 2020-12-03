import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers";
import * as bugActions from "../../redux/actions/bugActions";
import * as languageActions from "../../redux/actions/languageActions";
import * as frameworkActions from "../../redux/actions/frameworkActions";
import * as libraryActions from "../../redux/actions/libraryActions";
import {
  IBug,
  IFramework,
  ILanguage,
  ILibrary,
} from "../../types/entityTypes.d";
import FrameworkBugList from "./FrameworkBugList";
import { match, RouteComponentProps, useParams } from "react-router-dom";
import TextInput from "../common/TextInput";
import BugForm from "./BugForm";

type TParams = {
  bugId: string;
  environmentId: string;
  environmentType: string;
  languageId: string;
};

interface ParamTypes {
  languageId: string;
  environmentType: string;
  environmentId: string;
  bugId: string;
}

interface OwnProps {}

interface ManageBugPageProps extends OwnProps, RouteComponentProps<TParams> {}

function ManageBugPage({ match }: ManageBugPageProps) {
  const {
    languageId,
    environmentType,
    environmentId,
    bugId,
  } = useParams<ParamTypes>();

  const [bug, setBug] = useState<IBug>({
    name: "",
    description: "",
    languageId: languageId,
    frameworkId: environmentType === "frameworks" ? environmentId : "",
    libraryId: environmentType === "libraries" ? environmentId : "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBug((prevBug) => ({ ...prevBug, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      <BugForm onChange={handleChange} bug={bug} />
    </Container>
  );
}

function mapStateToProps(
  state: RootState,
  ownProps: RouteComponentProps<TParams>
) {
  const bugId = ownProps.match.params.bugId;
  const environmentType = ownProps.match.params.environmentType;
  const languageId = ownProps.match.params.languageId;
  const environmentId = ownProps.match.params.environmentId;
  return {
    bugs: state.bugs,
    languages: state.languages,
    frameworks: state.frameworks,
    libraries: state.libraries,
  };
}

const mapDispatchToProps = {
  createBug: bugActions.createBug,
  loadBugs: bugActions.loadBugs,
  loadLanguages: languageActions.loadLanguages,
  loadFrameworks: frameworkActions.loadFrameworks,
  loadLibraries: libraryActions.loadLibraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBugPage);
