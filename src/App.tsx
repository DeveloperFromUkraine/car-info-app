import React, { Fragment, FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Header } from "./components/header/Header";
import { Filter } from "./components/main/filter/Filter";
import { Box } from '@material-ui/core';

const App: FunctionComponent = () => {
  return <Fragment>
    <Router>
      <Header />
      {/*<Container>*/}
        {/*<Box my={2}>*/}
          <Switch>
            <Route exact path='/' component={Filter}/>
            <Redirect to='/'/>
          </Switch>
        {/*</Box>*/}
      {/*</Container>*/}
    </Router>
  </Fragment>
}

export default App;
