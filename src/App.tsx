import React, { Fragment, FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const App: FunctionComponent = () => {
  return <Fragment>
    <Router>
      <Container>
        <Switch>
          <Redirect to='/'/>
        </Switch>
      </Container>
    </Router>
  </Fragment>
}

export default App;
