import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RadioInput from "../common/RadioInput";
import SelectInput from "../common/SelectInput";
import * as languageActions from "../../redux/actions/languageActions";
import * as frameworkActions from "../../redux/actions/frameworkActions";
import * as libraryActions from "../../redux/actions/libraryActions";
import { RootState } from "../../redux/reducers";
import { IFramework, ILanguage, ILibrary } from "../../types/entityTypes.d";

interface State {
  languageId: string;
  environmentType: string;
  environmentId: string;
}

interface HomePageProps {
  loadLanguages(): Promise<void>;
  loadFrameworks(languageId: string): Promise<void>;
  loadLibraries(languageId: string): Promise<void>;
  languages: ILanguage[];
  frameworks: IFramework[];
  libraries: ILibrary[];
}

function HomePage({
  languages,
  loadLanguages,
  frameworks,
  loadFrameworks,
  libraries,
  loadLibraries,
}: HomePageProps) {
  const [language, setLanguage] = useState<State>({
    languageId: "",
    environmentType: "",
    environmentId: "",
  });

  useEffect(() => {
    loadLanguages().catch((error) => {
      alert("Loading languages failed" + error);
    });
  }, [loadLanguages]);

  useEffect(() => {
    if (language.environmentType === "frameworks") {
      loadFrameworks(language.languageId).catch((error) => {
        alert("Loading frameworks failed" + error);
      });
    }
    if (language.environmentType === "libraries") {
      loadLibraries(language.languageId).catch((error) => {
        alert("Loading libraries failed" + error);
      });
    }
  }, [
    language.languageId,
    language.environmentType,
    loadFrameworks,
    loadLibraries,
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "environmentType") {
      setLanguage({
        ...language,
        environmentId: "",
        [e.currentTarget.name]: e.currentTarget.value,
      });
    } else {
      setLanguage({
        ...language,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Bugs Administration</h1>
          <p>Bugs and solutions tracker for developers</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Learn more
          </Link>
        </Container>
      </Jumbotron>
      <Container>
        <h3>Get your bugs!</h3>
        <SelectInput
          id="lang"
          name="languageId"
          label="Language"
          value={language.languageId}
          options={languages}
          onChange={handleChange}
        />
        <RadioInput
          name="environmentType"
          onChange={handleChange}
          selected={language.environmentType}
          options={[
            { id: "frameworks", name: "Frameworks" },
            { id: "libraries", name: "Libraries" },
          ]}
        />
        {language.environmentType === "frameworks" ? (
          <SelectInput
            id="frameworks"
            name="environmentId"
            label="Framework"
            value={language.environmentId}
            options={frameworks}
            onChange={handleChange}
          />
        ) : null}
        {language.environmentType === "libraries" ? (
          <SelectInput
            id="libraries"
            name="environmentId"
            label="Library"
            value={language.environmentId}
            options={libraries}
            onChange={handleChange}
          />
        ) : null}

        <Link
          to={`/languages/${language.languageId}/${language.environmentType}/${language.environmentId}/bugs`}
        >
          <Button variant="success">Load Bugs</Button>
        </Link>
      </Container>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    languages: state.languages,
    frameworks: state.frameworks,
    libraries: state.libraries,
  };
}

const mapDispatchToProps = {
  loadLanguages: languageActions.loadLanguages,
  loadFrameworks: frameworkActions.loadFrameworks,
  loadLibraries: libraryActions.loadLibraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
