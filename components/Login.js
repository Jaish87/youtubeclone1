import React from 'react';
import MyContext from './MyContext';

class Login extends React.Component{

    constructor(){
        super();
        this.state= {
            username: "",
            password: ""
        }
        
    }
    updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        this.setState({[name]:value});
    }
    authenticate = () =>{
        console.log(this.state);
          if(this.state.username == "Sai" && this.state.password == "Kumar"){
                localStorage.setItem('isUserLoggedIn', true);
               this.props.history.push("/dashboard")
          }
          else
          {
              alert("username / password incorrect");
          }
    }
    render(){
        
        return(
            <div> <br></br>
            <MyContext.Provider value={{isUserLoggedIn:true}}>
               npm 
                {this.props.children}
            </MyContext.Provider>
                <form onSubmit={this.authenticate}>
                <input type="text" placeholder="username here" name="username" onChange={this.updateState}></input>
                <input type="text" placeholder="password here" name="password" onChange={this.updateState}></input>
                <button>Login</button>
                </form>
               
            </div>
        )
    } 
}
export default Login;
