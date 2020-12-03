import React, { ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { IBug } from "../../types/entityTypes.d";
import TextInput from "../common/TextInput";

interface BugFormProps {
  bug: IBug;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function BugForm({ bug, onChange }: BugFormProps) {
  return (
    <Form>
      <TextInput
        label="Name"
        id="addName"
        name="name"
        type="text"
        placeholder="Descriptive bug name"
        value={bug.name}
        onChange={onChange}
      />
      <TextInput
        label="Description"
        id="addDescription"
        name="description"
        type="textarea"
        placeholder="Describe the bug in detail"
        value={bug.description}
        onChange={onChange}
      />
      <Button type="submit" variant="success">
        Confirm
      </Button>
    </Form>
  );
}
