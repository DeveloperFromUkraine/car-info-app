import React, { Fragment, FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { CarInfo } from "./components/cars-list/car-info/CarInfo";
import { MyOrders } from "./components/my-orders/MyOrders";

const App: FunctionComponent = () => {
  return <Fragment>
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/car-info/:stockNumber' component={CarInfo}/>
          <Route exact path='/orders' component={MyOrders}/>
          <Redirect to='/'/>
        </Switch>
      </Container>
    </Router>
  </Fragment>
}

export default App;
