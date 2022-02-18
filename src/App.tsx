import React from 'react';
import NavBar from './components/NavBar/NavBar';
import {createBrowserHistory} from 'history'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/auth-page';
import { RegPage } from './pages/registration-page';
import { Basket } from "./components/Basket/Basket"


const history = createBrowserHistory()



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={AuthPage} path="/login" />
          <Route component={RegPage} path="/registration" />
          <Route component={Basket} path="/basket" />
        </Switch>
      </div>
    </BrowserRouter>
  
  );
}


export default App;