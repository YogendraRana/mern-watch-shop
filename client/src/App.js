import { Switch, Route } from 'react-router-dom';

//import context
import MainContext from './Context/MainContext.js'

//Navbar Component
import Navbar from './Components/Navigation/Navbar';

//Page Components
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Detail from './Components/Detail/Detail'
import Profile from './Components/Profile/Profile'

//Importing main css file
import './App.css'

function App() {
  return (
    <div className="app">
      <MainContext>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />						
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/:id' component={Detail} />
        </Switch>
      </MainContext>
    </div>
  );
}

export default App;
