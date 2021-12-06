import { useQuery, gql } from '@apollo/client';
import { Container, Stack, Typography } from '@mui/material';

// Import components
import TableComponent from '../../shared/Table/Table';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
      </Stack>
      <TableComponent projects={data.projects} headCells={headCells} />;
    </Container>
  );
};

export default Project;
