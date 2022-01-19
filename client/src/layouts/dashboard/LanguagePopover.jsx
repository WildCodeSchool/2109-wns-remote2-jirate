import { useRef } from 'react';
// material
import EN_LANG from '../../assets/images/ic_flag_en.svg';
import { IconButton } from '@mui/material';
// components

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: EN_LANG,
  },
];

const LanguagePopover = () => {
  const anchorRef = useRef(null);
  return (
    <IconButton
      ref={anchorRef}
      sx={{
        padding: 0,
        width: 44,
        height: 44,
      }}
    >
      <img src={LANGS[0].icon} alt={LANGS[0].label} />
    </IconButton>
  );
};

export default LanguagePopover;
