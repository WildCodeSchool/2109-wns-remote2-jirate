import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';

// IMPORT MATERIAL UI COMPONENTS
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

// Request Update Project By ID
const UPDATE_PROJECT_BY_ID = gql`
  mutation UpdateProject($input: UpdateProjectInput) {
    updateProject(input: $input) {
      name
    }
  }
`;

const SmallModal = ({ isOpen, handleClose, id, name, limitCollaborators, description }) => {
  const [updateProjectById, { data, loading, error }] = useMutation(UPDATE_PROJECT_BY_ID);

  const [inputName, setInputName] = useState(name);
  const [limitMembers, setLimitMembers] = useState(limitCollaborators);
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    setInputName(name);
    setLimitMembers(limitCollaborators);
    setDesc(description);
  }, [name, limitCollaborators, description]);

  const handleUpdateProject = () => {
    updateProjectById({ variables: { input: { name: inputName, limitCollaborators: limitMembers, description, id } } });
  };

  if (loading) return 'loading...';
  if (error) return 'error :(';

  console.log(data);

  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-edit-project" aria-describedby="modal-edit-project">
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
              id="inputName"
              sx={{ width: '100%' }}
            >
              Nom du projet
            </TextField>
          </Box>
          <Box sx={containerInput}>
            <InputLabel id="demo-simple-select-label" fullWidth>
              Limit collaborators
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={limitMembers}
              onChange={e => setLimitMembers(e.target.value)}
              fullWidth
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
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
              id="desc"
              sx={{ width: '100%' }}
            >
              Description du projet
            </TextField>
          </Box>

          <Button onClick={() => handleUpdateProject()} variant="contained" sx={StyledButtonSubmit}>
            Update Project
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

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

export default SmallModal;
