import React, { useState, useEffect, useContext } from 'react';
import { useMutation, gql } from '@apollo/client';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styledButton } from './RegisterStyle';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../utils/Validation/validation';

import { AuthContext } from '../../../context/AuthContext';

const content = {
  firstname: 'Prénom',
  lastname: 'Nom',
  email: 'Email',
  password: 'Mot de passe',
  confirmPassword: 'Vérification du mot de passe',
  register: "S'inscrire",
  regulation:
    "J'ai lu et j'accepte la politique de confidentialité de JetBrains , " +
    "les conditions d'achat , le contrat de compte JetBrains et les conditions d'utilisation.",
};

const REGISTER = gql`
  mutation Register($input: CreateUserInput) {
    createUser(input: $input) {
      email
    }
  }
`;

const RegisterForm = props => {
  const { loggedIn } = useContext(AuthContext);
  const [registerMutation, { loading, error }] = useMutation(REGISTER);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };
  const onSubmitt = async data => {
    const { firstname, lastname, email, password } = data;

    const response = await registerMutation({
      variables: {
        input: { firstname, lastname, email, password },
      },
    });

    if (response.data.createUser.email !== '' || response.data.createUser.email !== null) {
      navigate('/login', { replace: true });
    }

    yupResolver(registerSchema);
  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/dashboard/projects');
    }
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
  });

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Controller
              name="firstname"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  variant="standard"
                  autoComplete="username"
                  {...register('firstname')}
                  control={control}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  error={!!errors.firstname}
                  fullWidth
                  label={content.firstname}
                  helperText={errors.firstname && errors.firstname?.message}
                />
              )}
            />
            <Controller
              name="lastname"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  variant="standard"
                  autoComplete="username"
                  {...register('lastname')}
                  control={control}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  error={!!errors.lastname}
                  fullWidth
                  label={content.lastname}
                  helperText={errors.lastname && errors.lastname?.message}
                />
              )}
            />
          </Stack>
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                variant="standard"
                error={!!errors.confirmPassword}
                control={control}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                {...register('confirmPassword')}
                fullWidth
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                label={content.confirmPassword}
                helperText={errors.confirmPassword && errors.confirmPassword?.message}
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
        <Stack spacing={3} direction="row" justifyContent="center">
          <Button fullWidth size="large" type="submit" variant="contained" sx={{ ...styledButton }} onClick={handleSubmit(onSubmitt)}>
            {content.register}
          </Button>
        </Stack>
      </form>
    </>
  );
};

RegisterForm.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
};

export default RegisterForm;
