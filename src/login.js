import React,{Component} from "react";

class Login extends Component {
  constructor(){
    super()
    this.state={
      password:"",
      email:"",
    }
  }
   validateForm=() =>{
    return email.length > 0 && password.length > 0? true : false;
  }
  initialValue=()=>{
   this.setState({
    password:"",
    email:""
   })
  }
  handleChange=(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleClick=()=>{
    if(this.validateForm()){
     {"you are login successfully"}
    }else{
      {"incorrect email or password"}
    }
      this.initialValue()
  }
  render(){
  return (
    <div>
      <h3>User Login</h3>
      email:<input type="email" name='email'value={this.state.email} onChange={this.handleChange}/>
      password:<input type="text" name='password'value={this.state.password} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Login</button>
      
    </div>
  )
}
}
export default Login;