import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers";
import * as bugActions from "../../redux/actions/bugActions";
import { IBug } from "../../types/entityTypes.d";
import FrameworkBugList from "./FrameworkBugList";
import { useParams } from "react-router-dom";

interface IBugsPageProps {
  createBug: (bug: IBug) => void;
  loadBugs(
    languageId: string,
    environmentType: string,
    environmentId: string
  ): Promise<void>;
  bugs: Array<IBug>;
}

interface ParamTypes {
  languageId: string;
  environmentType: string;
  environmentId: string;
}

// class Bug implements IBug {
//   constructor(
//     name: string = "",
//     description: string = "",
//     languageId: string = "",
//     libraryId: string = "",
//     frameworkId: string = ""
//   ) {
//     this.name = name;
//     this.description = description;
//     this.languageId = languageId;
//     this.libraryId = libraryId;
//     this.frameworkId = frameworkId;
//   }
//   name: string;
//   description: string;
//   languageId: string;
//   libraryId: string;
//   frameworkId: string;
// }

const BugsPage = ({ loadBugs, bugs }: IBugsPageProps) => {
  const {
    languageId,
    environmentType,
    environmentId,
  } = useParams<ParamTypes>();

  useEffect(() => {
    loadBugs(languageId, environmentType, environmentId).catch((error) => {
      alert("Loading bugs failed" + error);
    });
  }, [environmentId, environmentType, languageId, loadBugs]);

  return (
    <Container>
      <FrameworkBugList bugs={bugs} />
    </Container>
  );
};

function mapStateToProps(state: RootState) {
  return {
    bugs: state.bugs,
  };
}

const mapDispatchToProps = {
  createBug: bugActions.createBug,
  loadBugs: bugActions.loadBugs,
};

export default connect(mapStateToProps, mapDispatchToProps)(BugsPage);
