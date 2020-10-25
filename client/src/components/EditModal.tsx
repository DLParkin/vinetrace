import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface Props {
  toggled: () => void;
  modal: boolean;
  lotCode: string;
}

// Adds modal to represent if a user was to edit a listing
export const EditModal = ({ toggled, modal, lotCode }: Props) => {
  return (
    <Modal isOpen={modal} fade={false} toggle={toggled}>
      <ModalHeader toggle={toggled}>{`Edit ${lotCode}`}</ModalHeader>
      <ModalBody>We could do some awesome editing here</ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggled}>
          Save
        </Button>
        <Button color="danger" onClick={toggled}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
