import React, { useState } from 'react';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import FormCreateProject from '../../elements/FormCreateProject';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  height: '85%',
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: 'flex',
};

const StyledButton = {
  backgroundColor: '#000000',
  color: '#ffffff',
  width: '180px',
  height: '52px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#000000',
    color: '#fffffff',
  },
};

const styleSecondBox = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  p: 5,
  m: 5,
  bgcolor: 'background.paper',
  borderRadius: 1,
  width: '50%',
};

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" sx={{ ...StyledButton }} onClick={handleOpen}>
        Create a project
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormCreateProject />

          <Divider orientation="vertical" flexItem />

          <Box sx={styleSecondBox}>hey</Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
