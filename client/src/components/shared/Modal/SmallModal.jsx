import React from 'react';
import PropTypes from 'prop-types';

// IMPORT MATERIAL UI COMPONENTS
import Modal from '@mui/material/Modal';

const SmallModal = ({ isOpen, handleClose, children }) => {
  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-edit-project" aria-describedby="modal-edit-project">
      {children}
    </Modal>
  );
};

// Add PropsType
SmallModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SmallModal;
