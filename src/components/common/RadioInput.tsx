import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

type Environment = {
  name: string;
  id: string;
};

type RadioInputProps = {
  name: string;
  options: Array<Environment>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selected: string;
};

export default function RadioInput({
  name,
  options,
  onChange,
  selected,
}: RadioInputProps) {
  return (
    <Form.Group>
      {options.map((option: Environment) => (
        <Form.Check
          inline
          key={option.id}
          type="radio"
          label={option.name}
          id={option.name}
          name={name}
          value={option.id}
          onChange={onChange}
          checked={option.id === selected}
        ></Form.Check>
      ))}
    </Form.Group>
  );
}
