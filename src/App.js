import './App.css';
import BaseApp from './core/Base';
import UserComponent from './Components/UserComponent';
import { Route, Switch } from 'react-router-dom';
import AddUser from './Components/AddUser';
 

function App() {

  const [user, setUser] = useState(data);

  return (
    <div className="App">

      {/* We are getting this following switch component from router and we have to type every routes inside this switch only  */}

      <Switch>
        <Route exact path="/">
          <UserComponent />
        </Route>

        <Route path="/adduser">
          <AddUser />
        </Route>

      </Switch>


    </div>
  );
}

export default App;



