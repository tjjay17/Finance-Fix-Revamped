import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/SignUp/Register';
import Login from './Pages/Login/Login';
import Navbar from './UI/Navbar/Navbar';

function App() {
  return (
    <div className="App" style = {{overflow:'hidden'}}>
      <Navbar />
      <Switch>

        <Route exact path = '/login'>
          <Login />
        </Route>

        <Route exact path = '/register'>
          <Register />
        </Route>

        <Route exact path = '/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
