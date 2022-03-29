import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import { gql, useMutation } from '@apollo/client';

// Import Icons
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

// ----------------------------------------------------------------
// REQUEST GRAPHQL API
const DELETE_PROJECTS = gql`
  mutation DeleteProjects($input: DeleteProjectsInput) {
    deleteProjects(input: $input) {
      ids
    }
  }
`;

const TableToolBar = ({ numSelected, filterName, onFilterName, projectIds }) => {
  const [deleteProjects, { data, loading, error }] = useMutation(DELETE_PROJECTS);

  const deleteProjectsHandle = e => {
    console.log(projectIds)
    e.preventDefault();
    // deleteProjects({ variables: { input: { projectIds } } });
    // window.location.href = '/dashboard/projects';
  };

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
          <IconButton onClick={e => deleteProjectsHandle(e)}>
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
};
