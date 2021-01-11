import React from 'react'

import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { ResinCalculator } from './';
import { TestDuContext } from './essaiscontext';
import { HomeView } from './pages/HomeView';
import { LoginView } from './pages/LoginView'
import { RegisterView } from './pages/RegisterView'
import { AccountView } from './pages/AccountView'
import ProtectedRoute from './ProtectedRoute'



const Default = () => (
  <div>
    {window.location.pathname}

  </div>
);


class Main extends React.Component {



  render() {



    return (
      <>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={ResinCalculator} />
            <Route path="/trololo" component={Default} />
            <Route path="/home" component={HomeView} />
            <Route path="/myaccount" component={AccountView} />
            <ProtectedRoute noauth path="/Login" component={LoginView} />
            <ProtectedRoute noauth path="/Register" component={RegisterView} />

            <Route path="/testcontext" component={TestDuContext} />

          </Switch>
        </Container>
      </>
    );
  }
}

export { Main };
