import React, { ChangeEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IBug } from "../../types/entityTypes.d";
import TextInput from "../common/TextInput";

interface AddBugModalProps {
  handleShow: () => void;
  handleClose: () => void;
  onSubmit: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  bug: IBug;
  title: string | undefined;
}

export default function AddBugModal({
  handleShow,
  handleClose,
  onSubmit,
  onChange,
  show,
  bug,
  title,
}: AddBugModalProps) {
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a bug
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
