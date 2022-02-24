import React from 'react';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useForm } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {LoginSchema} from "../../utils/Validation/validation";

const content = {
  email: 'Email',
  password: 'Mot de passe',
  login: 'Se connecter',
  forgotPassword: 'Mot de passe oublié ?',
  rememberMe: 'Se souvenir de moi',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
  });

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            variant="standard"
            autoComplete="username"
            control={control}
            error={!!errors.email}
            fullWidth
            type="email"
            label={content.email}
            helperText={errors.email && errors.email?.message}
          />
          <TextField
            variant="standard"
            error={!!errors.password}
            control={control}
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
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel control={<Checkbox />} label={content.rememberMe} />
          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            {content.forgotPassword}
          </Link>
        </Stack>

        <Button fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit}>
          {content.login}
        </Button>
      </form>
    </>
  );
};


export default LoginForm;
