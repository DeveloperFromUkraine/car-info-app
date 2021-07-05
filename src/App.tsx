import React, { Fragment, FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

const App: FunctionComponent = () => {
  return <Fragment>
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Redirect to='/'/>
        </Switch>
      </Container>
    </Router>
  </Fragment>
}

export default App;
