import React from 'react'

import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { ResinCalculator } from './';
import { TestDuContext } from './essaiscontext';
import { HomeView } from './pages/HomeView';
import { LoginView } from './pages/LoginView'
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
            <ProtectedRoute noauth path="/Login" component={LoginView} />

            <Route path="/testcontext" component={TestDuContext} />

          </Switch>
        </Container>
      </>
    );
  }
}

export { Main };
