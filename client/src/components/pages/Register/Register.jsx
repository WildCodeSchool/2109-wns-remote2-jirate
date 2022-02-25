import React from 'react';
import {ContentStyle, RootStyle, SectionStyle, HeaderStyle} from "./RegisterStyle";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RegisterForm from "./RegisterForm";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import imgRegister from "../../../assets/images/imgRegister.png"
import Logo from "../../shared/Logo";

const content = {
    title: 'Inscription',
    login: "Tu as déjà un compte ?",
    login2: 'Connecte-toi',
    welcome: 'Bienvenue Moldu',
    information: "Totalement gratuit et facile d'utilisation",
     reglemency: 'En m\'inscrivant j\'accepte les',
    privacyPolicy: 'politique de confidentialité',
    termsOfService: 'conditions d\'utilisation'
}
const Register = () => {
    return (
        <>
            <RootStyle >
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
                    {content.login} &nbsp;
                    <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
                        {content.login2}
                    </Link>
                    </Typography>
                </HeaderStyle>
                <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        {content.welcome}
                    </Typography>
                    <img src={imgRegister} alt="img-register" />
                </SectionStyle>

                <Container>
                    <ContentStyle>
                        <Box sx={{ mb: 5 }}>
                            <Typography variant="h4" gutterBottom>
                                {content.title}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                {content.information}
                            </Typography>
                        </Box>
                        <RegisterForm />
                        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                            {content.reglemency} &nbsp;
                            <Link underline="always" color="textPrimary">
                                {content.termsOfService}
                            </Link>
                            &nbsp;et la&nbsp;
                            <Link underline="always" color="textPrimary">
                                {content.privacyPolicy}
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

export default Register