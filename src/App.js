import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/homepage.component';
import {Switch,Route,Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


// const home= (props)=>{
//   console.log(props);
//   return(
// <div>
//   {/* <Link to='/hats'>Hats</Link> */}
//   {/* <button onClick={() =>props.history.push('/hats')}>Hats</button> alternate method to go to some other page*/}
// </div>
//   );
// }


function App() {
  return (
    <div>
      <Header/>
      <Switch>
      {/* <Home /> */}
      <Route exact path='/' component={Home}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
