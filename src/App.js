import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route,Switch,Redirect } from "react-router-dom";
import history from "./history/History"

import Header from "./component/Header/Header"
import EventPage from "./component/Event/EventPage"
import DetailedEventPage from "./component/DetailedEvent/DetailedEventPage"


const AppRouter = () =>{
  return <Router history={history}>
          <main>
            <Header />
            <Switch>
              <Route exact path="/" component={EventPage} />
              <Route exact path="/event/:id" component={DetailedEventPage} />
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
}

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <AppRouter />
     </React.Fragment>
    );
  }
}
 
export default App


