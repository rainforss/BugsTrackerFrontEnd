import React, { ChangeEvent, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
import { useParams } from "react-router-dom";
import AddBugModal from "./AddBugModal";

interface IBugsPageProps {
  createBug: (
    languageId: string,
    environmentType: string,
    environmentId: string,
    bug: IBug
  ) => Promise<void>;
  loadBugs(
    languageId: string,
    environmentType: string,
    environmentId: string
  ): Promise<void>;
  loadLanguages(): Promise<void>;
  loadLibraries(languageId: string): Promise<void>;
  loadFrameworks(languageId: string): Promise<void>;
  bugs: IBug[];
  languages: ILanguage[];
  frameworks: IFramework[];
  libraries: ILibrary[];
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

const BugsPage = ({
  loadBugs,
  bugs,
  languages,
  frameworks,
  libraries,
  loadLanguages,
  loadFrameworks,
  loadLibraries,
  createBug,
}: IBugsPageProps) => {
  const {
    languageId,
    environmentType,
    environmentId,
  } = useParams<ParamTypes>();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [bug, setBug] = useState<IBug>({
    name: "",
    description: "",
    languageId: languageId,
    frameworkId: environmentType === "frameworks" ? environmentId : "",
    libraryId: environmentType === "libraries" ? environmentId : "",
  });

  useEffect(() => {
    loadBugs(languageId, environmentType, environmentId).catch((error) => {
      alert("Loading bugs failed" + error);
    });
  }, [environmentId, environmentType, languageId, loadBugs]);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBug({ ...bug, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createBug(languageId, environmentType, environmentId, bug).catch(
      (error) => {
        alert("Adding bugs failed" + error);
      }
    );
    console.log("aped");
  };

  console.log(bug);

  return (
    <Container>
      <AddBugModal
        show={showModal}
        handleClose={handleClose}
        handleShow={handleShow}
        onSubmit={handleSubmit}
        onChange={handleChange}
        bug={bug}
        title={
          environmentType === "frameworks"
            ? frameworks.find((framework) => framework.id === environmentId)
                ?.name
            : libraries.find((library) => library.id === environmentId)?.name
        }
      />
      <FrameworkBugList bugs={bugs} />
    </Container>
  );
};

function mapStateToProps(state: RootState) {
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

export default connect(mapStateToProps, mapDispatchToProps)(BugsPage);
