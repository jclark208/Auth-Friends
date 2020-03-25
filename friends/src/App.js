import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/login';
import './App.css';
import FriendsList from './components/friendsList';
import AddNewFriends from './components/addNewFriend'
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Route exact path='/'><Login/></Route>
      <PrivateRoute path='/List' component={FriendsList}/>
      <PrivateRoute path='/Add' component={AddNewFriends}/>

    </div>
  );
}

export default App;
