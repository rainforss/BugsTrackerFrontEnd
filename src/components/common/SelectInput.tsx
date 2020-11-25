import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

type SelectInputProps = {
  id: string;
  name: string;
  label: string;
  value?: string;
  options: Array<any>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SelectInput({
  id,
  name,
  label,
  value,
  options,
  onChange,
}: SelectInputProps) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Please make a selection"
      >
        <option value="">Please make a selection</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}
