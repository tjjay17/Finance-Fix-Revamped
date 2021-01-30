import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/SignUp/Register';

function App() {
  return (
    <div className="App">
      <Switch>
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
