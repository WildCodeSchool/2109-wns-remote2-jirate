import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import Pages
import Project from '../../components/pages/Project/Project';

const renderComponent = location => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Project} />
      </Switch>
    </div>
  );
};

const Routes = ({ location }) => {
  return <div>{renderComponent(location.pathname)}</div>;
};

export default withRouter(Routes);

// Add typescript
renderComponent.propTypes = {
  location: PropTypes.object,
};
