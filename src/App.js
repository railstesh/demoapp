import React,{Component} from 'react';
import Home from './Home';
import Profile from './Profile';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";


class App extends Component {
  render(){
  return (
   
     <Router>
       <div>
          <ol>
          <li>
          <Link to="/Home">Home</Link>
          </li>
          <li>
          <Link to="/Profile">Profile</Link>
          </li>
          </ol>
          <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Profile" component={Profile}/>
          </Switch>
        </div>
       </Router>
    
    
  )}
}
export default App;
