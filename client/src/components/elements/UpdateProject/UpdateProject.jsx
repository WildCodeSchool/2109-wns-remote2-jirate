import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SmallModal from '../../shared/Modal/SmallModal';

// Request Update Project By ID
const UPDATE_PROJECT_BY_ID = gql`
  mutation UpdateProject($input: UpdateProjectInput) {
    updateProject(input: $input) {
      name
    }
  }
`;

const UpdateProject = ({ id, name, limitCollaborators, description, isOpen, handleClose }) => {
  const [updateProjectById, { data, loading, error }] = useMutation(UPDATE_PROJECT_BY_ID);
  const [inputName, setInputName] = useState(name);
  const [limitMembers, setLimitMembers] = useState(limitCollaborators);
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    setInputName(name);
    setLimitMembers(limitCollaborators);
    setDesc(description);
  }, [name, limitCollaborators, description]);

  const handleUpdateProject = e => {
    e.preventDefault();
    updateProjectById({ variables: { input: { name: inputName, limitCollaborators: limitMembers, description: desc, id } } });
    if (data) {
      window.location.reload();
    }
  };

  if (loading) return 'loading...';
  if (error) return 'error :(';

  return (
    <SmallModal handleClose={handleClose} isOpen={isOpen} ariaLabel="modal-edit-project" ariaDescribedby="modal-edit-project">
      <Box sx={style}>
        <Typography sx={{ textAlign: 'center', textTransform: 'uppercase' }} id="modal-modal-title" variant="h6" component="h2">
          Edit Project
        </Typography>
        <Box sx={{ padding: '4rem 10px' }}>
          <Box sx={containerInput}>
            <TextField
              value={inputName}
              onChange={e => setInputName(e.target.value)}
              id="outlined-basic"
              label="Nom du projet"
              variant="outlined"
              sx={{ width: '100%' }}
            >
              Nom du projet
            </TextField>
          </Box>
          <Box sx={containerInput}>
            <InputLabel id="demo-simple-select-label" sx={{ width: '100%' }}>
              Limit collaborators
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={limitMembers}
              onChange={e => setLimitMembers(e.target.value)}
              sx={{ width: '100%' }}
            >
              {Array.from(Array(10).keys()).map((el, index) => (
                <MenuItem key={index} value={el + 1}>
                  {el + 1}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={containerInput}>
            <TextField
              value={desc}
              onChange={e => setDesc(e.target.value)}
              id="outlined-basic"
              label="Description du projet"
              variant="outlined"
              multiline
              rows={10}
              sx={{ width: '100%' }}
            >
              Description du projet
            </TextField>
          </Box>

          <Button onClick={e => handleUpdateProject(e)} variant="contained" sx={StyledButtonSubmit}>
            Update Project
          </Button>
        </Box>
      </Box>
    </SmallModal>
  );
};

// Add PropsType
UpdateProject.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  limitCollaborators: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default UpdateProject;

// ------------------------------------------------------------
// Adding style

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

const StyledButtonSubmit = {
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

const containerInput = {
  margin: '2rem 0 2rem 0',
};
