import React, { ChangeEvent, Component, Reducer, SyntheticEvent } from "react";
import { Button, Container, Form } from "react-bootstrap";
import RadioInput from "../common/RadioInput";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers";
import * as bugActions from "../../redux/actions/bugActions";
import { IBug } from "../../types/entityTypes.d";
import { AnyAction, Dispatch } from "redux";

interface StateProps {
  bug: IBug;
}

interface IBugsPageProps {
  dispatch: Dispatch<AnyAction>;
  bugs: Array<IBug>;
}

class Bug implements IBug {
  constructor(
    name: string = "",
    description: string = "",
    languageId: string = "",
    libraryId: string = "",
    frameworkId: string = ""
  ) {
    this.name = name;
    this.description = description;
    this.languageId = languageId;
    this.libraryId = libraryId;
    this.frameworkId = frameworkId;
  }
  name: string;
  description: string;
  languageId: string;
  libraryId: string;
  frameworkId: string;
}

class BugsPage extends Component<IBugsPageProps, StateProps> {
  state = {
    bug: new Bug(),
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const bug = {
      ...this.state.bug,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.setState({ bug });
  };

  handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.dispatch(bugActions.createBug(this.state.bug));
  };

  render() {
    console.log(this.state.bug);
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h2>Bugs</h2>
          <h3>Add Bug</h3>
          <TextInput
            label="Name"
            id="bugName"
            name="name"
            type="text"
            placeholder="weird bug"
            onChange={this.handleChange}
          />
          <TextInput
            label="Description"
            id="bugDescription"
            name="description"
            type="textarea"
            placeholder="The bug looks like..."
            onChange={this.handleChange}
          />
          <SelectInput
            id="language"
            name="language"
            label="Language"
            value="2"
            options={[
              { id: "1", name: "Javascript" },
              { id: "2", name: "Python" },
              { id: "3", name: "C#" },
            ]}
          />
          <RadioInput
            name="environmentType"
            options={[
              { name: "Framework", id: "framework" },
              { name: "Library", id: "library" },
            ]}
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
          {this.props.bugs.map((bug: IBug) => (
            <div key={bug.name}>{bug.name}</div>
          ))}
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    bugs: state.bugs,
  };
}

export default connect(mapStateToProps)(BugsPage);
