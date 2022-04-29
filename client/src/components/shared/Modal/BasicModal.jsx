import React from 'react';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

const BasicModal = ({ open, handleClose, children, ariaLabel, ariaDescribedby }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby={ariaLabel} aria-describedby={ariaDescribedby}>
      {children}
    </Modal>
  );
};

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  ariaDescribedby: PropTypes.string.isRequired,
};

export default BasicModal;
