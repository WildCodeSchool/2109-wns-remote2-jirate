import React, { useState, useContext } from 'react';
import { useMutation, gql } from '@apollo/client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { AuthContext } from '../../context/AuthContext';

let valeurs = Array.from(Array(15).keys());

const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput) {
    createProject(input: $input) {
      name
    }
  }
`;

const FormCreateProject = () => {
  const { user } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [limitCollaborators, setLimitCollaborators] = useState(0);
  const [description, setDescription] = useState('');

  const [createProject] = useMutation(CREATE_PROJECT);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const onSubmit = async () => {
    const response = await createProject({
      variables: { input: { name, description, limitCollaborators, userId: user, token: 'token' } },
    });

    console.log(response);
    if (response.data && response.data.createProject.name === name) {
      window.location.href = '/dashboard/projects';
    }
  };

  return (
    <Box sx={style}>
      <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
        <TextField value={name} onChange={e => setName(e.target.value)} id="outlined-basic" label="Nom du projet" variant="outlined" fullWidth>
          Nom du projet
        </TextField>
      </Box>

      <Box sx={{ mt: 2, mb: 3, width: '100%' }}>
        <InputLabel id="demo-simple-select-label">
          <Typography sx={{ color: 'rgb(99, 115, 129)', fontfamily: '"Public Sans", sans-serif', mb: 2 }} variant="h5" component="h5" gutterBottom>
            Nombre de collaborateurs
          </Typography>
        </InputLabel>
        <Select
          defaultValue={1}
          value={limitCollaborators}
          onChange={e => setLimitCollaborators(e.target.value)}
          inputProps={{
            id: 'demo-simple-select-label-native',
          }}
          fullWidth
        >
          {valeurs.map(index => (
            <MenuItem key={index} value={index}>
              {index}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
        <TextField
          alue={description}
          onChange={e => setDescription(e.target.value)}
          id="outlined-multiline-static"
          label="Description du projet"
          multiline
          rows={10}
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box sx={{ mb: 1, mt: 1, width: '100%' }}>
        <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} /> Créer le lien d'invitation
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button onClick={onSubmit} variant="contained" sx={StyledButtonSubmit}>
          Créer le projet
        </Button>
      </Box>
    </Box>
  );
};

export default FormCreateProject;

const style = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexDirection: 'column',
  pl: 3,
  pr: 7,
  bgcolor: 'background.paper',
  borderRadius: 1,
  width: '50%',
};

const StyledButtonSubmit = {
  backgroundColor: '#0047FC',
  color: '#ffffff',
  width: '280px',
  height: '52px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#0047FC',
    color: '#FFFFFF',
  },
};
