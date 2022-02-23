import React, { useState } from 'react';

import { useQuery, gql } from '@apollo/client';
import { Container, Stack, Typography, Button } from '@mui/material';

// Import components
import TableComponent from '../../shared/Table/Table';
import TableComponentLoading from '../../shared/Table/TableLoading';
import ModalError from '../../shared/ModalError/ModalError';
import BasicModal from '../../shared/Modal/BasicModal';
import SmallModal from '../../shared/Modal/SmallModal';

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
  const [isEdit, setEdit] = useState(false);

  const handleProject = (name, id) => {
    setNameProject(name);
    setProjectId(id);
    setOpen(true);
  };

  const handleEditProject = (id, name) => {
    setNameProject(name);
    setEdit(true);
    setProjectId(id);
  };

  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3" component="h3" gutterBottom>
          Projects
        </Typography>

        <BasicModal />
      </Stack>
      {loading ? (
        <TableComponentLoading headCells={headCells} />
      ) : (
        <TableComponent
          handleEdit={(id, name) => handleEditProject(id, name)}
          handleDelete={(name, id) => handleProject(name, id)}
          projects={data.projects}
          headCells={headCells}
        />
      )}
      <ModalError id={projectId} projectName={nameProject} isOpen={open} handleClose={() => setOpen(false)} />
      <SmallModal name={nameProject} id={projectId} isOpen={isEdit} handleClose={() => setEdit(false)} />
    </Container>
  );
};

export default Project;
