import React,{Component} from 'react';

class Registration extends Component{
  constructor(){
    super()
    this.state={
      name:"",
      phone_Number:"",
      email:"",
      address:"",
      dateOfBirth:"",
      security_Question:"",
    }
  }
  initialState=() =>{
    this.setState({
      name:"",
      phone_Number:"",
      email:"",
      password:"",
      address:"",
      dateOfBirth:"",
      security_Question:"",
    })
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleClick=()=>{
    const newRegister = {
      name:this.state.name,
      phone_Number: this.state.phone_Number,
      address : this.state.address,
      email: this.state.email,
      password:this.state.password,
      dateOfBirth: this.state.dateOfBirth,
      security_Question:this.state.security_Question,
    }
    fetch('http://localhost:3001/registration',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newRegister)
    })
    .then(response =>  {
      return response.json()
    })
    this.initialState();

  }
  render(){
    return(
      <div>
      <h2> USER REGISTRATION</h2>
      NAME:<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
      PHONE_NUMBER:<input type="number" name="phone_Number" value={this.state.phone_Number} onChange={this.handleChange}/><br></br><br></br>
      ADDRESS<input type="text" name="address" value={this.state.address} onChange={this.handleChange}/><br></br><br></br>
      EMAIL:<input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
      PASSWORD:<input type="text" name="password" value={this.state.password} onChange={this.handleChange}/><br></br><br></br>
      DATE_OF_BIRTH<input type="text" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange}/><br></br><br></br>
      SECURITY QUESTION<input type="text" name="security_Question" value={this.state.security_Question} onChange={this.handleChange}/><br></br><br></br>
      <button type="submit" onClick={this.handleClick}>SUBMIT</button>
      </div>
    )
  }
}

export default Registration;


















