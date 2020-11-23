import React from "react";
import { Form } from "react-bootstrap";

type Language = {
  id: string;
  name: string;
};

type SelectInputProps = {
  id: string;
  name: string;
  label: string;
  value?: string;
  options: Array<Language>;
};

export default function SelectInput({
  id,
  name,
  label,
  value,
  options,
}: SelectInputProps) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" name={name} value={value}>
        {options.map((option: Language) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}
