import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LoginForm from './LoginForm';

const content = {
  title: 'Connexion',
  register: "Tu n'as pas encore de compte ?",
  register2: 'Inscris-toi',
};

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

const Login = () => {
  return (
    <>
      {content.register} &nbsp;
      <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
        {content.register2}
      </Link>
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 3 }}>
            <Typography variant="h4" gutterBottom align="center">
              {content.title}
            </Typography>
          </Stack>
          <LoginForm />
        </ContentStyle>
      </Container>
    </>
  );
};

export default Login;
