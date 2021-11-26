import { alpha } from '@mui/material/styles';
import palette from './palette';

const LIGHT_MODE = palette.grey[500];

const createCustomShadow = color => {
  const transparent = alpha(color, 0.24);

  return {
    z8: `0 8px 16px 0 ${transparent}`,
    primary: `0 8px 16px 0 ${alpha(palette.primary.main, 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha(palette.secondary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(palette.info.main, 0.24)}`,
    success: `0 8px 16px 0 ${alpha(palette.success.main, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(palette.warning.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(palette.error.main, 0.24)}`,
  };
};

const customShadows = createCustomShadow(LIGHT_MODE);

export default customShadows;
