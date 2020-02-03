import React, {Component} from 'react';
import {Nav,Button} from 'react-bootstrap';
import './App.css';
import { Redirect } from 'react-router-dom';
import DemoImg from '../src/images/images.jpg'

class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      update:true,
    }
  }
  handleClick=()=>{
    this.setState({
      update:false,
    })
  }
  render() {
    if (Boolean(this.props.location.state)) {
      const {name, image,email, phone_Number, address} = this.props.location.state
      if(this.state.update){
      return (
        <div>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/home">Logout</Nav.Link>
            </Nav.Item>
          </Nav><br></br>
          <Button onClick={this.handleClick}>Edit profile</Button>
          <center>
            <h3 className="center">WELCOME TO MY PAGE</h3>
            <img class="circular" src={DemoImg} /><br></br>
            Name:<h5>{name}</h5>
            Email:<h5>{email}</h5>
            Phone:<h5>{phone_Number}</h5>
            Address:<h5>{address}</h5>
          </center>
        </div>
      );}else{
        return <Redirect to={{pathname:"/registration", state: this.props.location.state}}/>
      }
    } else {
      return <Redirect to='/login'/>
    }
  }

}

export default ProfilePage;

