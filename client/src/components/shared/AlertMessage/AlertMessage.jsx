import React from 'react';
import Alert from '@mui/material/Alert';

const AlertMessage = ({ errors }) => {
  return (
    <Alert sx={{ mb: 5 }} variant="filled" severity="error">
      {errors}
    </Alert>
  );
};

export default AlertMessage;
