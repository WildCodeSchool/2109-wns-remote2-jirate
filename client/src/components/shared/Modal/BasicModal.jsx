import React from 'react';
import Modal from '@mui/material/Modal';

const BasicModal = ({ open, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      {children}
    </Modal>
  );
};

export default BasicModal;
