import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LoginForm from './LoginForm';
import imgLogin from '../../../assets/images/Login-img.png';
import Logo from '../../shared/Logo';
import { ContentStyle, HeaderStyle, RootStyle, SectionStyle } from './LoginStyle';

const content = {
  title: 'Connexion',
  register: "Tu n'as pas encore de compte ?",
  register2: 'Inscris-toi',
  welcome: 'Wesh, Te revoila chacal',
};

const Login = () => {
  return (
    <>
      <RootStyle>
        <HeaderStyle>
          <Logo />

          <Typography
            variant="body2"
            align="right"
            sx={{
              display: { xs: 'none', sm: 'block' },
              mt: { md: -2 },
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
