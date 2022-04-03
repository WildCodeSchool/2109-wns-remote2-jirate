import { Box } from '@mui/material';

const ProgressBar = ({ completed }) => {
  const progressColor = () => {
    if (completed <= 20) {
      return '#E20303';
    } else if (completed > 20 && completed <= 40) {
      return '#de5912';
    } else if (completed > 40 && completed <= 60) {
      return '#FF8A00';
    } else if (completed > 60 && completed <= 80) {
      return '#01D33C';
    } else {
      return '#00f76f';
    }
  };

  const containerStyles = {
    height: '80%',
    width: 10,
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    transform: 'rotate(180deg)',
  };

  const fillerStyles = {
    height: `${completed}%`,
    width: 10,
    backgroundColor: progressColor(),
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <Box style={containerStyles}>
      <Box style={fillerStyles}>
        <span style={labelStyles}></span>
      </Box>
    </Box>
  );
};

export default ProgressBar;
