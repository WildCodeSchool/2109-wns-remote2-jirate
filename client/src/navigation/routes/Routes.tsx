import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';

// Import components
// import Sidebar from '../../components/shared/Sidebar/Sidebar';
import Project from '../../components/pages/Project/Project'

// Import pages


// Refactoring props types

interface LocationType {
  location: PathnameType;
}

interface PathnameType {
  pathname: string;
}



const renderRouter = (location: any) => {
  return (
    <div>
      {/* {location === "/sign-up" ? null : <Sidebar />} */}
      <Project />
      <Switch>
        <Route exact path="/" />
        <Route path="/sign-up" />
        <Route path="/sign-in" />
      </Switch>
    </div>
  )
}

const Routes = ({ location }: LocationType) => {
  return <div>{renderRouter(location.pathname)}</div>;
};


export default withRouter(Routes);