import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/homepage.component';
import {Switch,Route,Link} from 'react-router-dom';

import Header from './components/header/header.component';
import SignIn from './pages/sign-in-and-register/sign-in-and-register.components';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      {/* <Home /> */}
      <Route exact path='/ECommwebsite' component={Home}/>
      <Route path='/ECommwebsite/signin' component={SignIn}/>
      <Route path='/ECommwebsite/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
