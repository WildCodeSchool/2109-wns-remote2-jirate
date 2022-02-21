import React from 'react'
import { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import LoadingButton  from '@mui/lab/LoadingButton'
import Link from "@mui/material/Link"
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import {LoginSchema} from "../../utils/Validation/validation"

const content = {
    email: 'Email',
    password: 'Mot de passe',
    login: 'Se connecter'
}


Iconify.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sx: PropTypes.object
}

 const Iconify({ icon, sx, ...other }) {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}

const LoginForm = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    }

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(LoginSchema),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        shouldFocusError: false
    })

    return (
        <>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        control={control}
                        error={errors}
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label={content.email}
                    />

                    <TextField
                        control={control}
                        error={errors}
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label={content.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword} edge="end">
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>


                    <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
                        Forgot password?
                    </Link>
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={handleSubmit()}
                >
                    {content.login}
                </LoadingButton>
            </form>

        </>
    )
}

export default LoginForm