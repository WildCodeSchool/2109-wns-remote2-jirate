import React from 'react';
import PropTypes from 'prop-types';

// IMPORT MATERIAL UI COMPONENTS
import Modal from '@mui/material/Modal';

const SmallModal = ({ isOpen, handleClose, children, ariaLabel, ariaDescribedby }) => {
  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby={ariaLabel} aria-describedby={ariaDescribedby}>
      {children}
    </Modal>
  );
};

// Add PropsType
SmallModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  ariaDescribedby: PropTypes.string.isRequired,
};

export default SmallModal;
