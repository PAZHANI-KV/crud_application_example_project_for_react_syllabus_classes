import './App.css';
import BaseApp from './core/Base';
import UserComponent from './Components/UserComponent';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddUser from './Components/AddUser';
import { data } from './Data/data';
import { useState } from 'react';
import { NoPage } from './Components/NoPage';
import { UserDetails } from './Components/UserDetails';


function App() {

  const [user, setUser] = useState(data);

  return (
    <div className="App">

      {/* We are getting this following switch component from router and we have to type every routes inside this switch only  */}

      <Switch>
        <Route exact path="/">

          <UserComponent
            user={user}
            setUser={setUser} />

        </Route>

        <Route path="/adduser">

          <AddUser
            user={user}
            setUser={setUser} />

        </Route>

        <Route path="/user:idx">
          <UserDetails user={user} />
        </Route>

        <Route path="/page">
          <Redirect path="/"></Redirect>
        </Route>

        <Route path="**">

          <NoPage />

        </Route>

      </Switch>


    </div>
  );
}

export default App;



