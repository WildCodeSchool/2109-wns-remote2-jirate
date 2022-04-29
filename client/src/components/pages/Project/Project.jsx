import React, { useState, useEffect, useContext } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Container, Stack, Typography } from '@mui/material';

import { AuthContext } from '../../../context/AuthContext';

// Import components
import TableComponent from '../../shared/Table/Table';
import TableComponentLoading from '../../shared/Table/TableLoading';
import ModalError from '../../shared/ModalError/ModalError';
import CreateProject from '../../elements/CreateProject/CreateProject';
import UpdateProject from '../../elements/UpdateProject/UpdateProject';

const GET_PROJECTS_BY_USER_ID = gql`
  mutation GetProjectsByUserId($input: GetProjectsByUserIdInput) {
    getProjectsByUserId(input: $input) {
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
  const { user } = useContext(AuthContext);
  const [getProjectByUserId, { loading, error, data }] = useMutation(GET_PROJECTS_BY_USER_ID);
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

  useEffect(() => {
    getProjectByUserId({ variables: { input: { userId: user } } });
  }, []);

  if (error) return <p>Error :(</p>;

  const ComponentData = () => (
    <>
      {data === undefined || data.getProjectsByUserId.length === 0 ? (
        <h2>Vous n'avez pas de projects</h2>
      ) : (
        <TableComponent
          handleEdit={(id, name, limit, desc) => handleEditProject(id, name, limit, desc)}
          handleDelete={(name, id) => handleProject(name, id)}
          projects={data.getProjectsByUserId}
          headCells={headCells}
        />
      )}
    </>
  );

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3" component="h3" gutterBottom>
          Projects
        </Typography>
        <CreateProject />
      </Stack>
      {loading ? <TableComponentLoading headCells={headCells} /> : <ComponentData />}
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
