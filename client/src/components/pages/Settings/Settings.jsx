import CardHeader from "@mui/material/CardHeader";
import SettingsPassword from "./SettingsPassword";
import SettingsNotifications from "./SettingsNotifications";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


const Settings = () => (
    <>
        <CardHeader>
            <title>
               Settings
            </title>
        </CardHeader>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    sx={{ mb: 3 }}
                    variant="h4"
                >
                    Settings
                </Typography>
                <SettingsNotifications />
                <Box sx={{ pt: 3 }}>
                    <SettingsPassword />
                </Box>
            </Container>
        </Box>
    </>
);

export default Settings;