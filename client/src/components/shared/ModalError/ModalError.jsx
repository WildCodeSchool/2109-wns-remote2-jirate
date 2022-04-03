import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';

import { gql, useMutation } from '@apollo/client';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  minHeight: 280,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const DELETE_PROJECT_BY_ID = gql`
  mutation DeleteProject($input: DeleteProjectInput) {
    deleteProject(input: $input) {
      id

    }
  }
`;

const ModalError = ({ isOpen, handleClose, projectName, id }) => {
  const [deleteProjectById, { data, loading, error }] = useMutation(DELETE_PROJECT_BY_ID);

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);

  if (error) console.log(error.message);

  const handleValidateDelete = e => {
    e.preventDefault();
    if (inputValue === projectName) {
      deleteProjectById({ variables: { input: {id} } });
      window.location.href = "/dashboard/projects"
    }
  };

  useEffect(() => {
    if (inputValue !== projectName) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  });

  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box>
          <Typography id="modal-modal-title" component="h3">
            Project: {projectName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete the project "{projectName}" ? Confirm by entering the name below.
          </Typography>
          <TextField
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            color={inputError ? 'error' : 'success'}
            sx={{ marginTop: '15px' }}
            fullWidth
            id="input-project-name-delete"
            label="Project name"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          <Button onClick={handleClose} color="error" variant="text">
            Cancel
          </Button>
          <Button onClick={e => handleValidateDelete(e)} sx={{ marginLeft: '20px' }} variant="text">
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalError;

ModalError.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  projectName: PropTypes.string,
};





