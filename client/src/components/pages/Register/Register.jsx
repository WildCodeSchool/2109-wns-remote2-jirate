import React from 'react';
import PropTypes from 'prop-types'
import {ContentStyle, RootStyle, SectionStyle} from "./RegisterStyle";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RegisterForm from "./RegisterForm";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const Register = () => {
    return (
        <>
            <RootStyle title="Register | Minimal-UI">
                    Already have an account? &nbsp;
                    <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
                        Login
                    </Link>

                <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Manage the job more effectively with Minimal
                    </Typography>
                    <img alt="register" src="/static/illustrations/illustration_register.png" />
                </SectionStyle>

                <Container>
                    <ContentStyle>
                        <Box sx={{ mb: 5 }}>
                            <Typography variant="h4" gutterBottom>
                                Get started absolutely free.
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Free forever. No credit card needed.
                            </Typography>
                        </Box>

                        <RegisterForm />

                        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                            By registering, I agree to Minimal&nbsp;
                            <Link underline="always" color="textPrimary">
                                Terms of Service
                            </Link>
                            &nbsp;and&nbsp;
                            <Link underline="always" color="textPrimary">
                                Privacy Policy
                            </Link>
                            .
                        </Typography>

                        <Typography
                            variant="subtitle2"
                            sx={{
                                mt: 3,
                                textAlign: 'center',
                                display: { sm: 'none' }
                            }}
                        >
                            Already have an account?&nbsp;
                            <Link underline="hover" to="/login" component={RouterLink}>
                                Login
                            </Link>
                        </Typography>
                    </ContentStyle>
                </Container>
            </RootStyle>
        </>
    );
};

Register.propTypes = {
};

export default Register