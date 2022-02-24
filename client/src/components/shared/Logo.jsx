import React from 'react';
import LogoJirate from '../../assets/images/Logo-jirate.png'
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";


const Logo = ({sx}) => {
    return (
        <>
            <Box component="img"
                 src={LogoJirate} alt="logo-jiraté"
                 sx={{ width: '10rem', ...sx }} >
            </Box>

        </>
    );
};

Logo.propTypes = {
    sx: PropTypes.object
};

export default Logo;