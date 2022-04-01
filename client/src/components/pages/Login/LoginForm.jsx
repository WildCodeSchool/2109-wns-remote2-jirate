import React, { useContext } from 'react';
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
import useAuthUser from '../../../hooks/useAuthUser';

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
  const { setAuthUser } = useAuthUser();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { loading, error, data: loginData }] = useMutation(LOGIN);
  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };

  // React.useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/dashboard');
  //   }
  // });

  const onSubmitt = async data => {
    const { email, password } = data;
    const response = await login({
      variables: {
        input: { email, password },
      },
    });

    if (response) {
      const token = response && response.data && response.data.signInUser && response.data.signInUser.token;
      if (token) {
        setAuthUser(token);
      }
    }

    resolver: yupResolver(LoginSchema);
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
