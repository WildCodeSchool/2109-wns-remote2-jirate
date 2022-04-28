import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';

import FormCreateProject from '../FormCreateProject';
import BasicModal from '../../shared/Modal/BasicModal';
import BackgroundImage from '../../../assets/images/create-project/background.png';

const CreateProject = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" sx={{ ...StyledButton }} onClick={handleOpen}>
        Create a project
      </Button>
      <BasicModal handleClose={handleClose} open={open}>
        <Box sx={GlobalContainer}>
          <FormCreateProject />

          <Divider orientation="vertical" flexItem />

          <Box sx={BoxContainedImage}>
            <img src={BackgroundImage} alt="background-homepage" />
          </Box>
        </Box>
      </BasicModal>
    </div>
  );
};

export default CreateProject;

// Adding style

const GlobalContainer = {
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

const BoxContainedImage = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  p: 5,
  m: 5,
  bgcolor: 'background.paper',
  borderRadius: 1,
  width: '50%',
};
