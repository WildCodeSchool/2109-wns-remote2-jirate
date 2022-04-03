import React from 'react';
import { Box, Typography, Avatar, CardContent, Card } from '@mui/material';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';

const CardTask = ({ isSelected, title, date, completed }) => {
  const cardMouving = isSelected ? '#F2F2F2' : '#FFFFFF';

  const priorityItem = {
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: 'rgba(140, 0, 250, 0.2)',
    fontWeight: 'light',
    borderRadius: 1,
    marginLeft: 1,
  };

  return (
    <Card sx={{ display: 'flex', margin: '10px 0', backgroundColor: cardMouving, justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {title}
          </Typography>
          <Typography sx={{ margin: '5px 0' }} component="p" variant="p">
            {date}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography component="p" variant="p">
              priority:
            </Typography>
            <Typography sx={priorityItem} component="p" variant="p">
              hight
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', pl: 3, pb: 3, pt: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </Box>
      </Box>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>100%</Typography>
        <ProgressBar completed={completed} />
        <Typography>{completed}%</Typography>
      </Box>
    </Card>
  );
};

// Add Types
CardTask.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default CardTask;
