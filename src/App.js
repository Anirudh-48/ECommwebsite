import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/homepage.component';
import {Switch,Route,Link} from 'react-router-dom';
import React from 'react';

import Header from './components/header/header.component';
import SignIn from './pages/sign-in-and-register/sign-in-and-register.components';
import Shop from './pages/shop/shop.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component
 {
  constructor(props)
  {
    super(props)

    this.state={
      currentUser: null
    }
  }

unsubscribeFromAuth = null;

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    }

    this.setState({ currentUser: userAuth });
  });
}

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

   render()
   {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      {/* <Home /> */}
      <Route exact path='/ECommwebsite' component={Home}/>
      <Route path='/ECommwebsite/signin' component={SignIn}/>
      <Route path='/ECommwebsite/shop' component={Shop}/>
      </Switch>
    </div>
  );
   }
}

export default App;
