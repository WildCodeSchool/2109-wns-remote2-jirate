import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useForm, Controller } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoginSchema } from '../../utils/Validation/validation';
import PropTypes from 'prop-types';
import { styledButton } from './LoginStyle';
import { AuthContext } from '../../../context/AuthContext';
import AlertMessage from '../../shared/AlertMessage/AlertMessage';
const content = {
  email: 'Email',
  password: 'Mot de passe',
  login: 'Se connecter',
  forgotPassword: 'Mot de passe oublié ?',
  rememberMe: 'Se souvenir de moi',
};

const LOGIN = gql`
  mutation Login($input: SignInInput) {
    signInUser(input: $input) {
      token
    }
  }
`;

const LoginForm = () => {
  const { getLoggedIn, loggedIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();
  const [login, { loading, error, data: loginData }] = useMutation(LOGIN);
  const [isError, setIsError] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };

  useEffect(() => {
    if (loggedIn) {
      history('/dashboard/projects');
    }
  });

  const onSubmitt = async data => {
    try {
      const { email, password } = data;

      const response = await login({
        variables: {
          input: { email, password },
        },
      });

      if (response) {
        const token = response && response.data && response.data.signInUser && response.data.signInUser.token;
        if (token) {
          localStorage.setItem('jwt_token', token);
          getLoggedIn();
        }
      }
    } catch (err) {
      setIsError(true);
    }

    yupResolver(LoginSchema);
  };

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <>
      {isError && <AlertMessage errors="Your information is invalid" />}
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                variant="standard"
                autoComplete="username"
                {...register('email')}
                control={control}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                error={!!errors.email}
                fullWidth
                type="email"
                label={content.email}
                helperText={errors.email && errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                variant="standard"
                error={!!errors.password}
                control={control}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                {...register('password')}
                fullWidth
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                label={content.password}
                helperText={errors.password && errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel control={<Checkbox />} label={content.rememberMe} />
          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            {content.forgotPassword}
          </Link>
        </Stack>
        <Stack spacing={3} direction="row" justifyContent="center">
          <Button fullWidth size="large" type="submit" variant="contained" sx={{ ...styledButton }} onClick={handleSubmit(onSubmitt)}>
            {content.login}
          </Button>
        </Stack>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default LoginForm;
