import React, { useState } from 'react';

import { useQuery, gql } from '@apollo/client';
import { Container, Stack, Typography } from '@mui/material';

// Import components
import TableComponent from '../../shared/Table/Table';
import TableComponentLoading from '../../shared/Table/TableLoading';
import ModalError from '../../shared/ModalError/ModalError';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      createdAt
      user {
        firstname
      }
    }
  }
`;

const headCells = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'created', label: 'Created', alignRight: false },
  { id: 'nbCollaborator', label: 'Nb Collaborators', alignRight: false },
  { id: 'creator', label: 'Creator' },
  { id: '', alignRight: false },
];

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const [open, setOpen] = useState(false);
  const [nameProject, setNameProject] = useState('');
  const [projectId, setProjectId] = useState('');

  const handleProject = (name, id) => {
    setNameProject(name);
    setProjectId(id);
    setOpen(true);
  };

  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography gutterBottom>Projects</Typography>
      </Stack>
      {loading ? (
        <TableComponentLoading headCells={headCells} />
      ) : (
        <TableComponent handleDelete={(name, id) => handleProject(name, id)} projects={data.projects} headCells={headCells} />
      )}
      <ModalError id={projectId} projectName={nameProject} isOpen={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default Project;
