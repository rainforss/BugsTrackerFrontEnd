import React from "react";
import { Form } from "react-bootstrap";

type Environment = {
  name: string;
  id: string;
};

type RadioInputProps = {
  name: string;
  options: Array<Environment>;
};

export default function RadioInput({ name, options }: RadioInputProps) {
  return (
    <Form.Group>
      {options.map((option: Environment) => (
        <Form.Check
          key={option.id}
          type="radio"
          label={option.name}
          id={option.name}
          name={name}
          value={option.name}
        ></Form.Check>
      ))}
    </Form.Group>
  );
}
