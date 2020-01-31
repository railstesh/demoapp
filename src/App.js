import React,{Component} from 'react';

import './App.css';
import {
  Link
} from "react-router-dom";


class App extends Component {
  render(){
  return (
      <div>
          <Link to="/home">Home</Link>&nbsp;&nbsp;
          <Link to="/profile">Profile</Link>&nbsp;&nbsp;
          <Link to="/registration">sign up</Link>&nbsp;&nbsp;
          <Link to="/login">Login</Link>&nbsp;&nbsp;
          
          
      </div>
  )}
}
export default App;
