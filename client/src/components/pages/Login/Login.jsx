import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LoginForm from './LoginForm';
import Card from "@mui/material/Card";
import imgLogin from  '../../../assets/images/Login-img.png';
import Logo from "../../shared/Logo";


const content = {
  title: 'Connexion',
  register: "Tu n'as pas encore de compte ?",
  register2: 'Inscris-toi',
  welcome: 'Wesh, Te revoila chacal'
};

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7)
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

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
      <RootStyle title="Connexion">
        <HeaderStyle>
          <Logo />

          <Typography
              variant="body2"
              align="right"
              sx={{
                display: { xs: 'none', sm: 'block' },
                mt: { md: 4 },
              }}
          >
            {content.register} &nbsp;
            <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
              {content.register2}
            </Link>
          </Typography>
        </HeaderStyle>
      <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          {content.welcome}
        </Typography>
        <img src={imgLogin} alt="img-login" />
      </SectionStyle>
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
      </RootStyle>
    </>
  );
};

export default Login;
