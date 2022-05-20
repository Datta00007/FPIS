import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Alogin from './components/login/Alogin';

import Clogin from './components/login/Clogin';

import Csignup from './components/login/Csignup';
import Contact from './components/main/Contact';
import Home from './Home';
import Main from './components/main/Main';
import Errorpage from './components/errorpage/Errorpage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Clientlist from './components/main/Clientlist';
import Dsignup from './components/main/Dsignup';
function App() {
  // const [user, setLoginUser] = useState(false)

  return (
    <Router>
      <ToastContainer autoClose={5000}/>
      <Switch>
        <Route path='/' exact component={Home} />

        <Route path="/clogin">
          <Clogin />
        </Route>
        <Route path="/csignup">
          <Csignup />
        </Route>
        <Route path="/dsignup">
          <Dsignup />
        </Route>
        <Route path="/clientlist">
          <Clientlist />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
       
        <Route path='/alogin' component={Alogin} />
        {/* <Route exact path="/main">
          {
            user && user._id ? <Main setLoginUser={setLoginUser} /> : <Clogin setLoginUser={setLoginUser} />
          }
        </Route> */}
         <Route exact path="/main"> {<Main />}</Route>
        <Route path="*" component={Errorpage} />
      </Switch>
    </Router>
  );
}

export default App;