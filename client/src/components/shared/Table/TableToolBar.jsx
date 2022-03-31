import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

// Import Icons
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

const DELETE_MULTIPLE_PROJECTS = gql`
  mutation DeleteProjects($input: DeleteProjectsInput) {
    deleteProjects(input: $input) {
      ids
    }
  }
`;

const TableToolBar = ({ numSelected, filterName, onFilterName, projectsIds }) => {
  const [deleteProjectsByIds, { data, loading, error }] = useMutation(DELETE_MULTIPLE_PROJECTS);

  const handleDeleteProjects = () => {
    if (numSelected > 0) {
      deleteProjectsByIds({ variables: { input: { ids: projectsIds } } });
    }
  };

  if (data) window.location.reload();

  if (loading) return 'Loading...';

  if (error) return 'error :(';

  return (
    <RootStyle sx={{ ...(numSelected > 0 && { color: 'primary.main', bgcolor: 'primary.lighter' }) }}>
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Box component={SearchIcon} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={() => handleDeleteProjects()}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
};

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

export default TableToolBar;

// Add type for TableToolBar function
TableToolBar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  ProjectsIds: PropTypes.array,
};
