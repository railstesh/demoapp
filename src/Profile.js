import React,{Component} from 'react';

class Profile extends Component{
  constructor(){
    super()
    this.state={
      Phone_Number:Number,
      email:"",
      address:"",
      dateOfBirth:"",
      security_Question:"",
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleClick=()=>{

  }
  render(){
    return(
      <div>
        <h2> USER PROFILE</h2>
      PHONE_NUMBER:<input type="Phone_Number" name="number" value={this.state.Phone_Number} onChange={this.handleChange}/><br></br><br></br>
      EMAIL:<input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
      ADDRESS<input type="text" name="address" value={this.state.address} onChange={this.handleChange}/><br></br><br></br>
       DATE_OF_BIRTH<input type="text" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange}/><br></br><br></br>
       SECURITY QUESTION<input type="security_Question" name="email" value={this.state.security_Question} onChange={this.handleChange}/><br></br><br></br>
       <button type="submit" onClick={this.handleClick}>SUBMIT</button>
       </div>
    )
  }
}

export default Profile;


















