import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
// components
import Scrollbar from '../../components/utils/Scrollbar/Scrollbar';
import NavSection from '../../components/elements/NavSection';
import MHidden from '../../components/utils/MHidden/MHidden';
import Logo from '../../assets/images/Logo-jirate.png';

import sidebarConfig from './SidebarConfig';

const DRAWER_WIDTH = 250;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar sx={{ height: '100%', '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' } }}>
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex', padding: '0 3px 30px 3px' }}>
          <img src={Logo} alt="logo-jiraté" />
        </Box>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer open={isOpenSidebar} onClose={onCloseSidebar} PaperProps={{ sx: { width: DRAWER_WIDTH } }}>
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer open variant="persistent" PaperProps={{ sx: { width: DRAWER_WIDTH, bgcolor: 'background.default' } }}>
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
