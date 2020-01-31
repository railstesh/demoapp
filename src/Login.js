import React,{Component} from "react";
import history from './history';
class Login extends Component {
  constructor(){
    super()
    this.state={
      password:"",
      email:"",
      isAuthenticated:[]
    }
  }
   validateForm=() =>{
     const {password,email} =this.state;
    return password.length > 0 && email.length > 0? true : false;
  }
  initialState=()=>{
   this.setState({
    password:"",
    email:""
   })
  }
  handleChange=(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleClick=()=>{
    const info = {
      email:this.state.email,
      password:this.state.password,
    }
    fetch('http://localhost:3001/login' ,{
      method:'POST',
      dataType: "JSON",
      headers: {
      "Content-Type": "application/json",
      },
      body : JSON.stringify(info)
    })
      .then(res => {
      return res.json()
      })
      .then(data=>{
      this.setState({isAuthenticated:data});
      if(data !== 'incorrect email'){
        history.push({
          pathname:`/profile`,
          state: {data: data}
        })
      }
    });
      this.initialState()
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