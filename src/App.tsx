import React, { Fragment, FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Header } from "./components/header/Header";

const App: FunctionComponent = () => {
  return <Fragment>
    <Router>
      <Header />
      <Container>
        <Switch>
          <Redirect to='/'/>
        </Switch>
      </Container>
    </Router>
  </Fragment>
}

export default App;
