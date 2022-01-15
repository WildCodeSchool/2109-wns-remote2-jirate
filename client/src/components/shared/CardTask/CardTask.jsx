import React from 'react';

import { Box, Typography, IconButton, CardContent, CardMedia, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const CardTask = ({ title }) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', margin: '5px 0' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">{theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}</IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}</IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://www.booska-p.com/wp-content/uploads/2016/10/pnl-cover-dans-la-legende.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default CardTask;
