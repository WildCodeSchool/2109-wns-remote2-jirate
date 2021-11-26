import Routes from './navigation/routes/Routes';

import ThemeConfig from './theme/index';
import GlobalStyles from './theme/globalStyles';

const App = () => {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes />
    </ThemeConfig>
  );
};

export default App;
