import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { removeChannel } from '../../actions/index.js';

export default ({ hideModal, modalData }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeChannel(modalData.channelId));
    hideModal();
  };

  return (
    <Modal show onHide={hideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to remove this channel?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} onReset={() => hideModal()}>
          <Form.Group>
            <Button variant="outline-danger" type="submit">Remove</Button>
            {' '}
            <Button variant="outline-secondary" type="reset">Cancel</Button>
            {' '}
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
