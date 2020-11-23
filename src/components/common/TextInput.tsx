import { type } from "os";
import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

type TextInputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
  label,
  id,
  type,
  placeholder,
  name,
  value,
  onChange,
}: TextInputProps) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
}
