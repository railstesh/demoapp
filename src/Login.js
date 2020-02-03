import React,{Component} from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(){
    super()
    this.state={
      password:"",
      email:"",
      isAuthenticated:[],
      loginSuccess: false,
      user: null
    }
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
  handleClick=(event)=>{
    event.preventDefault();
    const info = {
      email:this.state.email,
      password:this.state.password,
    }
    fetch('http://localhost:8081/login' ,{
      method:'POST',
      dataType: "JSON",
      headers: {
      "Content-Type": "application/json",
      },
      body : JSON.stringify(info)
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then(responseJSON => {
            alert("Login Successfull");
            this.setState({
              loginSuccess: true,
              user: responseJSON
            })
          });
        } else if(res.status === 404) {
          alert("Invalid Email or Password")
        }
      })
      this.initialState()
  }
  render(){
    if (!this.state.loginSuccess) {
      return (
        <div>
          <center>
            <h3>User Login</h3><br></br>
            <form onSubmit={(event) => this.handleClick(event)}>
              email:<input required type="email" name='email'value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
              password:<input required type="text" name='password'value={this.state.password} onChange={this.handleChange}/><br></br><br></br><br></br>
              <button type='submit'>Login</button>
            </form>
          </center>
        </div>
      )
    } else {
      return <div>
        <Redirect to={{pathname:"/profile", state: this.state.user}} />
      </div>
    }
}
}
export default Login;