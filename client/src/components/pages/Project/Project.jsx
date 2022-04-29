import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Stack, Typography } from '@mui/material';

// Import components
import TableComponent from '../../shared/Table/Table';
import TableComponentLoading from '../../shared/Table/TableLoading';
import ModalError from '../../shared/ModalError/ModalError';
import CreateProject from '../../elements/CreateProject/CreateProject';
import UpdateProject from '../../elements/UpdateProject/UpdateProject';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      createdAt
      limitCollaborators
      description
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
  const [LimitMembers, setLimitMembers] = useState(0);
  const [description, setDescription] = useState('');

  const handleProject = (name, id) => {
    setNameProject(name);
    setProjectId(id);
    setOpen(true);
  };

  const handleEditProject = (id, name, limit, desc) => {
    setNameProject(name);
    setLimitMembers(limit);
    setDescription(desc);
    setProjectId(id);
    setEdit(true);
  };

  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3" component="h3" gutterBottom>
          Projects
        </Typography>
        <CreateProject />
      </Stack>
      {loading ? (
        <TableComponentLoading headCells={headCells} />
      ) : (
        <TableComponent
          handleEdit={(id, name, limit, desc) => handleEditProject(id, name, limit, desc)}
          handleDelete={(name, id) => handleProject(name, id)}
          projects={data.projects}
          headCells={headCells}
        />
      )}
      <ModalError id={projectId} projectName={nameProject} isOpen={open} handleClose={() => setOpen(false)} />
      <UpdateProject
        limitCollaborators={LimitMembers}
        description={description}
        name={nameProject}
        id={projectId}
        isOpen={isEdit}
        handleClose={() => setEdit(false)}
      />
    </Container>
  );
};

export default Project;
