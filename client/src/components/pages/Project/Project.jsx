import { useQuery, gql } from '@apollo/client';
import { Container, Stack } from '@mui/material';

// Import components
import TableComponent from '../../shared/Table/Table';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      name
      createdAt
      user {
        firstname
      }
    }
  }
`;

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data.projects) console.log(data);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="center" mt={5}>
        <TableComponent projects={data.projects} />
      </Stack>
    </Container>
  );
};

export default Project;
